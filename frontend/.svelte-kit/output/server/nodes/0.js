

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.TI91GwJ0.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BDV4Oqqv.js","_app/immutable/chunks/Bhc-2mlS.js"];
export const stylesheets = ["_app/immutable/assets/0.DZVBhgaj.css"];
export const fonts = [];
