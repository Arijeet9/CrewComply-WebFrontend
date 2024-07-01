import Table from '$lib/components/ui/table/Table.svelte';
import { action } from '@storybook/addon-actions';
import {data,data2,employees} from "$lib/components/ui/table/data"


export default {
	title: 'Components/Table',
	component: Table,
	argTypes: {
		route: { control: 'text' },
		addDataButton: { control: 'text' },
		data: { control: 'object' },
		checkbox: { control: 'boolean' },
		serials: { control: 'boolean' },
		searchFilter: { control: 'boolean' },
		selectFilter: { control: 'array' },
	},
};

const Template = ({ onRowSelect, onAddDataClick, ...args }) => ({
	Component: Table,
	props: args,
	on: {
		'select-row': onRowSelect,
		'add-data-click': onAddDataClick,
	},
});

export const Default = Template.bind({});
Default.args = {
	route: '',
	addDataButton: 'Add Data',
	data: employees,
	checkbox: false,
	serials: false,
	searchFilter: false,
	selectFilter: false,
	onRowSelect: action('Row selected'),
	onAddDataClick: action('Add data button clicked'),
};

export const TrainingPrograms = Template.bind({});
TrainingPrograms.args = {
	...Default.args,
	checkbox: true,
	serials: true,
    data:data,
};

export const Employees = Template.bind({});
Employees.args = {
	...Default.args,
    data:employees,
};

export const WithCheckboxAndSerials = Template.bind({});
WithCheckboxAndSerials.args = {
	...Default.args,
	checkbox: true,
	serials: true,
};

export const WithSearchFilter = Template.bind({});
WithSearchFilter.args = {
	...Default.args,
	searchFilter: true,
};

export const WithSelectFilter = Template.bind({});
WithSelectFilter.args = {
	...Default.args,
	selectFilter: ['status'],
};

export const FullFeatures = Template.bind({});
FullFeatures.args = {
	...Default.args,
	checkbox: true,
	serials: true,
	searchFilter: true,
	selectFilter: ['status', 'tags'],
};
