<script lang="ts">
	import Button from '$lib/components/ui/button/Button.svelte';
	import Search from '$lib/components/ui/search/Search.svelte';
	import Select from '$lib/components/ui/select/Select.svelte';
	import { data, data2, employees } from '$lib/components/ui/table/data';
	import Table from '$lib/components/ui/table/Table.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { SlOptionsVertical } from 'svelte-icons-pack/sl';
</script>

<div class="p-2 w-[calc(100vw-300px)] max-w-screen max-h-screen bg-[#FFFFFF] text-[#09090B]">
	<div class="h-[14vh] my-2 font-semibold text-3xl">Employees</div>
	<div class=" flex flex-col gap-4">
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
	</div>
</div>














