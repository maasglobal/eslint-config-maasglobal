/* eslint-disable */

module.exports = {
  extends: 'eslint:recommended',
  env: {
    es2020: true, // Register ES2020 globals
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['import', 'jsdoc'],
  settings: {
    jsdoc: {
      overrideReplacesDocs: false,
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          Function: false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-loss-of-precision': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        vars: 'all',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'block-scoped-var': 'error',
    'class-methods-use-this': 0,
    'consistent-return': 'error',
    'default-case': [
      'error',
      {
        commentPattern: '^no default$',
      },
    ],
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'func-style': ['error', 'declaration'],
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'guard-for-in': 'error',
    'import/export': 'error',
    'import/extensions': 0,
    'import/first': ['error', 'absolute-first'],
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-default-export': 0,
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '/**/test/**/*.js',
          '/.prettierrc.js',
          '/bin/test',
          '/gulpfile.js',
          '/jest.setupEnvironment.js',
          '/scripts/**/*.js',
          '/webpack.config.js',
        ],
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 0,
    'jsdoc/check-alignment': 1,
    'jsdoc/check-examples': 1,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/implements-on-classes': 1,
    'jsdoc/no-types': 1,
    'jsdoc/no-undefined-types': 0,
    'jsdoc/require-description': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-jsdoc': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-returns-type': 0,
    'linebreak-style': ['error', 'unix'],
    'lines-around-directive': [
      'error',
      {
        after: 'always',
        before: 'always',
      },
    ],
    'max-depth': ['error', 4],
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'off',
    // Handled by Prettier
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'off',
    // Handled by Prettier
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-properties': [
      'error',
      {
        message: 'arguments.callee is deprecated',
        object: 'arguments',
        property: 'callee',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'global',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'self',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'window',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'global',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'self',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'window',
        property: 'isNaN',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineGetter__',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineSetter__',
      },
      {
        message: 'Use the exponentiation operator (**) instead.',
        object: 'Math',
        property: 'pow',
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'off',
    // Handled by Prettier
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    // Disarm eslint rule and use tslint rule
    // Otherwise, there will be errors thrown from enumerable key type definition and enum properties
    'no-unused-vars': 'off',
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-spread': 'error',
    'simple-import-sort/imports': [
      1,
      {
        groups: [['^\\u0000'], ['^[^.]'], ['^\\.']],
      },
    ],
    strict: ['error', 'safe'],
    'symbol-description': 'error',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'vars-on-top': 'error',
    yoda: 'error',
  },
  overrides: [
    {
      files: ['**/test/**', '**/*.test.js', 'jest.setupEnvironment.js'],
      env: {
        mocha: true,
        jest: true,
      },
    },
  ],
};
