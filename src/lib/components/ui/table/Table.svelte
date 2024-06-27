<!-- <script lang="ts">

    
    const tableArr:any[] = [
        { no: 1, trainings: 'Hydrogen', department: 'H', frequently: 1.008, tags:"Basics" },
        { no: 2, trainings: 'Helium', department: 'He', frequently: 4.0026, tags:"Basics" },
        { no: 3, trainings: 'Lithium', department: 'Li', frequently: 6.94, tags:"Basics" },
        { no: 4, trainings: 'Beryllium', department: 'Be', frequently: 9.0122, tags:"Basics" },
        { no: 5, trainings: 'Boron', department: 'B', frequently: 10.81, tags:"Basics" },
        { no: 6, trainings: 'Carbon', department: 'C', frequently: 12.011, tags:"Basics" },
        { no: 7, trainings: 'Nitrogen', department: 'N', frequently: 14.007, tags:"Basics" },
        { no: 8, trainings: 'Oxygen', department: 'O', frequently: 15.999, tags:"Basics" },
        { no: 9, trainings: 'Fluorine', department: 'F', frequently: 18.998, tags:"Basics" },
        { no: 10, trainings: 'Neon', department: 'Ne', frequently: 20.180, tags:"Basics" }
    ];




</script>

<div class="table-container max-h-[50vh] overflow-scroll bg-[#FFFFFF]">
	<table class="table table-hover variant-filled">
		<thead class="">
			<tr class="variant-filled">
				<th>No</th>
				<th>Trainings</th>
				<th>Department</th>
				<th>Frequently</th>
				<th>Tags</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.no}</td>
					<td>{row.trainings}</td>
					<td>{row.department}</td>
					<td>{row.frequently}</td>
					<td>{row.tags}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
		</tfoot>

	</table>
</div> -->

<!-- <div class="h-[70vh]  relative overflow-x-scroll ">
	<header class="flex justify-between gap-4">

	</header>
	<table class="table table-hover table-compact w-full  table-auto ">
		<thead>
			<tr class="">
				<th class=" "><input type="checkbox" /></th>
				<th>No</th>
				<th>Trainings</th>
				<th>Department</th>
				<th>Frequently</th>
				<th>Tags</th>

			</tr>
		</thead>
		<tbody class="">
			{#each $rows as row}
				<tr class="">
					<td class=""><input type="checkbox" class="" /></td>
					<td>{row.no}</td>
					<td>{row.trainings}</td>
					<td>{row.department}</td>
					<td>{row.frequently}</td>
					<td ><span>{row.tags}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>
	<footer class="fixed bottom-10 left-2/4 ">
		<Pagination {handler} />
	</footer>
</div> -->

<script lang="ts">
	//Import local datatable components
	// import ThSort from './ThSort.svelte';
	import Pagination from './Pagination.svelte';

	export let data;
	export let checkbox: boolean = false;
	export let serials: boolean = false;

	let editPopup=-1;
	let rowHovered=-1;

	//Import handler from SSD
	import { DataHandler } from '@vincjo/datatables';

	//Init data handler - CLIENT
	const handler = new DataHandler(data, { rowsPerPage: 5 });
	const rows = handler.getRows();
	console.log("Rows:",$rows)

	//get column headers for table from data
	const tableColumnHeaders = Object.keys(data[0]);
	//get no of columns for table
	const columnCount = tableColumnHeaders.length;
	console.log("Column Count:",columnCount)

	// let totalColumnCount = 0;
	//to get the total column count for tables
	// if (checkbox && serials) {
	// 	totalColumnCount = (columnCount*2) + 2;
	// } else if (checkbox || serials) {
	// 	totalColumnCount = (columnCount*2) + 1;
	// } else {
	// 	totalColumnCount = columnCount*2;
	// }

	// console.log("Total Column Count:",totalColumnCount)

	//converts first letter of each words in a sentence into uppercase
	
	
	function capitalizedWords(str: string) {
		const words = str.split(' ');
		const capitalizedWords = words.map(
			(word: string) => word.charAt(0).toUpperCase() + word.slice(1)
		);
		return capitalizedWords.join(' ');
	}

	const handleEditPopup=(index:number)=>{
		editPopup=index;
	}

</script>

<!-- <div class="relative h-[70vh]">
	<div class="flex flex-col font-medium rounded-lg border border-[#E6E7EB]">
		<div
			class={`p-2 rounded-t-lg grid grid-cols-${totalColumnCount} bg-[#F1F5F9] text-[#6B7280] `}
		>
			{#if checkbox}
				<div class="col-span-1"><input type="checkbox" /></div>
			{/if}
			{#if serials}
				<div class="col-span-1">No</div>
			{/if}

			{#each tableColumnHeaders as column}
				<div class="col-span-2">{capitalizedWords(column)}</div>
			{/each}
		</div>
		<div class="flex flex-col rounded-b-lg">
			{#each $rows as row, i}
				<div class={`p-2  grid grid-cols-${totalColumnCount} hover:bg-surface-100`}>
					{#if checkbox}
						<div class="col-span-1"><input type="checkbox" /></div>
					{/if}
					{#if serials}
						<div class="col-span-1">{i + 1}</div>
					{/if}
					{#each tableColumnHeaders as name,index}
						{#if name === 'tags'}
							<div class="col-span-2 overflow-clip flex items-center justify-start">
								<div class="p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]">
									{row[name]}
								</div>
							</div>
						{:else if index===0}
						<button class="col-span-2 pr-6 flex items-center justify-between"  on:mouseenter={()=>handleEditPopup(i)} on:mouseleave={()=>handleEditPopup(-1)}>
							<div class={`${editPopup===i?'max-w-10 ':'max-w-20'} overflow-clip text-ellipsis`}>{row[name]}</div>
							{#if editPopup===i}
							<div class="p-1 text-xs rounded-full shadow-sm border border-[#E6E7EB] bg-[#FFFFFF]">
								Edit {'>'}
							</div>
							{/if}
						</button>
						{:else}
							<div class="col-span-2 overflow-clip">{row[name]}</div>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div class="absolute bottom-0 left-2/4 translate-x-[-50%]">
		<Pagination {handler} />
	</div>
</div> -->


<div class="relative max-h-[70vh] h-[70vh] text-nowrap">
	<div class="flex flex-col font-medium rounded-lg border border-[#E6E7EB] overflow-x-scroll">
		<div
			class={`  rounded-t-lg flex  text-[#6B7280] bg-[#F1F5F9]`}
		>
			{#if checkbox}
				<div class="p-2 min-w-[4vw] sticky left-0 text-center bg-[#F1F5F9]"><input type="checkbox" /></div>
			{/if}
			{#if serials}
				<div class={`p-2 min-w-[4vw] sticky ${checkbox?'left-[4vw]':'left-0'} text-center bg-[#F1F5F9]`}>No.</div>
			{/if}

			{#each tableColumnHeaders as column,i}
				<div class={`p-2  ${i===0?`min-w-[14vw] sticky ${checkbox && serials?'left-[8vw]':((checkbox || serials)?'left-[4vw]':'left-0')} `:'min-w-[18vw]'} bg-[#F1F5F9]`}>{capitalizedWords(column)}</div>
			{/each}
		</div>
		<div class="flex flex-col rounded-b-lg ">
			{#each $rows as row, i}
				<button on:mouseenter={()=>rowHovered=i} on:mouseleave={()=>rowHovered=-1}  class={`flex hover:bg-surface-100`}>
					{#if checkbox}
						<div class={`p-2 min-w-[4vw] sticky left-0 text-center ${rowHovered===i ? 'bg-surface-100':'bg-[#FFFFFF]'}`}><input type="checkbox" /></div>
					{/if}
					{#if serials}
						<div class={`p-2 min-w-[4vw] sticky ${checkbox?'left-[4vw]':'left-0'} text-center ${rowHovered===i? 'bg-surface-100':'bg-[#FFFFFF]'}`}>{i + 1}</div>
					{/if}
					{#each tableColumnHeaders as name,index}
						{#if name === 'tags'}
							<div class={`p-2 min-w-[18vw] overflow-clip flex items-center justify-start  ${rowHovered===i && 'bg-surface-100'}`}>
								<div class="p-2 rounded-full text-center text-xs text-primary-700 bg-[#DBEAFE]">
									{row[name]}
								</div>
							</div>
						{:else if index===0}
						<button class={`p-2 pr-6 min-w-[14vw] sticky ${checkbox && serials?'left-[8vw]':((checkbox || serials)?'left-[4vw]':'left-0')} overflow-hidden  flex items-center justify-between  ${rowHovered===i ? 'bg-surface-100':'bg-[#FFFFFF]'}`}  on:mouseenter={()=>handleEditPopup(i)} on:mouseleave={()=>handleEditPopup(-1)}>
							<div class={`${editPopup===i?'max-w-10 ':'max-w-20'} overflow-clip text-ellipsis`}>{row[name]}</div>
							{#if editPopup===i}
							<div class="p-1 text-xs rounded-full shadow-sm border border-[#E6E7EB] bg-[#FFFFFF]">
								Edit {'>'}
							</div>
							{/if}
						</button>
						{:else}
							<div class={`p-2 min-w-[18vw] text-start overflow-clip ${rowHovered===i && 'bg-surface-100'}`}>{row[name]}</div>
						{/if}
					{/each}
				</button>
			{/each}
		</div>
	</div>
	<div class="absolute bottom-0 md:bottom-16 lg:bottom-0 left-2/4 translate-x-[-50%]">
		<Pagination {handler} />
	</div>
</div>

