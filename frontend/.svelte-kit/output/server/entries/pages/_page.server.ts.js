import { e as error } from "../../chunks/index2.js";
const load = async ({ fetch, url }) => {
  try {
    const query = url.searchParams.get("query") ?? "";
    const response = await fetch(
      `http://localhost:8000/search?query=${encodeURIComponent(query)}&k=20`
    );
    if (!response.ok) throw error(response.status, `Failed to load teams: ${response.statusText}`);
    const teams = await response.json();
    return {
      teams,
      query
    };
  } catch (err) {
    console.error("Error fetching teams data:", err);
    throw error(500, "Failed to load teams data");
  }
};
export {
  load
};
