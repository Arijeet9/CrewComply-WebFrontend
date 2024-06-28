<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables';
	import { Icon } from 'svelte-icons-pack';
	import { BsSearch } from 'svelte-icons-pack/bs';
	export let handler: DataHandler;
	let value: string;
</script>

<div
	class="px-3 flex items-center gap-2 rounded-md border border-[#E5E7EB] bg-[#FFFFFF] text-[#6B7280]"
>
	<Icon src={BsSearch} />
	<input
		type="search"
		placeholder="Search"
		class="input variant-filled"
		bind:value
		on:input={() => handler.search(value)}
	/>
</div>


