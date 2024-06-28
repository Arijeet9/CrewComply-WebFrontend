<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables';
	export let handler: DataHandler;
	export let filterBy: string;
	let value: string;

	export let label: string = 'Select';
	export let options: any;
</script>

<div class="rounded-md border border-[#E5E7EB] text-[#6B7280]">
	<select
		bind:value
		on:change={() => {
			if (filterBy) handler.filter(value, filterBy);
		}}
		class="select variant-filled text-[#6B7280]"
	>
		<option value="">Select {label.charAt(0).toUpperCase() + label.slice(1)}</option>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>
