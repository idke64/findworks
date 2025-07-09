import { u as push, z as ensure_array_like, x as escape_html, A as attr, G as attr_class, F as stringify, w as pop } from './index-BgtxOilu.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let team = data.team;
  const each_array = ensure_array_like(team.info.office_locations);
  const each_array_1 = ensure_array_like(team.info.skills);
  const each_array_2 = ensure_array_like(team.info.learning);
  const each_array_3 = ensure_array_like(team.projects);
  $$payload.out += `<div class="p-12 bg-gray-50 px-[8%] gap-6 flex flex-col"><a href="/" class="self-start px-2 py-1 bg-blue-500 rounded-lg hover:bg-blue-600 duration-200 flex items-center justify-center font-semibold text-white">← Go back</a> <div class="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col gap-3"><div class="flex items-start justify-between"><div class="flex flex-col gap-y-1"><h2 class="text-3xl font-boldmb-2 text-[#E66100]">${escape_html(team.name)}</h2> <p class="text-lg text-[#00ABC1] font-semibold">${escape_html(team.info.department)}</p></div></div> `;
  if (team.info.description) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-gray-600 text-sm">${escape_html(team.info.description)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-white border-2 border-gray-200 rounded-lg p-6"><h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg> Contact Information</h2> <div class="space-y-3"><div><p class="text-sm text-gray-600">Main Contact</p> <p class="text-black text-sm">${escape_html(team.info.main_contact)}</p></div> <div><p class="text-sm text-gray-600">Office Locations</p> <div class="flex flex-wrap gap-2 mt-1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let location = each_array[$$index];
    $$payload.out += `<span class="text-black rounded-full text-sm">${escape_html(location)}</span>`;
  }
  $$payload.out += `<!--]--></div></div></div></div> <div class="bg-white rounded-lg border-2 border-gray-200 p-6"><h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> Skills &amp; Technologies</h2> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let skill = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", `/?query=${stringify(skill)}`)} class="bg-[#00ABC1] text-white px-3 py-1 rounded-lg text-sm font-semibold duration-200 hover:bg-[#00ABC1]/80">${escape_html(skill)}</a>`;
  }
  $$payload.out += `<!--]--></div></div></div> <div class="bg-white rounded-lg border-2 border-gray-200 p-6"><h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg> Learning &amp; Development</h2> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let learning = each_array_2[$$index_2];
    $$payload.out += `<a${attr("href", `/?query=${stringify(learning)}`)} class="bg-[#00ABC1] text-white px-3 py-1 rounded-lg text-sm font-semibold duration-200 hover:bg-[#00ABC1]/80">${escape_html(learning)}</a>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="bg-white rounded-lg border-2 border-gray-200 p-6"><h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center"><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg> Current Projects (${escape_html(team.projects.length)})</h2> <div class="space-y-4"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let project = each_array_3[$$index_3];
    $$payload.out += `<div class="border-2 border-gray-200 rounded-lg p-4 transition-shadow"><div class="flex justify-between items-start mb-3"><h3 class="text-lg font-semibold text-[#00ABC1]">${escape_html(project.title)}</h3> <span${attr_class(`px-3 py-1 rounded-lg text-sm font-semibold ${stringify(project.status === "In-Progress" ? "bg-blue-100 text-blue-800" : project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800")}`)}>${escape_html(project.status)}</span></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm"><div><p class="text-gray-600">EDG Engineer</p> <p class="font-medium">${escape_html(project.edg_engineer)}</p></div> <div><p class="text-gray-600">EDG Manager</p> <p class="font-medium">${escape_html(project.edg_manager)}</p></div> <div><p class="text-gray-600">Mentor</p> <p class="font-medium">${escape_html(project.mentor)}</p></div> <div><p class="text-gray-600">Sponsor</p> <p class="font-medium">${escape_html(project.sponsor)}</p></div> <div><p class="text-gray-600">Office Location</p> <p class="font-medium">${escape_html(project.office_location)}</p></div> <div><p class="text-gray-600">Duration</p> <p class="font-medium">${escape_html(project.start_date)} - ${escape_html(project.expected_end)}</p></div></div> `;
    if (project.product_area) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="mt-3"><p class="text-gray-600 text-sm">Product Area</p> <p class="font-medium">${escape_html(project.product_area)}</p></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Bhml4l6b.js.map
