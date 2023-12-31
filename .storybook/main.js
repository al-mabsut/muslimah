/** @type { import('@storybook/preact-vite').StorybookConfig } */
import fs from 'fs/promises';
import { StorybookConfig } from '@storybook/preact-vite';

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
                contents: await fs.readFile(args.path, 'utf8'),
              }));
            },
          },
        ],
      };
    };

  return config;
},
};
export default config;
