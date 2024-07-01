<script lang="ts">
	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import AddDataFormModal from '../modals/forms/AddDataFormModal.svelte';

	export let text: string;
	export let iconSrc: string | undefined = undefined;
	export let buttonClass: string = 'btn btn-filled-primary';
	export let data:[]|null=null;

	const modalStore = getModalStore();

	let formData: any;

	// const modal: ModalSettings = {
	// 	type: 'confirm',
	// 	// Data
	// 	title: 'Please Confirm',
	// 	body: 'Are you sure you wish to proceed?',
	// 	// TRUE if confirm pressed, FALSE if cancel pressed
	// 	response: (r: boolean) => console.log('response:', r)
	// };

	if (data) {
		//console.log(data)
		formData = data?.map((item:any) => ({[item]:""}));
	}

  //opens a modal component form to add data
	function modalComponentForm(): void {
		const c: ModalComponent = { ref: AddDataFormModal };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: text,
			body: '',
			value: formData,
			response: (r) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}
</script>

<section>
	<button on:click={() => modalComponentForm()} type="button" class={buttonClass}>
		{#if iconSrc}
			<span>
				<img src={iconSrc} alt="" class="w-5 h-5 object-contain" />
			</span>
		{/if}
		<span>{text}</span>
	</button>
</section>
