<script lang="ts">
	export let data;
</script>

<!-- <div class={`p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]`}>
    {data}
</div> -->

{#if typeof data === 'string'}
	<div class={`p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]`}>
		{data}
	</div>{:else if Array.isArray(data) && data.length > 0}
	{#if data.length > 2}
		<div class="flex items-center gap-2">
			{#each data as tag, i}
				{#if i < 1}
					<div class={`p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]`}>
						{tag}
					</div>
				{/if}
			{/each}
			<div class="text-[#6B7280]">& {data.length - 1} more</div>
		</div>
	{:else}
		{#each data as tag}
			<div class={`p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]`}>
				{tag}
			</div>
		{/each}
	{/if}
{/if}
