import commonConfig from './jest.config.common.js';

export default {
  ...commonConfig,
  moduleNameMapper: {
    ...commonConfig.moduleNameMapper,
    '^@al-mabsut/muslimah$': '<rootDir>/dist/cjs/bundle.js'
  }
};
