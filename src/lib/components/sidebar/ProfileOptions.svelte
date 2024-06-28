<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<section class=" rounded-lg font-medium bg-[#FFFFFF]">
	<div class="px-6 py-2 rounded-t-lg flex gap-2 items-center bg-[#F3F4F6]">
		<Avatar
			src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
			width="w-10"
			rounded="rounded-full"
		/>
		<div class="">admin@gmail.com</div>
	</div>
	<div class="px-6 py-4 flex flex-col gap-4">
		<button class="flex items-center gap-2">
			<img src="/icons/account-settings.svg" alt="" class="" />
			<div>Settings</div>
		</button>
        <div class="border-b w-full h-full bg-surface-100" />
		<div class="flex flex-col gap-4">
			<button class="flex items-center gap-2">
				<img src="/icons/24-support.svg" alt="" class="" />
				<div>Help and Support</div>
			</button>
			<button class="flex items-center gap-2">
				<img src="/icons/sign-out.svg" alt="" class="" />
				<div class="text-[#DC2626]">Sign Out</div>
			</button>
		</div>
	</div>
</section>
