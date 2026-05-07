// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import cfg from '@neovici/cfg/eslint/index.mjs';

export default [...cfg, {
    rules: {
        'max-lines-per-function': 0,
        'import/group-exports': 0,
    },
}, ...storybook.configs['flat/recommended']];
