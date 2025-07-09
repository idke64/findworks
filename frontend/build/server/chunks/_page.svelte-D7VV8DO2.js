import { u as push, z as ensure_array_like, A as attr, x as escape_html, w as pop, F as stringify } from './index-BgtxOilu.js';

function TeamCard($$payload, $$props) {
  push();
  let { name, description, department, similarityScore, id } = $$props;
  $$payload.out += `<a${attr("href", `/team/${stringify(id)}`)} class="w-full flex flex-col rounded-lg border-2 border-gray-200 p-4 self-start bg-white hover:shadow-lg duration-200 h-full hover:scale-105 relative"><div class="bg-gray-200 rounded-b-sm absolute right-4 top-0 px-1 py-0.5 text-[#00ABC1] font-bold text-sm">${escape_html(similarityScore.toFixed(2))}</div> <div class="flex flex-col gap-y-2 h-full"><div class="flex flex-col gap-y-0.5"><p class="text-xs text-[#00ABC1] font-medium">${escape_html(department)}</p> <h3 class="truncate text-[#E66100]">${escape_html(name)}</h3></div> <p class="text-sm text-gray-500 line-clamp-4">`;
  if (description == null || description.length == 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `No Description`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(description)}`;
  }
  $$payload.out += `<!--]--></p></div></a>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let query = data.query;
  let results = data.teams;
  let loading = false;
  const each_array = ensure_array_like(results);
  $$payload.out += `<section class="w-full min-h-[100vh] flex flex-col items-center py-12 px-[8%] gap-8 bg-gray-50"><div class="flex gap-y-6 flex-col w-full"><h1 class="text-center flex justify-center"><span class="text-[#E66100]">Find</span> <span class="text-[#00ABC1]">Works</span></h1> <div class="flex items-center gap-x-3 h-full"><input placeholder="Interests, Tools, Languages, Teams, Projects" class="w-full border-2 rounded-lg focus:ring-4 focus:ring-blue-400 border-gray-200 px-4 py-2 duration-200 text-base bg-white"${attr("value", query)} aria-label="Search bar"/> <button class="px-6 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 duration-200 self-center h-full py-2.5 cursor-pointer"${attr("disabled", loading, true)}>${escape_html("Search")}</button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full overflow-y-auto p-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let result = each_array[$$index];
    TeamCard($$payload, {
      name: result.payload.name,
      description: result.payload.info.description,
      department: result.payload.info.department,
      similarityScore: result.score,
      id: result.payload.id
    });
  }
  $$payload.out += `<!--]--> `;
  if (results.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="col-span-full text-center text-gray-500">Search for teams</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D7VV8DO2.js.map
