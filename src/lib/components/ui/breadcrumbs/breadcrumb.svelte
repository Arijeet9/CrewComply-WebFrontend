<script lang="ts">
    	import { onMount } from 'svelte';
	import { page } from '$app/stores';
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
    <div class="text-surface-500">{firstPath.charAt(0).toUpperCase() + firstPath.slice(1)}</div>
    <div>{'>'}</div>
    <div class="text-primary-800">{decodeURIComponent(secondPath.charAt(0).toUpperCase() + secondPath.slice(1))}</div>
</section>