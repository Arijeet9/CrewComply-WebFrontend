<script lang="ts">
	export let href: string;
	export let icon: string;
	export let activeIcon:string;
	export let label: string;
	export let hasDropdown: boolean = false;
	export let dropdownOpen: boolean = false;
	export let onClick: () => void;
	export let isSubLink: boolean = false;

	import { page } from '$app/stores';
	let currentPath;
	$: currentPath=$page.url.pathname;
	console.log($page.url.pathname);
</script>

<a
	{href}
	on:click={onClick}
	class={`p-2 flex items-center justify-between rounded-md ${currentPath === href && 'text-[#1D4ED8] bg-[#F1F5F9]'}  hover:bg-surface-50 ${isSubLink ? 'ml-4' : ''}`}
>
	<div class="flex items-center gap-2">
		<img src={currentPath === href?activeIcon:icon} alt="" class="w-4 h-4" />
		<div>{label}</div>
	</div>
	{#if hasDropdown && !isSubLink}
		<img src={`/icons/${dropdownOpen ? 'uparrowbig' : 'downarrowbig'}.svg`} alt="" class="" />
	{/if}
</a>
