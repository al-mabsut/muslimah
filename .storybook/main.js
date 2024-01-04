/** @type { import('@storybook/preact-vite').StorybookConfig } */
import fsPromise from 'fs/promises';
import { StorybookConfig } from '@storybook/preact-vite';
import path from 'path'
import markdown from '../plugins/markdown_plugin'

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config, { configType }) => {
    // Custom esbuild configuration
    config.esbuild = {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    };

    // Custom esbuild plugin for loading `.js` files as JSX
    if (configType === 'DEVELOPMENT') {
      config.optimizeDeps = config.optimizeDeps || {};
      config.optimizeDeps.esbuildOptions = {
        plugins: [
          {
            name: 'load-js-files-as-jsx',
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                loader: 'jsx',
                contents: await fsPromise.readFile(args.path, 'utf8'),
              }));
            },
          },
        ],
      };
    };

  config.plugins.push(markdown());
  return {
    ...config,
    resolve: {

      alias: [
        { find: '@hanafi', replacement: path.resolve(__dirname, '../contents/hanafi/') },
        { find: '@components', replacement: path.resolve(__dirname, '../src/components/') },
        { find: '@utils', replacement: path.resolve(__dirname, '../src/utils/') },
        { find: '@al-mabsut/muslimah', replacement: path.resolve(__dirname, '../node_modules/@al-mabsut/muslimah/dist/esm/bundle.js') }
      ]
    },
  };
},
};
export default config;
