import '../src/index.css';

// Registers the msw addon
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
	// parameters use to control behavior or Storybook features
	actions: { argTypesRegex: '^on[A-Z].*' }, // mock callbacks
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
