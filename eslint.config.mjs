// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'; // eslint-disable-line import-x/no-unresolved
import * as dependPlugin from 'eslint-plugin-depend';
import importPlugin from 'eslint-plugin-import-x';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import unicornPlugin from 'eslint-plugin-unicorn'; // eslint-disable-line import-x/default, import-x/namespace, import-x/no-named-as-default, import-x/no-named-as-default-member
import compatPlugin from 'eslint-plugin-compat';
import globals from 'globals';

import jestPlugin from 'eslint-plugin-jest';
import vitestPlugin from 'eslint-plugin-vitest';
import playwrightPlugin from 'eslint-plugin-playwright';
import vuePlugin from 'eslint-plugin-vue';
import NuxtEslintConfig from './.nuxt/eslint.config.mjs'; // eslint-disable-line import-x/extensions
import vueParser from 'vue-eslint-parser';
import babelParser from '@babel/eslint-parser';

import standardPlugin from 'eslint-plugin-standard';
import promisePlugin from 'eslint-plugin-promise';
import importNewlinesPlugin from 'eslint-plugin-import-newlines';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import prettierPlugin from 'eslint-plugin-prettier';
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';

import {
    sharedRules,
    typescriptRules,
    vueAndNuxtGlobals
} from './eslint.constants.mjs'; // eslint-disable-line import-x/extensions

export default tseslint.config(
    {
        // ?: intentionally uses computed syntax to make it easy to sort the keys
        plugins: {
            '@stylistic/ts': stylisticTsPlugin,
            // 'compat': compatPlugin,
            'eslint-comments': eslintCommentsPlugin,
            import: importPlugin,
            'import-newlines': importNewlinesPlugin,
            jsdoc: jsdocPlugin,
            prettier: prettierPlugin,
            promise: promisePlugin,
            'sort-keys-fix': sortKeysFixPlugin,
            standard: standardPlugin,
            // 'unicorn': unicornPlugin,
        }
    },
    { files: [ '**/*.{ts,tsx,cts,mts,js,cjs,mjs,vue}' ], },
    {
        // ?: config with just ignores is the replacement for `.eslintignore`
        ignores: [
            '**/node_modules/**',
            '**/.output/**',
            '**/.nuxt/**',

            '.nx/',
            '.yarn/',
            '**/jest.config.js',
            '**/node_modules/**',
            '**/dist/**',
            '**/fixtures/**',
            '**/coverage/**',
            '**/__snapshots__/**',
            '**/.docusaurus/**',
            '**/build/**',
            '.nx/*',
            '.yarn/*',
            // Files copied as part of the build
            'packages/types/src/generated/**/*.ts',
            // Playground types downloaded from the web
            'packages/website/src/vendor/',
            // see the file header in eslint-base.test.js for more info
            'packages/rule-tester/tests/eslint-base/',

            // "built/**",
            'tests/**',
            // "lib/**",
            // "src/lib/*.generated.d.ts",
            // "scripts/**/*.js",
            // "scripts/**/*.d.*",
            // "internal/**",
            // "coverage/**",

            './src/public/**',
            './src/docs/**',
            './src/.nuxt/**',

            './src/dist/**',
            // 'build/**',
            'docs/**',
            // 'ssr/**',

            'vendor/**',
            // 'bower_components/**',
            // 'node_modules/**',
            // '.vscode/**',
            // '.nuxt/**',
            // '.nuxt-*/**',
            // '.nuxt.*/**',

            // '*.min.*',

            'sw.js',

            // 'backup/**',

            'components.d.ts',
            // //Nuxt typed routes
            // 'generated/**',
            '__typed-router.ts'

        ],
    },

    // ?: extends
    eslint.configs.recommended,
    dependPlugin.configs[ 'flat/recommended' ],
    importPlugin.flatConfigs.recommended,
    jsdocPlugin.configs[ 'flat/recommended' ],
    unicornPlugin.configs[ 'flat/recommended' ],
    compatPlugin.configs[ 'flat/recommended' ],

    // ?: base config
    {
        languageOptions: {
            globals: {
                ... globals.browser,
                ... globals.es2022,
                ... globals.node,
            },
            parserOptions: {
                ecmaVersion: 2022,
                parser: babelParser,
                sourceType: 'module',
            },
        },
        linterOptions: { reportUnusedDisableDirectives: 'warn' },
        rules: { ... sharedRules },
        settings: {
            polyfills: [
                'Promise',
                'fetch',
                'Array.from',
            ],
        },
    },

    // ?: Override the recommended config
    {
        // ?: Test files
        extends: [
            ... tseslint.configs.recommended, // 'plugin:@typescript-eslint/recommended'
            jestPlugin.configs[ 'flat/style' ], // 'plugin:jest/style'
            jestPlugin.configs[ 'flat/recommended' ], // 'plugin:jest/recommended'
            importPlugin.flatConfigs.typescript, // 'plugin:import/typescript',
            vitestPlugin.configs.recommended.rules, // 'plugin:vitest/recommended',
            playwrightPlugin.configs[ 'flat/recommended' ], // 'plugin:playwright/recommended',
        ],
        files: [
            './src/**/**/_{test,spec}_/*.{j,t}s?(x)',
            './src/**/**/*.{test,spec}.{j,t}s?(x)',
            './tests/**/*.{test,spec}.{j,t}s?(x)',
        ],
        languageOptions: {
            globals: { ... jestPlugin.environments.globals.globals, },
            parser: tseslint.parser,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            jestPlugin,
            playwrightPlugin,
            vitestPlugin
        },
        rules: {
            'playwright/no-skipped-test': 'off',
            'vitest/valid-describe-callback': 'warn'
        }
    },
    {
        // ?: Vue and TS files
        extends: [
            importPlugin.flatConfigs.typescript, // 'plugin:import/typescript',
            ... vuePlugin.configs[ 'flat/strongly-recommended' ], // 'plugin:vue/vue3-strongly-recommended'
            ... tseslint.configs.recommended, // 'plugin:@typescript-eslint/recommended'
            // tseslint.configs.recommendedTypeChecked, // 'plugin:@typescript-eslint/recommended-type-checked', // ?: Along with Typecheck
            ... tseslint.configs.stylistic, // 'plugin:@typescript-eslint/stylistic',
            // tseslint.configs.stylisticTypeChecked, // 'plugin:@typescript-eslint/stylistic-type-checked', // ?: Along with Typecheck
            NuxtEslintConfig, // FIXME: '@nuxtjs/eslint-config-typescript',
        ],
        files: [ '**/*.vue', '**/*.ts' ],
        languageOptions: {
            globals: { ... vueAndNuxtGlobals },
            parser: vueParser,
            parserOptions: {
                extraFileExtensions: [ '.vue' ],
                parser: tseslint.parser,
                // project: './tsconfig.json',
                sourceType: 'module',
            },
        },
        plugins: { '@typescript-eslint': tseslint.plugin, },
        rules: {
            ... sharedRules,
            ... typescriptRules,
            indent: 'off',
            'sort-keys': 'off',
            'sort-keys-fix/sort-keys-fix': 'off',
            'vue/attribute-hyphenation': [ 'warn', 'always' ], // FIXME: Disabilitata perché rallenta EsLint
            'vue/attributes-order': [
                'warn',
                {
                    alphabetical: true,
                    order: [
                        'CONDITIONALS',
                        'LIST_RENDERING',
                        'RENDER_MODIFIERS',
                        'DEFINITION',
                        'TWO_WAY_BINDING',
                        'UNIQUE',
                        'GLOBAL',
                        'OTHER_ATTR',
                        'OTHER_DIRECTIVES',
                        'CONTENT',
                        'EVENTS',
                        'SLOT',
                    ],
                },
            ],
            'vue/component-definition-name-casing': [ 'warn', 'kebab-case' ],
            'vue/component-name-in-template-casing': [
                'warn',
                'kebab-case',
                { registeredComponentsOnly: false, },
            ],
            'vue/component-options-name-casing': [ 'warn', 'kebab-case' ],
            'vue/custom-event-name-casing': [
                'warn',
                'kebab-case',
                { ignores: [ '/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u' ] }
            ],
            'vue/html-closing-bracket-newline': [
                'warn',
                {
                    multiline: 'always',
                    singleline: 'never',
                },
            ],
            'vue/html-closing-bracket-spacing': [
                'warn',
                {
                    endTag: 'never',
                    selfClosingTag: 'always',
                    startTag: 'never',
                },
            ],
            'vue/html-end-tags': 'warn',
            'vue/html-indent': [ 'warn', 4 ],
            'vue/html-quotes': [ 'warn', 'double' ],
            'vue/html-self-closing': 'warn',
            'vue/max-attributes-per-line': [
                'warn',
                {
                    multiline: 1,
                    singleline: 2,
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/multiline-html-element-content-newline': [
                'warn',
                {
                    allowEmptyLines: true,
                    ignoreWhenEmpty: false,
                },
            ],
            'vue/no-dupe-keys': 'warn',
            'vue/no-multiple-template-root': 'off',
            'vue/no-unused-components': 'warn',
            'vue/no-unused-vars': 'warn',
            'vue/no-use-v-if-with-v-for': [ 'warn', { allowUsingIterationVar: true, },],
            'vue/no-v-for-template-key': 'off',
            'vue/no-v-for-template-key-on-child': 'warn',
            'vue/no-v-html': 'off',
            'vue/no-v-model-argument': 'off',
            'vue/no-v-text-v-html-on-component': 'off',
            'vue/order-in-components': 'warn',
            'vue/require-default-prop': 'warn',
            'vue/require-name-property': 'warn',
            'vue/require-prop-types': 'warn',
            'vue/script-indent': [
                'warn',
                4,
                {
                    baseIndent: 1,
                    switchCase: 1,
                },
            ],
            'vue/singleline-html-element-content-newline': [
                'warn',
                {
                    ignoreWhenEmpty: false,
                    ignores: [ 'slot' ],
                },
            ],
            'vue/sort-keys': 'warn',
            'vue/space-unary-ops': [
                'warn',
                {
                    nonwords: true,
                    words: true
                },
            ],
            'vue/static-class-names-order': 'warn',
            'vue/valid-next-tick': 'warn',
            'vue/valid-v-slot': [ 'warn', { allowModifiers: true, },],
        },
    },
    {
        // ?: TS files
        extends: [
            importPlugin.flatConfigs.typescript, // 'plugin:import/typescript'
            ... tseslint.configs.recommended, // 'plugin:@typescript-eslint/recommended'
            // tseslint.configs.recommendedTypeChecked, // 'plugin:@typescript-eslint/recommended-type-checked', // ?: Along with Typecheck
            ... tseslint.configs.stylistic, // 'plugin:@typescript-eslint/stylistic',
            // tseslint.configs.stylisticTypeChecked, // 'plugin:@typescript-eslint/stylistic-type-checked' // ?: Along with Typecheck
        ],
        files: [ '**/*.ts' ],
        languageOptions: {
            globals: { ... vueAndNuxtGlobals },
            parser: tseslint.parser,
            // parserOptions: {
            //     project: './tsconfig.json',
            // },
        },
        plugins: { '@typescript-eslint': tseslint.plugin, },
        rules: {
            ... sharedRules,
            ... typescriptRules,
        },
    }
);
