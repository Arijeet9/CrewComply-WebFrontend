<script lang="ts">
	
	import { data, data2, employees } from '$lib/components/ui/table/data';
	import Table from '$lib/components/ui/table/Table.svelte';

	//for table props to add select filters
	const selectFilter=['department','tags']

</script>

<div class="p-2 w-[calc(100vw-300px)] max-w-screen max-h-screen bg-[#FFFFFF] text-[#09090B]">
	<div class="h-[14vh] my-2 font-semibold text-3xl">Employees</div>

	<!-- <div class=" flex flex-col gap-4">
		<div class="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
			<div class="flex flex-col md:flex-row  gap-2">
				<Search />
				<Select label="Select Department" />
				<Select label="Tags" />
			</div>
			<div class="flex  gap-2">
				<Button text="+ Add Employee" />
				<div class="p-2 flex items-center justify-center rounded-md border border-[#E6E7EB]">
					<Icon src={SlOptionsVertical} />
				</div>
			</div>
		</div>
		<div class="">

			<Table data={employees} checkbox={false} serials={true} />
		</div>
	</div> -->

	<Table
		title="Employees"
		route="employees"
		addDataButton="+ Add Employees"
		data={employees}
		checkbox={false}
		serials={true}
		searchFilter={true}
		selectFilter={selectFilter}
	/>

</div>
