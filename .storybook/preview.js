import '../src/index.css';

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
