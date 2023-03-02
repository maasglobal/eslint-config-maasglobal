# eslint-config-maasglobal

**DEPRECATED**

This eslint config was used for old JavaScript based [MaaS Global](https://github.com/maasglobal/) projects. The focus of development has since moved to TypeScript. The config available in this package has been deprecated as a result. Please migrate to [eslint-config-maasglobal-ts](https://www.npmjs.com/package/eslint-config-maasglobal-ts) that is used for all new MaaS Global projects.

### Usage

In `package.json` reference `eslint-config-maasglobal`, `eslint-plugin-import`, `eslint-plugin-jsdoc` as one of `devDependencies`, and configure eslint as:

```json
{
  "eslintConfig": {
    "extends": "maasglobal"
  }
}
```

### Prettier integration

Note that provided eslint setup doesn't handle eventual code style formatting. This is supposed to be solely guarded by [Prettier](https://prettier.io/)

Within new projects, ensure `prettier` as one of `devDependencies` and setup `.prettierrc.js` as:

```javascript
'use strict';

module.exports = require('eslint-config-maasglobal/.prettierrc');
```

It's highly recommended that for consistent whitespace formatting, an IDE is configured to also apply Prettier formatting on each file save.

### Scripts setup and CI integration

For proper CI integration it's recommended that all MaaS projects have following scripts preconfgured:

```json
{
  "lint": "eslint --ignore-path=.gitignore .",
  "lint-updated": "pipe-git-updated --ext=js -- eslint --ignore-pattern '!*'",
  "prettier-check-updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier -c",
  "prettify": "prettier --write --ignore-path .gitignore '**/*.{css,html,js,json,md,yaml,yml}'",
  "prettify-updated": "pipe-git-updated --ext=css --ext=html --ext=js --ext=json --ext=md --ext=yaml --ext=yml -- prettier --write"
}
```

_Note: Scripts require additional `git-list-updated` dependency to be installed, reference it in `devDependencies`_

In Travis CI configuration, ensure that following validation is made on each PR build (but not on branch deployment):

```bash
npm run lint-updated && npm run prettier-check-updated
```
