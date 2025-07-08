<script lang="ts">
import { page } from '$app/stores';
import { onMount } from 'svelte';
import { goto } from '$app/navigation';

let team = '';
let teamData = null;
let loading = true;
let error = '';

$page.subscribe(($page) => {
    team = $page.params.team;
});

async function fetchTeam() {
    loading = true;
    error = '';
    try {
        const res = await fetch(`http://localhost:8000/team/${encodeURIComponent(team)}`);
        if (!res.ok) throw new Error('Team not found');
        teamData = await res.json();
    } catch (e) {
        error = e.message;
        teamData = null;
    } finally {
        loading = false;
    }
}

onMount(fetchTeam);
</script>

<section class="w-full min-h-[100vh] flex flex-col items-center py-16 px-[8%] gap-8 bg-gradient-to-br from-blue-50 to-white">
    <button class="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 self-start" on:click={() => goto('/')}>← Back to Search</button>
    {#if loading}
        <div class="text-lg text-blue-600">Loading team info...</div>
    {:else if error}
        <div class="text-red-500 text-lg">{error}</div>
    {:else if teamData}
        <div class="w-full max-w-4xl bg-white rounded-xl shadow p-8 flex flex-col gap-6">
            <h1 class="text-3xl font-bold mb-2">{teamData.team}</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each Object.entries(teamData.team_info) as [key, value]}
                    <div class="flex flex-col">
                        <span class="font-semibold text-gray-700">{key.replace(/_/g, ' ')}:</span>
                        <span class="text-gray-600 text-sm">{value}</span>
                    </div>
                {/each}
            </div>
            <h2 class="text-2xl font-semibold mt-6 mb-2">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each teamData.projects as project}
                    <div class="border rounded-lg p-4 bg-blue-50 shadow-sm flex flex-col gap-2">
                        <div class="font-bold text-blue-800">{project.Title}</div>
                        <div class="text-sm text-gray-700">Status: {project['Project status']}</div>
                        <div class="text-sm text-gray-700">EDG Engineer: {project['EDG Engineer']}</div>
                        <div class="text-sm text-gray-700">Mentor: {project['Project mentor']}</div>
                        <div class="text-sm text-gray-700">Manager: {project['Project sponsor (Manager)']}</div>
                        <div class="text-xs text-gray-500 mt-1">Start: {project['Start date']} | End: {project['Expected completion date']}</div>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</section> 