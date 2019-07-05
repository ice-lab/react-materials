const path = require('path')

module.exports = {
  entry: 'demo/index.js',
  publicPath: './',
  outputAssetsPath: {
    css: '',
    js: '',
  },
  plugins: [
    ['ice-plugin-fusion', {}],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
  chainWebpack: (config) => {
    config.plugin('HtmlWebpackPlugin').tap(args => [
      {...(args[0] || {}), template: path.join(process.cwd(), './demo/index.html')},
    ]);
  },
};
