# eslint-config-maasglobal

## [ESLint](http://eslint.org/docs/developer-guide/shareable-configs) shareable config to be used across [MaaS](https://github.com/maasglobal/) projects

### Usage

In `package.json` reference `eslint-config-maasglobal` as one of `devDependencies`, and configure eslint as:

```json
{
  "eslintConfig": {
    "extends": "maasglobal"
  }
}
```

### Prettier integration

For consistent whitespace formatting, an IDE should be configured to also apply [Prettier](https://prettier.io/) formatting on each file save.

To ensure all eslint rules are respected, best is to rely on `eslint-prettier` plugins, which ensure that Prettier formatting is followed with `eslint --fix` run.
