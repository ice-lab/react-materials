const { injectBabelPlugin } = require('./node_modules/react-app-rewired');
const WebpackPluginImport = require('./node_modules/webpack-plugin-import');
const rewireSass = require('./rewire-scss');

module.exports = function override(config) {
  config = injectBabelPlugin(
    ['import', { libraryName: '@alifd/next' }],
    config
  );

  config = injectBabelPlugin('transform-decorators-legacy', config);

  config.plugins.push(
    new WebpackPluginImport([
      {
        libraryName: /^@alifd\/next\/lib\/([^/]+)/,
        stylePath: 'style.js',
      },
      {
        libraryName: /@icedesign\/.*/,
        stylePath: 'style.js',
      },
    ])
  );

  config = rewireSass(config);

  return config;
};
