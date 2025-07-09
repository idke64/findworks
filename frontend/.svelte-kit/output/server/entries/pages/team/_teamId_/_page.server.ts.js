import { e as error } from "../../../../chunks/index2.js";
const load = async ({ params, fetch }) => {
  const { teamId } = params;
  try {
    const response = await fetch(`http://localhost:8000/team/${teamId}`);
    if (!response.ok) {
      throw error(response.status, `Failed to load team: ${response.statusText}`);
    }
    const team = await response.json();
    return {
      team
    };
  } catch (err) {
    console.error("Error fetching team data:", err);
    throw error(500, "Failed to load team data");
  }
};
export {
  load
};
