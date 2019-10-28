const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: './',
  plugins: [
    [
      'ice-plugin-fusion',
      {
        themePackage: '@alifd/theme-shell',
        themeConfig: {
          // 防止被子应用样式污染
          nextPrefix: 'next-icestark-',
          'shell-prefix': '".fusion-shell"',
        },
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
