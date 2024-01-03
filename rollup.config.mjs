import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import image from '@rollup/plugin-image';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import postcss from 'rollup-plugin-postcss';

const markdownContentPlugin = () => ({
  name: 'markdown-content-plugin',
  renderChunk(code) {
    const contentStore = {};
    const directoryPath = path.join(__dirname, 'contents/hanafi/en');

    const files = fs.readdirSync(directoryPath);
    files.forEach(file => {
      if (file.endsWith('.md')) {
        const filePath = path.join(directoryPath, file);
        contentStore[file] = fs.readFileSync(filePath, 'utf8');
      }
    });

    const modifiedCode = code + `\n export const contentStore = ${JSON.stringify(contentStore)};\n`;

    // Return modified code and null for sourcemap
    return { code: modifiedCode, map: null };
  }
});


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
    markdownContentPlugin(),
    postcss({
      extensions: ['.css'],
      modules: true
    }),
    image(),
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
