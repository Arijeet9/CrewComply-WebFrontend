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

<script>
	//Import local datatable components
	import ThSort from './ThSort.svelte';

	import Pagination from './Pagination.svelte';

    const data = [
        { no: 1, trainings: 'Hydrogen', department: 'H', frequently: 1.008, tags:"Basics" },
        { no: 2, trainings: 'Helium', department: 'He', frequently: 4.0026, tags:"Basics" },
        { no: 3, trainings: 'Lithium', department: 'Li', frequently: 6.94, tags:"Basics" },
        { no: 4, trainings: 'Beryllium', department: 'Be', frequently: 9.0122, tags:"Basics" },
        { no: 5, trainings: 'Boron', department: 'B', frequently: 10.81, tags:"Basics" },
        { no: 6, trainings: 'Carbon', department: 'C', frequently: 12.011, tags:"Basics" },
        { no: 7, trainings: 'Nitrogen', department: 'N', frequently: 14.007, tags:"Basics" },
        { no: 8, trainings: 'Oxygen', department: 'O', frequently: 15.999, tags:"Basics" },
        { no: 9, trainings: 'Fluorine', department: 'F', frequently: 18.998, tags:"Basics" },
        { no: 10, trainings: 'Neon', department: 'Ne', frequently: 20.180, tags:"Basics" },
		{ no: 11, trainings: 'Carbon', department: 'C', frequently: 12.011, tags:"Basics" },
        { no: 12, trainings: 'Nitrogen', department: 'N', frequently: 14.007, tags:"Basics" },
        { no: 13, trainings: 'Oxygen', department: 'O', frequently: 15.999, tags:"Basics" },
        { no: 14, trainings: 'Fluorine', department: 'F', frequently: 18.998, tags:"Basics" },
        { no: 15, trainings: 'Neon', department: 'Ne', frequently: 20.180, tags:"Basics" },
		{ no: 16, trainings: 'Carbon', department: 'C', frequently: 12.011, tags:"Basics" },
        { no: 17, trainings: 'Nitrogen', department: 'N', frequently: 14.007, tags:"Basics" },
        { no: 18, trainings: 'Oxygen', department: 'O', frequently: 15.999, tags:"Basics" },
        { no: 19, trainings: 'Fluorine', department: 'F', frequently: 18.998, tags:"Basics" },
        { no: 20, trainings: 'Neon', department: 'Ne', frequently: 20.180, tags:"Basics" }
    ];
	//Import handler from SSD
	import { DataHandler } from '@vincjo/datatables';

	//Init data handler - CLIENT
	const handler = new DataHandler(data, { rowsPerPage: 5 });
	const rows = handler.getRows();
</script>

<div class="h-[70vh] relative overflow-x-auto space-y-4 ">
	<!-- Header -->
	<header class="flex justify-between gap-4">

	</header>
	<!-- Table -->
	<table class="table  table-compact w-full table-auto ">
		<thead>
			<tr class="">
				<th><input type="checkbox" /></th>
				<ThSort {handler} orderBy="no">No</ThSort>
				<ThSort {handler} orderBy="trainings">Trainings</ThSort>
				<ThSort {handler} orderBy="department">Department</ThSort>
				<ThSort {handler} orderBy="frequently">Frequently</ThSort>
				<ThSort {handler} orderBy="tags">Tags</ThSort>
			</tr>
		</thead>
		<tbody class="">
			{#each $rows as row}
				<tr class="">
					<td><input type="checkbox" class="" /></td>
					<td>{row.no}</td>
					<td>{row.trainings}</td>
					<td>{row.department}</td>
					<td>{row.frequently}</td>
					<td ><span>{row.tags}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>
	<!-- Footer -->
	<footer class="absolute bottom-0 left-2/4 translate-x-[-50%]">
		<Pagination {handler} />
	</footer>
</div>

