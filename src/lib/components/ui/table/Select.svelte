<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables';
	export let handler: DataHandler;
	export let filterBy: string;
	let value: string;

	export let label: string = 'Select';
	export let options: string[];
</script>

<div class="rounded-md border border-[#E5E7EB] text-[#6B7280]">
	<select
		bind:value
		on:change={() => {
			if (filterBy) handler.filter(value, filterBy);
		}}
		class="select variant-filled text-[#6B7280]"
	>
		<option value="">{label}</option>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
		<!-- <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option> -->
	</select>
</div>
