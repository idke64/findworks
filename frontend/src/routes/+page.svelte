<script lang="ts">
	import TeamCard from "$lib/components/ui/TeamCard.svelte";

    let { data } = $props();

	let query = $state(data.query);
	let results: any[] = $state(data.teams);
	let loading = $state(false);
	let error = $state('');

	async function searchTeams() {
		if (!query.trim()) return;
		loading = true;
		error = '';
		try {
			const response = await fetch(`https://findworks-server.andyy.dev/search?query=${encodeURIComponent(query)}&k=20`);
			if (!response.ok) throw new Error('Failed to fetch results');
			results = await response.json();
            console.log(results);
		} catch (e: any) {
			error = e.message;
			results = [];
		} finally {
			loading = false;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			searchTeams();
		}
	}
</script>
<section class="w-full min-h-[100vh] flex flex-col items-center py-12 px-[8%] gap-8 bg-gray-50">
    <div class="flex gap-y-6 flex-col w-full">
        <h1 class="text-center flex justify-center">
            <span class="text-[#E66100]">Find</span>
            <span class="text-[#00ABC1]">Works</span>
        </h1>
        <div class="flex items-center gap-x-3 h-full">
            <input
                placeholder="Interests, Tools, Languages, Teams, Projects"
                class="w-full border-2 rounded-lg focus:ring-4 focus:ring-blue-400 border-gray-200 px-4 py-2 duration-200 text-base bg-white"
                bind:value={query}
                onkeydown={handleKeydown}
                aria-label="Search bar"
            />
            <button class="px-6 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 duration-200 self-center h-full py-2.5 cursor-pointer" onclick={searchTeams} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
        </div>
        {#if error}
            <div class="text-red-500 text-center">{error}</div>
        {/if}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full overflow-y-auto p-2">
        {#each results as result}
            <TeamCard name={result.payload.name} description={result.payload.info.description} department={result.payload.info.department} similarityScore={result.score} id={result.payload.id}/>
        {/each}
        {#if !loading && results.length === 0}
            <div class="col-span-full text-center text-gray-500">Search for teams</div>
        {/if}
    </div>
</section>