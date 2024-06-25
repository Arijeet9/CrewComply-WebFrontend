<script>
	const navLinks = [
		{ href: '/dashboard', icon: '/icons/dashboard.svg', label: 'Dashboard' },
		{ href: '/trainings', icon: '/icons/training.svg', label: 'Trainings' },
		{ href: '/employees', icon: '/icons/employees.svg', label: 'Employees' },
		{ href: '/organization', icon: '/icons/organisation.svg', label: 'Organisation' },
		{ href: '/reports', icon: '/icons/reports.svg', label: 'Reports' },
		{ href: '/auditlog', icon: '/icons/auditlog.svg', label: 'Audit Log' }
	];
</script>

<nav
	class="min-w-[20vw] max-h-screen p-4 flex flex-col justify-between bg-[#FFFFFF] text-[#09090B]"
>
	<div class="flex flex-col gap-8">
		<div class="text-2xl">
			<img src="/logos/crewcomply-logo.svg" alt="" class="object-contain" />
		</div>
		<div class="flex flex-col gap-4 font-medium">
			{#each navLinks as { href, icon, label }}
				<a
					{href}
					type="button"
					class="p-2 flex items-center gap-2 rounded-md hover:text-[#1D4ED8] hover:bg-[#F1F5F9]"
				>
					<div>
						<img src={icon} alt="" class="" />
					</div>
					<div>{label}</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="p-2 border rounded-md border-[#E6E7EB]">
		<div>
			<img src="/logos/plogo.svg" alt="" class="rounded-md" />
		</div>
		<div class="flex items-center justify-between">
			<button class="p-2 min-w-[12vw] flex items-center justify-between rounded-md bg-[#F1F5F9]">
				<div class="font-semibold">User</div>
				<div>
					<img src="/icons/uparrow.svg" alt="" class="" />
				</div>
			</button>
			<div>
				<img src="/icons/bell.svg" alt="" class="" />
			</div>
		</div>
	</div>
</nav>
