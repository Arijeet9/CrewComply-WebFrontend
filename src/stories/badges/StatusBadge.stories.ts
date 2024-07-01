
import StatusBadge from '$lib/components/ui/badges/StatusBadge.svelte';

export default {
	title: 'Components/StatusBadge',
	component: StatusBadge,
	argTypes: {
		label: { control: 'text' },
		index: { control: 'number' },
		rowHovered: { control: 'number' },
	},
};

const Template = ({ ...args }) => ({
	Component: StatusBadge,
	props: args,
});

export const Active = Template.bind({});
Active.args = {
	label: 'Active',
	index: 0,
	rowHovered: -1,
};

export const Inactive = Template.bind({});
Inactive.args = {
	label: 'Inactive',
	index: 1,
	rowHovered: -1,
};

export const Hovered = Template.bind({});
Hovered.args = {
	label: 'Hovered',
	index: 2,
	rowHovered: 2,
};
