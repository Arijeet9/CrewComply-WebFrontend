<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	let currentPath = '';
	let firstPath = '';
	let secondPath = '';

	onMount(() => {
		currentPath = $page.url.pathname;

		if (currentPath) {
			const parts = currentPath.split('/');
			if (parts.length >= 3) {
				firstPath = parts[1];
				secondPath = parts[2];
			}
		}
	});
</script>

<section class="flex items-center gap-4 font-medium">
	<button on:click={()=>goto(`/${firstPath}`)} class="text-surface-500">{firstPath.charAt(0).toUpperCase() + firstPath.slice(1)}</button>
	<div>{'>'}</div>
	<button on:click={()=>goto(`/${firstPath}/${secondPath}`)} class="text-primary-800">
		{decodeURIComponent(secondPath.charAt(0).toUpperCase() + secondPath.slice(1))}
	</button>
</section>
