module.exports = {
  entry: 'src/index.js',
  publicPath: './',
  plugins: [
    ['ice-plugin-fusion', {
      theme: '@icedesign/theme',
      themeConfig: {
        'nav-primary-bg-color': '#333',
      },
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
  ],
};
