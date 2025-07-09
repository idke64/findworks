from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from .schemas import SearchResult, Team
from .services import VectorSearchService

service = VectorSearchService()  # single global instance


@asynccontextmanager
async def lifespan(app: FastAPI):
    service.startup()
    try:
        yield
    finally:
        service.shutdown()


app = FastAPI(title="Project Search API", lifespan=lifespan)

# Add CORS middleware to allow everything
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/search", response_model=List[SearchResult])
async def search(
    query: str = Query(..., description="Free-text query"),
    k: int = Query(5, ge=1, le=50, description="Number of results to return"),
) -> List[SearchResult]:
    try:
        return service.query(query, k)
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))

@app.get("/team/{team_id}", response_model=Team)
async def get_team(team_id: str) -> Team:
    try:
        team = service.get_team(team_id)
        if team is None:
            raise HTTPException(status_code=404, detail="Team not found")
        return team
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
