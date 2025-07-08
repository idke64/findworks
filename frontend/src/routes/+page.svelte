<script lang="ts">
	import PeopleCard from "$lib/components/ui/PeopleCard.svelte";
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let query = '';
	let results = [];
	let loading = false;
	let error = '';

	async function searchTeams() {
		if (!query.trim()) return;
		loading = true;
		error = '';
		try {
			const res = await fetch(`http://localhost:8000/search?query=${encodeURIComponent(query)}&k=20`);
			if (!res.ok) throw new Error('Failed to fetch results');
			results = await res.json();
		} catch (e) {
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

	function openTeam(team: string) {
		goto(`/team/${encodeURIComponent(team)}`);
	}
</script>
<section class="w-full min-h-[100vh] flex flex-col items-center py-16 px-[8%] gap-8 bg-gradient-to-br from-blue-50 to-white">
    <div class="flex gap-y-6 flex-col w-full max-w-3xl">
        <h1 class="text-center flex justify-center">Finder</h1>
        <input
            placeholder="Interests, Tools, Languages, Teams, Projects"
            class="w-full border-2 rounded-lg focus:ring-4 focus:ring-blue-400 border-gray-200 px-4 py-2 duration-200 text-lg shadow-sm"
            bind:value={query}
            on:keydown={handleKeydown}
            aria-label="Search bar"
        />
        <button class="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 duration-200 self-center" on:click={searchTeams} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
        </button>
        {#if error}
            <div class="text-red-500 text-center">{error}</div>
        {/if}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-h-[60vh] overflow-y-auto mt-4 p-2 bg-white bg-opacity-80 rounded-xl shadow-inner">
        {#each results as result (result.team)}
            <div on:click={() => openTeam(result.team)} class="cursor-pointer hover:scale-105 duration-200">
                <PeopleCard name={result.team} description={result.description} project={result.project_title} />
            </div>
        {/each}
        {#if !loading && results.length === 0 && query}
            <div class="col-span-full text-center text-gray-500">No teams found.</div>
        {/if}
    </div>
</section>