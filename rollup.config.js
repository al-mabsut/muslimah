import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default {
  input: 'src/index.js', // Main JavaScript file
  external: ['preact'], // Don’t bundle Preact
  plugins: [
    alias({
      entries: [
        { find: '@components', replacement: path.resolve(__dirname, 'src/components/') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils/') }
      ]
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
      file: 'dist/cjs/bundle.js', // Output file
      format: 'cjs',
      name: '@al-mabsut/muslimah',
      sourcemap: true,
      globals: {
        preact: 'Preact'
      }
    },
    {
      file: 'dist/esm/bundle.js', // Output file
      format: 'esm',
      name: '@al-mabsut/muslimah',
      sourcemap: true,
      globals: {
        preact: 'Preact'
      }
    }
  ]
};
