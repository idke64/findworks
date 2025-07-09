import { e as error } from './index2-CvuFLVuQ.js';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bhml4l6b.js')).default;
const server_id = "src/routes/team/[teamId]/+page.server.ts";
const imports = ["_app/immutable/nodes/3.BVRKgT75.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BDV4Oqqv.js","_app/immutable/chunks/K8avs-oi.js","_app/immutable/chunks/DnRIBi2z.js","_app/immutable/chunks/DVEcl83S.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-Cxla9h3H.js.map
