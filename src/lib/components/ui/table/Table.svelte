<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import StatusBadge from '$lib/components/ui/badges/StatusBadge.svelte';
	import TagsBadge from '$lib/components/ui/badges/TagsBadge.svelte';
	import Search from '$lib/components/ui/table/Search.svelte';
	import Select from '$lib/components/ui/table/Select.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { SlOptionsVertical } from 'svelte-icons-pack/sl';

	//Import handler from SSD
	import { DataHandler } from '@vincjo/datatables';

	//Import local datatable components
	//import ThSort from './ThSort.svelte';
	import Pagination from './Pagination.svelte';
	import { goto } from '$app/navigation';
	import EditDataFormModal from '../modals/forms/EditDataFormModal.svelte';
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';

	export let title:string='Table';
	export let route: string = '';
	export let addDataButton: string = '';
	export let data:any;
	export let checkbox: boolean = false;
	export let serials: boolean = false;
	export let searchFilter: boolean = false;
	export let selectFilter: string[] = [];

	let selectFilterData: any;

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

	if (selectFilter.length > 0) {
		selectFilterData = selectFilter.map((item, i) => ({
			[item]: [...new Set(data.map((data: any) => data[item]))]
		}));
	}

	//console.log('Select Filter Data:', selectFilterData);

	const modalStore = getModalStore();

	function objectToArray(dataObj:any) {
    return Object.values(dataObj);
}

	// function findRowDataByIndex(index:number) {
    // //check if the index is within valid range
    // if (index < 0 || index >= data.length) {
    //     return null;
    // }

    // return data[index];
	// }

	function findRowDataByIndex(index: number): object[] | null {
    // Check if the index is within valid range
    if (index < 0 || index >= data.length) {
        return null;
    }

    const rowData = data[index];
    const rowDataArray: object[] = [];

    // Convert each key-value pair into an object and push to rowDataArray
    for (const key in rowData) {
        if (Object.prototype.hasOwnProperty.call(rowData, key)) {
            const obj = { [key]: rowData[key] };
            rowDataArray.push(obj);
        }
    }

    return rowDataArray;
}

	function modalEditComponentForm(index:number): void {

		const formData=findRowDataByIndex(index)

		const c: ModalComponent = { ref: EditDataFormModal };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: title,
			body: '',
			value:formData,
			response: (r) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

	const dispatch = createEventDispatcher();

	const handleSelectRow = (rowIndex: number) => {
		dispatch('select-row', { rowIndex, rowData: rows[rowIndex] });
	};
</script>

<section class=" flex flex-col gap-4">
	<!-- Table Filters -->
	<div class="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
		<div class="flex flex-col md:flex-row gap-2">
			<!--to show data according to the search input-->
			{#if searchFilter}
				<Search {handler} />
			{/if}

			<!--to filter the data according to the select option-->
			{#if selectFilter}
				{#each selectFilterData as item}
					<Select
						{handler}
						filterBy={Object.keys(item)[0]}
						label={Object.keys(item)[0]}
						options={Object.values(item)[0]}
					/>
				{/each}
			{/if}
		</div>
		<div class="flex gap-2">
			{#if addDataButton}
				<Button text={`${addDataButton}`} data={tableColumnHeaders} />
			{/if}
			<div class="p-2 flex items-center justify-center rounded-md border border-[#E6E7EB]">
				<Icon src={SlOptionsVertical} />
			</div>
		</div>
	</div>

	<div class="relative max-h-[70vh] h-[70vh] text-nowrap flex flex-col justify-between">
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
						on:click={() => handleSelectRow(i)}
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
									class={`p-2 min-w-[18vw] overflow-clip flex items-center gap-2 justify-start  ${rowHovered === i && 'bg-surface-100'}`}
								>
									<TagsBadge data={row[name]} />

									<!-- {#if typeof row[name] === 'string'}
										<TagsBadge label={row[name]} />
									{:else if Array.isArray(row[name]) && row[name].length > 0}
										{#if row[name].length > 2}
											<div class="flex items-center gap-2">
												{#each row[name] as tag, i}
													{#if i < 1}
														<TagsBadge label={tag} />
													{/if}
												{/each}
												<div class="text-[#6B7280]">& {row[name].length - 1} more</div>
											</div>
										{:else}
											{#each row[name] as tag}
												<TagsBadge label={tag} />
											{/each}
										{/if}
									{/if} -->
								</div>
							{:else if name === 'status'}
								<!--Custom Style for Status column values-->
								<div
									class={`p-2 min-w-[18vw] overflow-clip flex items-center justify-start  ${rowHovered === i && 'bg-surface-100'}`}
								>
									<StatusBadge index={i} {rowHovered} label={row[name]} />
								</div>
							{:else if index === 0}
								<button
									on:mouseenter={() => handleEditPopup(i)}
									on:mouseleave={() => handleEditPopup(-1)}
									class={`p-2 pr-6 min-w-[14vw] sticky ${checkbox && serials ? 'left-[8vw]' : checkbox || serials ? 'left-[4vw]' : 'left-0'} overflow-hidden  flex items-center justify-between   ${rowHovered === i ? 'bg-surface-100 ' : 'bg-[#FFFFFF]'}`}
								>
									<div
										class={`${editPopup === i ? 'max-w-16' : 'max-w-20'} overflow-clip text-ellipsis`}
									>
										{row[name]}
									</div>

									<!--show edit popup when hovered-->
									{#if editPopup === i}
										<button
											on:click={() => modalEditComponentForm(i)}
											class="p-1 text-xs rounded-full shadow-sm border border-[#E6E7EB] bg-[#FFFFFF]"
										>
											Edit {'>'}
										</button>
									{/if}
								</button>
							{:else}
								<button
									class={`p-2 min-w-[18vw] text-start overflow-clip ${rowHovered === i && 'bg-surface-100'}`}
								>
									{row[name]}
								</button>
							{/if}
						{/each}
					</button>
				{/each}
			</div>
		</div>

		<!-- Table Footer -->
		<div class="flex justify-center">
			<Pagination {handler} />
		</div>
	</div>
</section>
