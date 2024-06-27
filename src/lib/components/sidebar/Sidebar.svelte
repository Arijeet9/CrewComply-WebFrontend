<script lang="ts">
	import Navlink from './Navlink.svelte';
 

	const navLinks = [
		{ href: '/dashboard', icon: '/icons/dashboard.svg', label: 'Dashboard' },
		{ href: '/trainings', icon: '/icons/training.svg', label: 'Trainings' },
		{ href: '/employees', icon: '/icons/employees.svg', label: 'Employees' },
		{ href: '#', icon: '/icons/organisation.svg', label: 'Organisation', hasDropdown: true },
		{ href: '/reports', icon: '/icons/reports.svg', label: 'Reports' },
		{ href: '/auditlog', icon: '/icons/auditlog.svg', label: 'Audit Log' }
	];

	const organisationNavLinks = [
		{ href: '/departments', icon: '/icons/departments.svg', label: 'Departments' },
		{ href: '/locations', icon: '/icons/locations.svg', label: 'Locations' },
		{ href: '/user-management', icon: '/icons/user-management.svg', label: 'User Management' },
		{ href: '/settings', icon: '/icons/settings.svg', label: 'Settings' }
	];

	let organisationDropdown = false;

	function toggleDropdown(label:string) {
		if (label === 'Organisation') {
			organisationDropdown = !organisationDropdown;
		}
	}
</script>

<nav
	class="min-w-[300px] max-h-screen p-4 flex flex-col justify-between overflow-scroll bg-[#FFFFFF] text-[#09090B]"
>
	<div class="flex flex-col gap-8">
		<div class="text-2xl">
			<img src="/logos/crewcomply-logo.svg" alt="" class="object-contain" />
		</div>
		<div class="flex flex-col gap-2 font-medium text-sm">
			{#each navLinks as { href, icon, label, hasDropdown }}
				<Navlink
					{href}
					{icon}
					{label}
					{hasDropdown}
					dropdownOpen={organisationDropdown}
					onClick={() => toggleDropdown(label)}
				/>
				{#if label === 'Organisation' && organisationDropdown}
					<div class="ml-4 flex gap-2">
						<div class="w-1 h-full bg-[#E2E8F0]" />
						<div class="flex flex-col gap-1">
							{#each organisationNavLinks as { href, icon, label }}
								<Navlink {href} {icon} {label} isSubLink onClick={() => {}} />
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class="p-2 border rounded-md border-[#E6E7EB]">
		<img src="/logos/plogo.svg" alt="" class="rounded-md" />
		<div class="flex items-center justify-between">
			<button class="p-2 min-w-32 flex items-center justify-between rounded-md bg-[#F1F5F9]">
				<div class="font-semibold">User</div>
				<img src="/icons/uparrow.svg" alt="" class="" />
			</button>
			<img src="/icons/bell.svg" alt="" class="" />
		</div>
	</div>
</nav>
