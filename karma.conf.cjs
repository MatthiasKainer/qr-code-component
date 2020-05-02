const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ['esm', 'mocha', 'chai'],
      plugins: [
        // load plugin
        require.resolve('@open-wc/karma-esm'),
    
        // fallback: resolve any karma- plugins
        'karma-*',
      ],
      client: {
        mocha: {ui: 'tdd'},
      },
      files: [
        {
          pattern: config.grep ? config.grep : 'build/**/*.test.js',
          type: 'module',
        },
      ],
      // See the karma-esm docs for all options
      esm: {
        nodeResolve: true,
      },
    })
  );
  return config;
};
