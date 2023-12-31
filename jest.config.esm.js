import commonConfig from './jest.config.common.js';

export default {
  ...commonConfig,
  moduleNameMapper: {
    '^@al-mabsut/muslimah$': '<rootDir>/dist/esm/bundle.js'
  }
};
