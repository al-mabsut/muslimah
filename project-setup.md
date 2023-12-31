# Project Setup

* This is a rollup-based project that produces two type of bundles:
  1. `dist/cjs/bundle.js`: for common js projects
  2. `dist/esm/bundle.js`: for ES6 based module projects. Here you want to mainly benefit from tree-shaking.

* Accordingly, two different jest config files have been coined
* [Aliases](https://blog.logrocket.com/using-path-aliases-cleaner-react-typescript-imports) need to be maintained between the different configuration files:
  * `jest.config.cjs/esm.js`
  * `rollup.config.js`

* `.babelrc` ensures that we do not need to worry about `import {h} from "preact"` all the time

## Testing

* `npx jest --config jest.config.esm.js`
* `npx jest --config jest.config.cjs.js`
