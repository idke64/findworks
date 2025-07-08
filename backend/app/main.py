from contextlib import asynccontextmanager
from typing import List

from fastapi import FastAPI, HTTPException, Query

from .schemas import SearchResult
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


@app.get("/search", response_model=List[SearchResult])
async def search(
    query: str = Query(..., description="Free-text query"),
    k: int = Query(5, ge=1, le=50, description="Number of results to return"),
) -> List[SearchResult]:
    try:
        return service.query(query, k)
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
