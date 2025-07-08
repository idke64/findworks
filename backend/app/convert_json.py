# app/convert_json.py
import ast
import json
import uuid
import datetime as dt
from pathlib import Path
from typing import List

from schemas import Team, TeamInfo, Project

RAW = Path("data/projects_by_team_nested.json").read_text(encoding="utf-8")
source = json.loads(RAW)

# --------------------------------------------------------------------------- #
# Helpers                                                                     #
# --------------------------------------------------------------------------- #
def parse_list(raw: str | None) -> List[str]:
    """
    Robustly turn the various list encodings in the source JSON into a List[str].
    • '' or None              -> []
    • valid JSON list         -> [...]
    • Python literal list     -> [...]
    • plain 'a, b, c' string  -> [...]
    """
    if not raw or not raw.strip():
        return []
    # 1) strict JSON
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        pass
    # 2) Python literal (allows single quotes, trailing commas, etc.)
    try:
        return ast.literal_eval(raw)
    except (ValueError, SyntaxError):
        pass
    # 3) simple comma-separated fall-back
    return [part.strip() for part in raw.split(",") if part.strip()]


STATUS_MAP = {
    "Planning": "Planning",
    "Approved": "Approved",
    "In Progress": "In-Progress",   # space → hyphen
    "In-Progress": "In-Progress",
    "Complete": "Complete",
}

# --------------------------------------------------------------------------- #
# Transformation                                                              #
# --------------------------------------------------------------------------- #
teams: list[Team] = []

for team_name, bundle in source.items():
    ti = bundle["team_info"]
    projects_raw = bundle.get("projects", [])

    team = Team(
        name=team_name,
        info=TeamInfo(
            main_contact=ti["Main contact"],
            description=ti.get("Description of Team") or None,
            skills=parse_list(ti.get("Main skills used by this team")),
            learning=parse_list(ti.get("With us, you may learn")),
            department=ti["Department_team"],
            office_locations=parse_list(ti.get("Office Location")),
        ),
        projects=[
            Project(
                title=p["Title"],
                status=STATUS_MAP.get(p["Project status"], "Planning"),  # default if unseen
                edg_engineer=p["EDG Engineer"],
                sponsor=p["Project sponsor (Manager)"],
                mentor=p.get("Project mentor") or None,
                edg_manager=p["EDG Manager"],
                start_date=dt.datetime.strptime(
                    p["Start date"], "%m/%d/%Y"
                ).date(),
                expected_end=(
                    dt.datetime.strptime(p["Expected completion date"], "%m/%d/%Y").date()
                    if p.get("Expected completion date")
                    else None
                ),
                office_location=p["Office Location (EDG Engineer)"],
                department=p["Department_proj"],
                product_area=p["Product Area"],
            )
            for p in projects_raw
        ],
    )
    teams.append(team)

# --------------------------------------------------------------------------- #
# Output                                                                       #
# --------------------------------------------------------------------------- #
Path("data/teams_v2.json").write_text(
    json.dumps([t.model_dump(mode="json") for t in teams], indent=2)
)

print("✓ Converted → data/teams_v2.json")
