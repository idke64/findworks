import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BM0A-ZPb.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BDV4Oqqv.js","_app/immutable/chunks/K8avs-oi.js","_app/immutable/chunks/DnRIBi2z.js","_app/immutable/chunks/DVEcl83S.js"];
export const stylesheets = [];
export const fonts = [];
