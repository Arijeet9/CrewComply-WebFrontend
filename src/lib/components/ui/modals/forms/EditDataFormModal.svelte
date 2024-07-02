<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// Form Data
	// const formData = {
	// 	name: 'Jane Doe',
	// 	tel: '214-555-1234',
	// 	email: 'jdoe@email.com'
	// };
	console.log('Value:', $modalStore[0].value);
	const formData = $modalStore[0].value;

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = ' p-4  rounded-container-token';

	//converts first letter of each words in a sentence into uppercase
	function capitalizedWords(str: string) {
		const words = str.split(' ');
		const capitalizedWords = words.map(
			(word: string) => word.charAt(0).toUpperCase() + word.slice(1)
		);
		return capitalizedWords.join(' ');
	}
</script>


{#if $modalStore[0]}
	<div class="modal-example-form {cBase} variant-filled">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<form class="modal-form {cForm} grid grid-cols-2 items-center gap-2">
			{#each formData as input, i}
				{#each Object.entries(input) as [key, value]}
					<label class="flex flex-col gap-2 font-medium">
						<span class="text-black">{capitalizedWords(key)}</span>
						<div class="border rounded-lg">
							<input
								class="input variant-filled"
								type="text"
								bind:value={formData[i][key]}
								placeholder="Enter.."
							/>
						</div>
					</label>
				{/each}
			{/each}
		</form>
		<footer class="modal-footer {parent.regionFooter} flex items-center justify-center">
			<button class="btn variant-outline rounded-md font-medium text-surface-700 " on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn rounded-md font-medium bg-primary-500 text-white" on:click={onFormSubmit}>Submit Form</button>
		</footer>
	</div>
{/if}
