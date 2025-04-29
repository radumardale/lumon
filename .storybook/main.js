const path = require('path');

module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {}, // you can pass React-specific options here if needed
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
    };
    return config;
  },

  docs: {
    autodocs: true
  }
};
