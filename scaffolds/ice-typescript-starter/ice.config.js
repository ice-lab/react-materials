module.exports = {
  entry: 'src/index.tsx',
  publicPath: './',
  plugins: [
    ['ice-plugin-fusion', {
      theme: '@icedesign/theme',
    }],
  ],
};
