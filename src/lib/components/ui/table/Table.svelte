<script lang="ts">
	import Search from './Search.svelte';
	import Select from './Select.svelte';
	import Button from '../button/Button.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { SlOptionsVertical } from 'svelte-icons-pack/sl';
	//Import handler from SSD
	import { DataHandler } from '@vincjo/datatables';
	//Import local datatable components
	// import ThSort from './ThSort.svelte';
	import Pagination from './Pagination.svelte';

	export let addDataButton: string = '';
	export let data;
	export let checkbox: boolean = false;
	export let serials: boolean = false;
	export let searchFilter: boolean = false;
	export let departmentFilter: boolean = false;
	export let tagsFilter: boolean = false;

	let tagsOptions:any[];
	let departmentsOptions:any[];
	let editPopup = -1;
	let rowHovered = -1;

	//initialize datahandler
	const handler = new DataHandler(data, { rowsPerPage: 5 });

	// set rows for table
	const rows = handler.getRows();
	//console.log('Rows:', $rows);

	let selectAllRows = false;
	let rowsSelectStatus = new Array($rows.length).fill(false);

	//to select all the rows in table
	const handleSelectAllRows = () => {
		selectAllRows = !selectAllRows;
		if (selectAllRows) {
			rowsSelectStatus = rowsSelectStatus.map(() => true);
			//console.log("True:",rowsSelectStatus)
		} else {
			rowsSelectStatus = rowsSelectStatus.map(() => false);
			//console.log("False:",rowsSelectStatus)
		}
	};

	//get column headers for table from data
	const tableColumnHeaders = Object.keys(data[0]);
	//get no of columns for table
	const columnCount = tableColumnHeaders.length;
	//console.log('Column Count:', columnCount);

	//converts first letter of each words in a sentence into uppercase
	function capitalizedWords(str: string) {
		const words = str.split(' ');
		const capitalizedWords = words.map(
			(word: string) => word.charAt(0).toUpperCase() + word.slice(1)
		);
		return capitalizedWords.join(' ');
	}

	//to show edit popup for particular row
	const handleEditPopup = (index: number) => {
		editPopup = index;
	};

	if (departmentFilter) {
		departmentsOptions= [...new Set(data.map((data:any) => data.department))];
	}
	if (tagsFilter) {
		tagsOptions= [...new Set(data.map((data:any) => data.tags))];
	}
</script>

<section class=" flex flex-col gap-4">

	<!-- Table Filters -->
	<div class="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
		<div class="flex flex-col md:flex-row gap-2">

			<!--to show data according to the search input-->
			{#if searchFilter}
				<Search {handler} />
			{/if}

			{#if departmentFilter}
				<Select {handler} filterBy="department" label="Select Department" options={departmentsOptions} />
			{/if}

			{#if tagsFilter}
				<Select {handler} filterBy="tags" label="Tags" options={tagsOptions} />
			{/if}

		</div>
		<div class="flex gap-2">
			{#if addDataButton}
				<Button text={`${addDataButton}`} />
			{/if}
			<div class="p-2 flex items-center justify-center rounded-md border border-[#E6E7EB]">
				<Icon src={SlOptionsVertical} />
			</div>
		</div>
	</div>

	<div class="relative max-h-[70vh] h-[70vh] text-nowrap">
		<div class="flex flex-col font-medium rounded-lg border border-[#E6E7EB] overflow-x-scroll">

			<!--Table Header-->
			<div class={`  rounded-t-lg flex  text-[#6B7280] bg-[#F1F5F9]`}>
				{#if checkbox}
					<div class="p-2 min-w-[4vw] sticky left-0 text-center bg-[#F1F5F9]">
						<input type="checkbox" on:change={() => handleSelectAllRows()} class="rounded-md" />
					</div>
				{/if}

				{#if serials}
					<div
						class={`p-2 min-w-[4vw] sticky ${checkbox ? 'left-[4vw]' : 'left-0'} text-center bg-[#F1F5F9]`}
					>
						No.
					</div>
				{/if}

				{#each tableColumnHeaders as column, i}
					<div
						class={`p-2  ${i === 0 ? `min-w-[14vw] sticky ${checkbox && serials ? 'left-[8vw]' : checkbox || serials ? 'left-[4vw]' : 'left-0'} ` : 'min-w-[18vw]'} bg-[#F1F5F9]`}
					>
						{capitalizedWords(column)}
					</div>
				{/each}
			</div>

			<!--Table Body-->
			<div class="flex flex-col rounded-b-lg">
				{#each $rows as row, i}
					<button
						on:mouseenter={() => (rowHovered = i)}
						on:mouseleave={() => (rowHovered = -1)}
						class={`flex hover:bg-surface-100`}
					>
						{#if checkbox}
							<div
								class={`p-2 min-w-[4vw] sticky left-0 text-center ${rowHovered === i ? 'bg-surface-100' : 'bg-[#FFFFFF]'}`}
							>
								<input type="checkbox" bind:checked={rowsSelectStatus[i]} class="rounded-md" />
							</div>
						{/if}
						{#if serials}
							<div
								class={`p-2 min-w-[4vw] sticky ${checkbox ? 'left-[4vw]' : 'left-0'} text-center ${rowHovered === i ? 'bg-surface-100' : 'bg-[#FFFFFF]'}`}
							>
								{i + 1}
							</div>
						{/if}
						{#each tableColumnHeaders as name, index}

							{#if name === 'tags'}
								<!--Custom Style for Tags column values-->
								<div
									class={`p-2 min-w-[18vw] overflow-clip flex items-center justify-start  ${rowHovered === i && 'bg-surface-100'}`}
								>
									<div class="p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]">
										{row[name]}
									</div>
								</div>

							{:else if name === 'status'}
								<!--Custom Style for Status column values-->
								<div
									class={`p-2 min-w-[18vw] overflow-clip flex items-center justify-start  ${rowHovered === i && 'bg-surface-100'}`}
								>
									<div
										class={`p-2 rounded-full text-center text-xs flex items-center gap-1 ${row[name] === 'Active' ? 'text-[#166534] bg-[#DCFCE7]' : `text-[#52525B]  ${rowHovered === i ? 'bg-[#FFFFFF]' : 'bg-[#F4F4F5]'}`} `}
									>
										<div
											class={`w-2 h-2 rounded-full ${row[name] === 'Active' ? 'bg-[#166534]' : `bg-[#52525B]`} `}
										/>
										<div>{row[name]}</div>
									</div>
								</div>

							{:else if index === 0}
								<button
									class={`p-2 pr-6 min-w-[14vw] sticky ${checkbox && serials ? 'left-[8vw]' : checkbox || serials ? 'left-[4vw]' : 'left-0'} overflow-hidden  flex items-center justify-between   ${rowHovered === i ? 'bg-surface-100' : 'bg-[#FFFFFF]'}`}
									on:mouseenter={() => handleEditPopup(i)}
									on:mouseleave={() => handleEditPopup(-1)}
								>
									<div
										class={`${editPopup === i ? 'max-w-16' : 'max-w-20'} overflow-clip text-ellipsis`}
									>
										{row[name]}
									</div>

									<!--show edit popup when hovered-->
									{#if editPopup === i}
										<div
											class="p-1 text-xs rounded-full shadow-sm border border-[#E6E7EB] bg-[#FFFFFF]"
										>
											Edit {'>'}
										</div>
									{/if}

								</button>
							{:else}
								<div
									class={`p-2 min-w-[18vw] text-start overflow-clip ${rowHovered === i && 'bg-surface-100'}`}
								>
									{row[name]}
								</div>
							{/if}
						{/each}
					</button>
				{/each}
			</div>
		</div>

		<!-- Table Footer -->
		<div class="absolute bottom-0 md:bottom-16 lg:bottom-0 left-2/4 translate-x-[-50%]">
			<Pagination {handler} />
		</div>

	</div>
	
</section>
