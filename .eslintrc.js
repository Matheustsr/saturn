module.exports = {
    env: {
        browser: true,

        es2021: true,
    },

    extends: [
        'plugin:import/errors',

        'plugin:import/warnings',

        'plugin:import/typescript',

        'airbnb-base',

        'prettier',
    ],

    plugins: ['prettier'],

    globals: {
        Atomics: 'readonly',

        SharedArrayBuffer: 'readonly',
    },

    parserOptions: {
        ecmaVersion: 12,

        sourceType: 'module',
    },

    rules: {
        'prettier/prettier': 'error',

        'class-methods-use-this': 'off',

        'no-param-reassign': 'off',

        camelcase: 'off',

        'no-underscore-dangle': 'off',

        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
};
