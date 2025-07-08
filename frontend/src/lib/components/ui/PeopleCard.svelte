<script lang="ts">
	export let name: string;
	export let description: string;
	export let project: string;
</script>
<div class="w-full flex flex-col rounded-lg border-2 border-gray-200 p-4 self-start bg-white shadow hover:shadow-lg duration-200 h-full min-h-[180px]">
    <div class="flex flex-col gap-y-2 h-full">
        <div class="rounded-lg bg-gradient-to-br from-blue-200 to-blue-100 aspect-square w-full mb-2 flex items-center justify-center text-2xl font-bold text-blue-700">
            {name?.[0] ?? '?'}
        </div>
        <h3 class="truncate" title={name}>{name}</h3>
        <div class="text-sm text-gray-600 font-semibold truncate" title={project}>{project}</div>
        <p class="text-xs text-gray-500 line-clamp-3 mt-1">{description}</p>
    </div>
</div>