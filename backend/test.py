from fastapi import FastAPI, Query
from pydantic import BaseModel
import json
import numpy as np
import pandas as pd
import faiss
from sentence_transformers import SentenceTransformer
from typing import List

# === Setup FastAPI ===
app = FastAPI()

# === Load and process data on startup ===
with open("projects_by_team_nested.json", "r") as f:
    data = json.load(f)

records = []
for team_name, team_data in data.items():
    team_info = team_data.get("team_info", {})
    for project in team_data.get("projects", []):
        record = {
            "team": team_name,
            "main_contact": team_info.get("Main contact", ""),
            "description": team_info.get("Description of Team", ""),
            "skills": team_info.get("Main skills used by this team", ""),
            "project_title": project.get("Title", ""),
            "engineer": project.get("EDG Engineer", ""),
            "mentor": project.get("Project mentor", ""),
            "manager": project.get("Project sponsor (Manager)", "")
        }
        records.append(record)

df = pd.DataFrame(records)

# Build embeddings
texts = df.apply(
    lambda row: f"{row['team']} {row['project_title']} {row['description']} {row['skills']} {row['engineer']} {row['mentor']} {row['manager']}",
    axis=1
)

model = SentenceTransformer("all-MiniLM-L6-v2")
vectors = model.encode(texts.tolist(), convert_to_numpy=True)

# Build FAISS index
d = vectors.shape[1]
index = faiss.IndexFlatL2(d)
index.add(vectors)


# === API model for response ===
class MatchResult(BaseModel):
    team: str
    project_title: str
    description: str
    skills: str
    engineer: str
    mentor: str
    manager: str


# === Search endpoint ===
@app.get("/search", response_model=List[MatchResult])
def search_projects(query: str = Query(..., description="Search query"), k: int = 5):
    query_vec = model.encode([query])
    D, I = index.search(np.array(query_vec), k)

    results = []
    for idx in I[0]:
        row = df.iloc[idx]
        results.append(MatchResult(
            team=row["team"],
            project_title=row["project_title"],
            description=row["description"],
            skills=row["skills"],
            engineer=row["engineer"],
            mentor=row["mentor"],
            manager=row["manager"],
        ))
    return results
