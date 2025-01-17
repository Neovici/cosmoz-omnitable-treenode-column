import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	...cfg,
	{
		rules: {
			'max-lines-per-function': 0,
			'import/group-exports': 0,
		},
	},
];
