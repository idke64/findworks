<script lang="ts">
    let { data } = $props()
    let team = $derived(data.team);

    console.log(team);
</script>

<div class="p-12 bg-gray-50 px-[8%] gap-6 flex flex-col">
    <a href="/" class="self-start px-2 py-1 bg-blue-500 rounded-lg hover:bg-blue-600 duration-200 flex items-center justify-center font-semibold text-white">
        ← Go back
    </a>
    <div class="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col gap-3">
        <div class="flex items-start justify-between">
            <div class="flex flex-col gap-y-1">
                <h2 class="text-3xl font-boldmb-2 text-[#E66100]">{team.name}</h2>
                <p class="text-lg text-[#00ABC1] font-semibold">{team.info.department}</p>
            </div>
        </div>
        
        {#if team.info.description}
            <p class="text-gray-600 text-sm">{team.info.description}</p>
        {/if}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
                Contact Information
            </h2>
            <div class="space-y-3">
                <div>
                    <p class="text-sm text-gray-600">Main Contact</p>
                    <p class="text-black text-sm">{team.info.main_contact}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Office Locations</p>
                    <div class="flex flex-wrap gap-2 mt-1">
                        {#each team.info.office_locations as location}
                            <span class="text-black rounded-full text-sm">
                                {location}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Skills & Technologies
            </h2>
            <div class="flex flex-wrap gap-2">
                {#each team.info.skills as skill}
                    <a href="/?query={skill}" class="bg-[#00ABC1] text-white  px-3 py-1 rounded-lg text-sm font-semibold duration-200 hover:bg-[#00ABC1]/80">
                        {skill}
                    </a>
                {/each}
            </div>
        </div>
    </div>

    <!-- Learning Areas -->
    <div class="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            Learning & Development
        </h2>
        <div class="flex flex-wrap gap-2">
            {#each team.info.learning as learning}
                <a href="/?query={learning}" class="bg-[#00ABC1] text-white  px-3 py-1 rounded-lg text-sm font-semibold duration-200 hover:bg-[#00ABC1]/80">
                    {learning}
                </a>
            {/each}
        </div>
    </div>

    <!-- Projects Section -->
    <div class="bg-white rounded-lg border-2 border-gray-200 p-6">
        <h2 class="text-xl font-bold text-[#E66100] mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Current Projects ({team.projects.length})
        </h2>
        
        <div class="space-y-4">
            {#each team.projects as project}
                <div class="border-2 border-gray-200 rounded-lg p-4 transition-shadow">
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-lg font-semibold text-[#00ABC1]">{project.title}</h3>
                        <span class="px-3 py-1 rounded-lg text-sm font-semibold
                            {project.status === 'In-Progress' ? 'bg-blue-100 text-blue-800' : 
                             project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                             'bg-gray-100 text-gray-800'}">
                            {project.status}
                        </span>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                            <p class="text-gray-600">EDG Engineer</p>
                            <p class="font-medium">{project.edg_engineer}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">EDG Manager</p>
                            <p class="font-medium">{project.edg_manager}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Mentor</p>
                            <p class="font-medium">{project.mentor}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Sponsor</p>
                            <p class="font-medium">{project.sponsor}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Office Location</p>
                            <p class="font-medium">{project.office_location}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Duration</p>
                            <p class="font-medium">{project.start_date} - {project.expected_end}</p>
                        </div>
                    </div>
                    
                    {#if project.product_area}
                        <div class="mt-3">
                            <p class="text-gray-600 text-sm">Product Area</p>
                            <p class="font-medium">{project.product_area}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>