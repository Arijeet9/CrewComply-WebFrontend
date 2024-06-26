<script lang="ts">
	export let href: string;
	export let icon: string;
	export let label: string;
	export let hasDropdown: boolean = false;
	export let dropdownOpen: boolean = false;
	export let onClick: () => void;
	export let isSubLink: boolean = false;
</script>

<a
	href={href}
	on:click={onClick}
	class={`p-2 flex items-center justify-between rounded-md hover:text-[#1D4ED8] hover:bg-[#F1F5F9] ${isSubLink ? 'ml-4' : ''}`}
>
	<div class="flex items-center gap-2">
		<img src={icon} alt="" class="" />
		<div>{label}</div>
	</div>
	{#if hasDropdown && !isSubLink}
		<img
			src={`/icons/${dropdownOpen ? 'uparrowbig' : 'downarrowbig'}.svg`}
			alt=""
			class=""
		/>
	{/if}
</a>
