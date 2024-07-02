import EditDataFormModal from '$lib/components/ui/modals/forms/EditDataFormModal.svelte';
import {
	initializeStores,
	getModalStore,
	type ModalComponent,
	type ModalSettings
} from '@skeletonlabs/skeleton';

export default {
	title: 'Components/Modals/EditDataFormModal',
	component: EditDataFormModal,
	parameters: {
		layout: 'fullscreen'
	}
};


const Template = ({ title,body,value,response,...args}) => {
	initializeStores()
	const modalStore = getModalStore();

	// Set up the modal store with initial data
	modalStore.trigger({
		type: 'component',
		component: { ref: EditDataFormModal },
		title,
		body,
		value,
		response
	});

	return {
		Component: EditDataFormModal,
		props: { parent: { onClose: () => modalStore.close(), buttonTextCancel: 'Cancel' } }
	};
};

export const Default = Template.bind({});
const formData=[{"employee name": 'John Doe'}, {email: 'johndoe@gmail.com'}, {"job title": 'Engineer'}, {tags: 'JavaScript'}, {status: 'Active'}, {department: 'Engineering'},{location: 'Dubai'},{action: 'Active'}]
Default.args = {
	title: 'Edit Data Form',
	body: 'You can edit the prefilled data below:',
	value:[{"employee name": ''}, {email: ''}, {"job title": ''}, {tags: ''}, {status: ''}, {department: ''},{location: ''},{action: ''}],
	response: (r: any) => console.log('Form updated:', r)
};

