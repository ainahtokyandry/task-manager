// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    ignorePatterns: ['build/'],
    extends: [
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    rules: {
        'no-plusplus': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        camelcase: 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-nested-ternary': 'off',
        'import/no-unresolved': 'error',
        'no-restricted-globals': 'off',
        'consistent-return': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        'react-hooks/exhaustive-deps': 'warn',
        'no-unused-vars': 'warn',
        'import/no-cycle': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'react/no-unused-prop-types': 'off',
        'no-useless-return': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-console': 'off',
        'prettier/prettier': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/no-array-index-key': 'off',
        'jsx-a11y/heading-has-content': 'off',
        'func-names': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                scss: 'ever',
            },
        ],
        'react/jsx-boolean-value': ['error', 'never'],
        'sort-imports': 'off',
        'import/order': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'react/jsx-key': 'error',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.scss'],
        },
        'import/resolver': {
            typescript: {
                project: [path.resolve(__dirname, 'tsconfig.json')],
            },
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.scss'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
        caseSensitive: false,
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
};
