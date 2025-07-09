import json
import os
from pathlib import Path
from typing import List, Sequence

import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

from .schemas import Team, SearchResult


DATA_PATH = os.getenv("DATA_PATH", "data/teams_v2.json")
MODEL_NAME = os.getenv("MODEL_NAME", "all-MiniLM-L6-v2")


def _team_to_corpus(team: Team) -> str:
    """Create a single free-text document representing *team*."""
    parts: List[str] = [
        team.name,
        team.info.main_contact,
        team.info.description or "",
        " ".join(team.info.skills),
        " ".join(team.info.learning),
        team.info.department,
        " ".join(team.info.office_locations),
    ]
    for p in team.projects:
        parts.extend([p.title, p.edg_engineer, p.sponsor, p.mentor, p.edg_manager, p.department, p.product_area])
    return " ".join(parts)


class VectorSearchService:
    """Load, embed and search Team objects with FAISS."""

    def __init__(self, data_path: str = DATA_PATH, model_name: str = MODEL_NAME) -> None:
        self.data_path = Path(data_path)
        self.model_name = model_name

        self._teams: Sequence[Team] | None = None
        self._index: faiss.Index | None = None
        self._model: SentenceTransformer | None = None

    # ------------------------------------------------------------------ #
    # Lifecycle                                                           #
    # ------------------------------------------------------------------ #

    def startup(self) -> None:
        # 1 ─ Load JSON and validate with Pydantic
        raw = json.loads(self.data_path.read_text(encoding="utf-8"))
        self._teams = [Team.model_validate(obj) for obj in raw]

        # 2 ─ Build embeddings
        self._model = SentenceTransformer(self.model_name)
        corpus = [_team_to_corpus(t) for t in self._teams]
        vectors = self._model.encode(corpus, convert_to_numpy=True)

        # 3 ─ Index in FAISS (L2 space)
        self._index = faiss.IndexFlatL2(vectors.shape[1])
        self._index.add(vectors)

    def shutdown(self) -> None:
        """Free large objects (mainly useful in tests)."""
        self._teams = self._index = self._model = None

    # ------------------------------------------------------------------ #
    # Query                                                               #
    # ------------------------------------------------------------------ #

    def query(self, text: str, k: int = 5) -> List[SearchResult]:
        if any(x is None for x in (self._teams, self._index, self._model)):
            raise RuntimeError("VectorSearchService not ready (still loading).")

        query_vec = self._model.encode([text])
        distances, indices = self._index.search(np.asarray(query_vec), k)

        return [
            SearchResult(
                id=int(idx),
                score=float(dist),
                payload=self._teams[idx],   # type: ignore[index]  (validated above)
            )
            for dist, idx in zip(distances[0], indices[0])
        ]

    def get_team(self, team_id: str) -> Team | None:
        """Get a specific team by its ID."""
        if self._teams is None:
            raise RuntimeError("VectorSearchService not ready (still loading).")
        
        # Convert string ID to UUID for comparison
        from uuid import UUID
        try:
            target_id = UUID(team_id)
        except ValueError:
            return None
            
        for team in self._teams:
            if team.id == target_id:
                return team
        return None
