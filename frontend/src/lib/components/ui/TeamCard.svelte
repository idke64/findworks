<script lang="ts">
    let { name, description, department, similarityScore, id } = $props();
</script>
<a href="/team/{id}" class="w-full flex flex-col rounded-lg border-2 border-gray-200 p-4 self-start bg-white hover:shadow-lg duration-200 h-full hover:scale-105 relative">
    <div class="bg-gray-200 rounded-b-sm absolute right-4 top-0 px-1 py-0.5 text-[#00ABC1] font-bold text-sm">
        {similarityScore.toFixed(2)}
    </div>
    <div class="flex flex-col gap-y-2 h-full">
        <div class="flex flex-col gap-y-0.5">
            <p class="text-xs text-[#00ABC1] font-medium">{department}</p>
            <h3 class="truncate text-[#E66100]">{name}</h3>
        </div>
        <p class="text-sm text-gray-500 line-clamp-4">
        {#if description == null || description.length == 0}
            No Description
        {:else}
            {description}
        {/if}
        </p>
    </div>
</a>