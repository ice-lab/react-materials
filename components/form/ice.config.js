module.exports = {
  injectBabel: 'runtime',
  publicPath: './',
  plugins: [
    ['ice-plugin-fusion', {}],
    ['ice-plugin-antd', {}],
    'ice-plugin-component',
  ],
};
