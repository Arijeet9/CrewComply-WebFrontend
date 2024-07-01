
import TagsBadge from '$lib/components/ui/badges/TagsBadge.svelte';

export default {
	title: 'Components/TagsBadge',
	component: TagsBadge,
	argTypes: {
		data: { control: 'array' },
	},
};

const Template = ({ ...args }) => ({
	Component: TagsBadge,
	props: args,
});

export const SingleTag = Template.bind({});
SingleTag.args = {
	data: 'Single Tag',
};

export const MultipleTags = Template.bind({});
MultipleTags.args = {
	data: ['Tag 1', 'Tag 2', 'Tag 3'],
};

export const ManyTags = Template.bind({});
ManyTags.args = {
	data: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
};

export const NoTags = Template.bind({});
NoTags.args = {
	data: [],
};
