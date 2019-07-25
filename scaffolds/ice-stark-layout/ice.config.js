const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: './',
  plugins: [
    [
      'ice-plugin-fusion',
      {
        themePackage: '@alifd/theme-shell',
      },
    ],
    [
      'ice-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
  ],
  alias: {
    '@': path.resolve(__dirname, './src/'),
  },
  devServer: {
    historyApiFallback: true,
  },
};
