from __future__ import annotations
from datetime import date
from typing import List, Optional, Literal
from uuid import UUID, uuid4

from pydantic import BaseModel, Field


# ---------------------------------------------------------------------------#
# Core domain models                                                         #
# ---------------------------------------------------------------------------#

class Project(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    title: str
    status: Literal["Planning", "Approved", "In-Progress", "Complete"]
    edg_engineer: str
    sponsor: str
    mentor: Optional[str] = None
    edg_manager: str
    start_date: date
    expected_end: Optional[date] = None
    office_location: str
    department: str
    product_area: str


class TeamInfo(BaseModel):
    main_contact: str
    description: Optional[str] = None
    skills: List[str]
    learning: List[str]
    department: str
    office_locations: List[str]


class Team(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    name: str
    info: TeamInfo
    projects: List[Project]


# ---------------------------------------------------------------------------#
# API response models                                                        #
# ---------------------------------------------------------------------------#

class SearchResult(BaseModel):
    id: int                    # row index inside the in-memory corpus
    score: float               # cosine/L2 similarity distance
    payload: Team              # full Team object returned to the caller
