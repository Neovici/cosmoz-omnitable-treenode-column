import { storybookPlugin } from '@web/dev-server-storybook';


export default {
	preserveSymlinks: true,
	plugins: [storybookPlugin({ type: 'web-components' })],
	nodeResolve: {
		mainFields: ['browser', 'jsnext', 'jsnext:main', 'module', 'main'],
		dedupe: pkg => ['@neovici', '@polymer', 'lit', 'haunted'].find(prefix => pkg.startsWith(prefix))
	}
};
