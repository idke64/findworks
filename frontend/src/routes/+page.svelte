<script>
	import PeopleCard from "$lib/components/ui/PeopleCard.svelte";

</script>
<section class="w-full h-[100vh] flex flex-col items-center py-16 px-[8%] gap-8">
    <div class="flex gap-y-6 flex-col w-full">
        <h1 class="text-center flex justify-center">Finder</h1>
        <input placeholder="Interests, Tools, Languages, Teams, Projects" class="w-full border-2 rounded-lg focus:ring-4 focus:ring-blue-400 border-gray-200 px-4 py-2 duration-200 text-lg"/>
    </div>
    <div class="grid grid-cols-5 gap-6 h-full overflow-y-scroll w-full">
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
    </div>
</section>