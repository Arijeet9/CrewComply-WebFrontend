import type { Preview } from '@storybook/svelte';
import '../src/app.postcss';

//skeleton ui modal utilities
import { initializeStores } from '@skeletonlabs/skeleton';

// Custom decorator to initialize stores
const withStoreInitialization = (Story, context) => {
	initializeStores();
	return Story(context);
  };
  
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [withStoreInitialization],
};

export default preview;
