import { e as error } from './index2-CvuFLVuQ.js';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D7VV8DO2.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.BM0A-ZPb.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BDV4Oqqv.js","_app/immutable/chunks/K8avs-oi.js","_app/immutable/chunks/DnRIBi2z.js","_app/immutable/chunks/DVEcl83S.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-CE-hsjse.js.map
