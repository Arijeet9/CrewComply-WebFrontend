import AddDataFormModal from '$lib/components/ui/modals/forms/AddDataFormModal.svelte';
import {
	initializeStores,
	getModalStore,
	type ModalComponent,
	type ModalSettings
} from '@skeletonlabs/skeleton';

export default {
	title: 'Components/Modals/AddDataFormModal',
	component: AddDataFormModal,
	parameters: {
		layout: 'fullscreen'
	}
};


const Template = ({ ...args}) => {
	initializeStores()
	const modalStore = getModalStore();


	// const c: ModalComponent = { ref: AddDataFormModal };
	// const modal: ModalSettings = {
	// 	type: 'component',
	// 	component: c,
	// 	title,
	// 	body,
	// 	value,
	// 	response
	// };
	// modalStore.trigger(modal);

	// Set up the modal store with initial data
	modalStore.trigger({
		type: 'component',
		component: { ref: AddDataFormModal },
		title,
		body,
		value,
		response
	});

	return {
		Component: AddDataFormModal,
		props: { parent: { onClose: () => modalStore.close(), buttonTextCancel: 'Cancel' } }
	};
};

export const Default = Template.bind({});
const formData=[{"employee name": ''}, {email: ''}, {"job title": ''}, {tags: ''}, {status: ''}, {department: ''},{location: ''},{action: ''}]
Default.args = {
	title: 'Add Data Form',
	body: 'Please fill out the form below:',
	value:[{"employee name": ''}, {email: ''}, {"job title": ''}, {tags: ''}, {status: ''}, {department: ''},{location: ''},{action: ''}],
	response: (r: any) => console.log('Form submitted:', r)
};

// export const PrefilledData = Template.bind({});
// PrefilledData.args = {
// 	title: 'Edit Data Form',
// 	body: 'You can edit the prefilled data below:',
// 	value: [{ name: 'John Doe' }, { email: 'john.doe@example.com' }, { phone: '123-456-7890' }],
// 	response: (r: any) => console.log('Form submitted:', r)
// };