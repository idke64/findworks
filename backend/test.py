import json
import numpy as np
import pandas as pd
import faiss
from sentence_transformers import SentenceTransformer

# === Load and flatten your nested JSON ===
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

# === Build text entries for embedding ===
texts = df.apply(
    lambda row: f"{row['team']} {row['project_title']} {row['description']} {row['skills']} {row['engineer']} {row['mentor']} {row['manager']}",
    axis=1
)

# === Embed using sentence-transformers ===
model = SentenceTransformer("all-MiniLM-L6-v2")
vectors = model.encode(texts.tolist(), convert_to_numpy=True)

# === Index in FAISS ===
d = vectors.shape[1]
index = faiss.IndexFlatL2(d)
index.add(vectors)

# === Run a sample query ===
query = "making backend in c++"
query_vec = model.encode([query])
D, I = index.search(np.array(query_vec), k=5)

# === Show top matches ===
print("\nTop matches:\n")
print(df.iloc[I[0]])
