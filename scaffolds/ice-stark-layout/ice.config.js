const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: './',
  plugins: [
    [
      'ice-plugin-fusion',
      {
        themePackage: '@alife/theme-451',
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
