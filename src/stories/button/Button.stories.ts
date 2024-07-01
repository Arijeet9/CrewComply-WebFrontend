import Button from '$lib/components/ui/button/Button.svelte';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		text: { control: 'text' },
		iconSrc: { control: 'text' },
		buttonClass: { control: 'text' },
		data: { control: 'array' }
	},
};

const Template = (args) => ({
	Component: Button,
	props: args,
});

export const Default = Template.bind({});
Default.args = {
	text: 'Open Modal',
	buttonClass: 'btn btn-filled-primary',
	data: null,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	...Default.args,
	iconSrc: 'https://imgs.search.brave.com/0dfkmCFWC2zrjWCenB_rDnfa_wKBmKDmxG4qSB78iQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9nb29nbGUt/aWNvbi01MTJ4NTEy/LXRxYzllbDNyLnBu/Zw',
};

export const WithFormData = Template.bind({});
WithFormData.args = {
	...Default.args,
	data: ['Name', 'Email', 'Address'],
};

export const CustomClass = Template.bind({});
CustomClass.args = {
	...Default.args,
	buttonClass: 'btn btn-filled-secondary',
};
