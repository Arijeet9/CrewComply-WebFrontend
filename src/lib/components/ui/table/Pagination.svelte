<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables';
	export let handler: DataHandler;
	const pageNumber = handler.getPageNumber();
	const pageCount = handler.getPageCount();
	const pages = handler.getPages({ ellipsis: true });
</script>

<!-- Desktop buttons -->
<section class=" hidden lg:flex items-center font-medium text-[#6B7280] ">
	<button
		type="button"
		class=" p-2 rounded-l-lg border-y border-l border-[#E5E7EB] hover:bg-[#E5E7EB]"
		class:disabled={$pageNumber === 1}
		on:click={() => handler.setPage('previous')}
	>
	{'<'} Previous
	</button>
	{#each $pages as page}
		<button
			type="button"
			class={`p-2 ${page===1?'border-y border-l':(page===$pageCount?'border-y border-r':'border')}  border-[#E5E7EB] hover:bg-[#E5E7EB]`}
			class:active={$pageNumber === page}
			class:ellipse={page === null}
			on:click={() => handler.setPage(page)}
		>
			{page ?? '...'}
		</button>
	{/each}
	<button
		type="button"
		class="p-2 rounded-r-lg border-y border-r border-[#E5E7EB] hover:bg-[#E5E7EB]"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => handler.setPage('next')}
	>
	Next {'>>'}
	</button>
</section>

<!-- Mobile buttons -->
<section class="lg:hidden flex items-center font-medium text-[#6B7280]">
	<button
		type="button"
		class="p-2 rounded-l-lg border border-[#E5E7EB] hover:bg-[#E5E7EB]"
		class:disabled={$pageNumber === 1}
		on:click={() => handler.setPage('previous')}
	>
		{'<'} Previous
	</button>
	<button
		type="button"
		class="p-2 rounded-r-lg border-y border-r border-[#E5E7EB] hover:bg-[#E5E7EB]"
		class:disabled={$pageNumber === $pageCount}
		on:click={() => handler.setPage('next')}
	>
		Next {'>>'}
	</button>
</section>
