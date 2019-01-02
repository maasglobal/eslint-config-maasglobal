# @maasglobal/eslint-config

## [ESLint](http://eslint.org/docs/developer-guide/shareable-configs) shareable config to be used across all [MaaS](https://github.com/maasglobal/) projects

### Usage

In `package.json` reference `@maasglobal/eslint-config` as one of `devDependencies`, and configure for eslint:

```json
{
  "eslintConfig": {
    "extends": "@maasglobal/eslint-config"
  }
}
```

### Prettier integration

For consistent whitespace formatting, an IDE should be configured to also apply [Prettier](https://prettier.io/) formatting on each file save.

To ensure all eslint rules are respected, best is to rely on `eslint-prettier` plugins, which ensure that Prettier formatting is followed with `eslint --fix` run.
