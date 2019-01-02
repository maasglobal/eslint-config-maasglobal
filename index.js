"use strict";

module.exports = {
  extends: "eslint:recommended",
  env: {
    es6: true, // Register ES2015 globals
    node: true
  },
  parserOptions: { ecmaVersion: 2018 },
  plugins: ["import"],
  rules: {
    "accessor-pairs": "off",
    "array-bracket-newline": "off",
    "array-callback-return": "off",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": "off",
    "block-scoped-var": "error",
    "arrow-spacing": ["error", { before: true, after: true }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "callback-return": "off",
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: []
      }
    ],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    complexity: "off",
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "consistent-this": "off",
    "constructor-super": "error",
    curly: ["error", "multi-line"],
    "default-case": ["error", { commentPattern: "^no default$" }],
    "dot-notation": ["error", { allowKeywords: true }],
    "dot-location": ["error", "property"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "eol-last": ["error", "always"],
    "for-direction": "error",
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "off",
    "func-names": "off",
    "func-style": ["error", "declaration"],
    "function-paren-newline": "off",
    "generator-star-spacing": ["error", { before: false, after: true }],
    "getter-return": ["error", { allowImplicit: true }],
    "global-require": "off",
    "guard-for-in": "error",
    "handle-callback-err": "off",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "import/default": "off",
    "import/export": "error",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never"
      }
    ],
    "import/first": ["error", "absolute-first"],
    "import/imports-first": "off",
    "import/max-dependencies": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/newline-after-import": "off",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "off",
    "import/no-commonjs": "off",
    "import/no-deprecated": "off",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/test/**/*.js", "gulpfile.js", "scripts/**/*.js"]
      }
    ],
    "import/no-internal-modules": "off",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-restricted-paths": "off",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "off", // Fails in Travis
    "import/no-webpack-loader-syntax": "error",
    "import/order": "off",
    "import/prefer-default-export": "error",
    "import/unambiguous": "off",
    indent: "off", // Not compliant with prettier
    "init-declarations": "off",
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "lines-around-directive": [
      "error",
      {
        before: "always",
        after: "always"
      }
    ],
    "lines-between-class-members": "off",
    "max-depth": ["error", 4],
    "max-len": [
      "error",
      120,
      {
        ignoreUrls: true
      }
    ],
    "max-lines": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"]
      }
    ],
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "off",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": ["error", "always"],
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true
      }
    ],
    "no-console": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "off",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "off",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off",
    "no-else-return": ["error", { allowElseIf: true }],
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"]
      }
    ],
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": ["error", { exceptions: [] }],
    "no-implicit-coercion": "off",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: true
      }
    ],
    "no-mixed-requires": "off",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-native-reassign": "off",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "off",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-param-reassign": "off",
    "no-path-concat": "error",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-modules": "off",
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated"
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead."
      }
    ],
    "no-restricted-syntax": "off",
    "no-return-assign": ["error", "except-parens"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-sync": "off",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false
      }
    ],
    "no-undef": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "off",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-labels": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
    "no-useless-call": "off",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "off",
    "no-useless-escape": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    "no-useless-return": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    "object-shorthand": "off",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],
    "prefer-destructuring": "off", // Preferable to have it on, but switch requires refactor
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-reflect": "off",
    "prefer-rest-params": "off", // Not available in node 4.3.2 by default
    "prefer-spread": "error",
    "prefer-template": "off",
    "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],
    quotes: ["error", "single", { avoidEscape: true }],
    radix: "error",
    "require-await": "off",
    "require-jsdoc": "off",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    semi: ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": ["error", "last"],
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "space-in-parens": "off",
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],
    "spaced-comment": "off",
    strict: ["error", "safe"],
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "use-isnan": "error",
    "valid-jsdoc": "off",
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "vars-on-top": "error",
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
    "wrap-regex": "off",
    "yield-star-spacing": ["error", "after"],
    yoda: "error"
  },
  overrides: [{ files: "**/test/**", env: { mocha: true } }]
};