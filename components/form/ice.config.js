module.exports = {
  injectBabel: 'runtime',
  publicPath: './',
  plugins: [
    'ice-plugin-antd',
    'ice-plugin-fusion',
    ['ice-plugin-component', {
      type: 'component',
    }],
  ],
};
