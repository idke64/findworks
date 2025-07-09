export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Bn-SnxPm.js",app:"_app/immutable/entry/app.B6c1TWjU.js",imports:["_app/immutable/entry/start.Bn-SnxPm.js","_app/immutable/chunks/B_muEKkI.js","_app/immutable/chunks/BQZi4i55.js","_app/immutable/chunks/BDV4Oqqv.js","_app/immutable/chunks/K8avs-oi.js","_app/immutable/chunks/Bhc-2mlS.js","_app/immutable/entry/app.B6c1TWjU.js","_app/immutable/chunks/BDV4Oqqv.js","_app/immutable/chunks/K8avs-oi.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BQZi4i55.js","_app/immutable/chunks/Bhc-2mlS.js","_app/immutable/chunks/DnRIBi2z.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/team/[teamId]",
				pattern: /^\/team\/([^/]+?)\/?$/,
				params: [{"name":"teamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
