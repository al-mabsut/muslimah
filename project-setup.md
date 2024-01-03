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

## Architecture

* `npm run build` triggers Rollup to create 2 copies of 2 bundles:
  1. Primary copies of the bundles for NPM clients:
     * `dist/cjs/bundle.js`
     * `dist/esm/bundle.js`
  2. Secondary copies of the bundles for storybook client (e.g. for internal development):
     * `node_modules/@al-mabsut/muslimah/dist/cjs/bundle.js`
     * `node_modules/@al-mabsut/muslimah/dist/esm/bundle.js`

* Each bundle contains:
  1. The source code of all the components that we import in `src/index.js`
  2. A `contentStore` as an exported constant that encompasses the contents of all Markdown files as present under `contents/hanafi/en`

* The intended workflow in terms of internal development of this library is that inside `index.stories.js` you do two type of imports:
  1. The standard import of the index: `import { Muslimah } from './index';`.
  2. The contentStore import from the bundle: `import { contentStore } from '@al-mabsut/muslimah';`

* `@al-mabsut/muslimah` is an alias that we have configured inside `.storybook/main.js`: `{ find: '@al-mabsut/muslimah', replacement: path.resolve(__dirname, '../node_modules/@al-mabsut/muslimah/dist/esm/bundle.js') }`. The reason we have to do it this way is because storybooks run inside the browser, they do not have access to the local filesystem. Besides, it is great to develop in function of our principal NPM client, which this style mimics.

* Take note that since we do `import { Muslimah } from './index';` for the components, we are able to benefit from the hot-reloading features of storybook when we change the CSS and the code around.

In this fashion we have the best of both worlds:

* Fast, iterative development of our components that we can proudly show-case in our storybooks
* Caching of the markdown content that is not bound to change that often

Just beware to not forget running: `npm run build` after having done a `npm install` of this project

Note:

* I have noticed so far that `Storybook` has caching functionality that may cause havoc from time to time:
  * `rm -rf node_module/.cache` is your friend.
