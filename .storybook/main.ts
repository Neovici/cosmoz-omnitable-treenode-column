import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
	framework: '@storybook/web-components-vite',
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		// eslint-disable-next-line storybook/no-uninstalled-addons
		'@neovici/cfg/storybook/preset.mjs',
	],
	docs: {
		defaultName: 'Documentation',
	},
};

export default config;
