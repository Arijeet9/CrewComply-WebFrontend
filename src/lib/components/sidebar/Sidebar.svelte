<script lang="ts">
	import Navlink from './Navlink.svelte';
	import ProfileOptions from './ProfileOptions.svelte';
 

	const navLinks = [
		{ href: '/dashboard', icon: '/icons/dashboard.svg',activeIcon:'/icons/dashboard-blue.svg', label: 'Dashboard' },
		{ href: '/trainings', icon: '/icons/training.svg',activeIcon:'/icons/training-blue.svg', label: 'Trainings' },
		{ href: '/employees', icon: '/icons/employees.svg',activeIcon:'/icons/employees-blue.svg', label: 'Employees' },
		{ href: '#', icon: '/icons/organisation.svg',activeIcon:'/icons/organisation-blue.svg', label: 'Organisation', hasDropdown: true },
		{ href: '/reports', icon: '/icons/reports.svg',activeIcon:'/icons/reports-blue.svg', label: 'Reports' },
		{ href: '/auditlog', icon: '/icons/auditlog.svg',activeIcon:'/icons/auditlog-blue.svg', label: 'Audit Log' }
	];

	const organisationNavLinks = [
		{ href: '/departments', icon: '/icons/departments.svg',activeIcon:'/icons/departments-blue.svg', label: 'Departments' },
		{ href: '/locations', icon: '/icons/locations.svg', activeIcon:'/icons/locations-blue.svg',label: 'Locations' },
		{ href: '/user-management', icon: '/icons/user-management.svg', activeIcon:'/icons/user-management-blue.svg',label: 'User Management' },
		{ href: '/settings', icon: '/icons/settings.svg',activeIcon:'/icons/settings-blue.svg', label: 'Settings' }
	];

	let organisationDropdown = false;
	let profilePopup=false;

	function toggleDropdown(label:string) {
		if (label === 'Organisation') {
			organisationDropdown = !organisationDropdown;
		}
	}
</script>

<nav
	class="min-w-[300px] max-h-screen p-4 flex flex-col justify-between overflow-scroll hide-scrollbar bg-[#FFFFFF] text-[#09090B]"
>
	<div class="flex flex-col gap-8">
		<div class="text-2xl">
			<img src="/logos/crewcomply-logo.svg" alt="" class="object-contain" />
		</div>
		<div class="flex flex-col gap-2 font-medium text-sm">
			{#each navLinks as { href, icon,activeIcon, label, hasDropdown }}
				<Navlink
					{href}
					{icon}
					{activeIcon}
					{label}
					{hasDropdown}
					dropdownOpen={organisationDropdown}
					onClick={() => toggleDropdown(label)}
				/>
				{#if label === 'Organisation' && organisationDropdown}
					<div class="ml-4 flex gap-2">
						<div class="w-1 h-full bg-[#E2E8F0]" />
						<div class="flex flex-col gap-1">
							{#each organisationNavLinks as { href, icon,activeIcon, label }}
								<Navlink {href} {icon} {activeIcon} {label} isSubLink onClick={() => {}} />
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<div class="p-2 relative border rounded-md border-[#E6E7EB]">
		{#if profilePopup}
		<button on:click={()=>profilePopup=false} class="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)]" />
		<div class="absolute bottom-full z-50">
			<ProfileOptions />

		</div>
	{/if}
		<img src="/logos/plogo.svg" alt="" class="rounded-md" />
		<div class="flex items-center justify-between">
			<button on:click={()=>profilePopup=!profilePopup} class="p-2 min-w-32 flex items-center justify-between rounded-md bg-[#F1F5F9]">
				<div class="font-semibold">User</div>
				<img src="/icons/uparrow.svg" alt="" class="" />
			</button>
			<img src="/icons/bell.svg" alt="" class="" />
		</div>
	</div>
</nav>
