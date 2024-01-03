import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';
import markdown from '@jackfranklin/rollup-plugin-markdown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js', // Main JavaScript file
  external: ['preact'], // Don’t bundle Preact
  plugins: [
    alias({
      entries: [
        { find: '@hanafi', replacement: path.resolve(__dirname, 'contents/hanafi/') },
        { find: '@components', replacement: path.resolve(__dirname, 'src/components/') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils/') }
      ]
    }),
    markdown({
      include: 'content/hanafi/en/*.md',
      allowImports: true
    }),
    postcss({
      extensions: ['.css'],
      modules: true
    }),
    resolve(), // Locate and bundle dependencies in 'node_modules'
    babel({
      exclude: 'node_modules/**', // Only transpile our source code
      extensions: ['.js', '.jsx'],
      babelHelpers: 'bundled'
    }),
    commonjs() // Convert CommonJS modules to ES6
  ],
  output: [
    {
      file: 'dist/cjs/bundle.js',
      format: 'cjs',
      name: '@al-mabsut/muslimah',
      sourcemap: true,
      globals: {
        preact: 'Preact'
      }
    },
    {
      file: 'dist/esm/bundle.js',
      format: 'esm',
      name: '@al-mabsut/muslimah',
      sourcemap: true,
      globals: {
        preact: 'Preact'
      }
    },
    {
      file: 'node_modules/@al-mabsut/muslimah/dist/cjs/bundle.js',
      format: 'cjs',
      name: '@al-mabsut/muslimah',
      sourcemap: true,
      globals: {
        preact: 'Preact'
      }
    },
    {
      file: 'node_modules/@al-mabsut/muslimah/dist/esm/bundle.js',
      format: 'esm',
      name: '@al-mabsut/muslimah',
      sourcemap: true,
      globals: {
        preact: 'Preact'
      }
    }
  ]
};
