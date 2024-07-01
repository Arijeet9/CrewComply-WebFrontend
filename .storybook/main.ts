import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-knobs',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-actions',
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	}
};
export default config;
