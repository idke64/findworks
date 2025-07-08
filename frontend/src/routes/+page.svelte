<script>
	import PeopleCard from "$lib/components/ui/PeopleCard.svelte";

</script>
<section class="w-full h-[100vh] flex flex-col items-center justify-center px-64 py-16 gap-8">
    <div class="flex gap-y-4 flex-col justify-center w-full">
        <h1 class="text-center flex justify-center">FindWorks</h1>
        <input placeholder="Interests, Tools, Languages, Teams, Projects" class="w-full border-2 rounded-sm focus:ring-4 focus:ring-blue-400 border-gray-200 px-2 py-1 duration-200"/>
    </div>
    <div class="w-full border-2 border-gray-200 h-full rounded-sm grid-cols-3 grid p-6">
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
    </div>
</section>