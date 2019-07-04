const { eslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslint, {
  rules: {
    // 'react-hooks/rules-of-hooks': 0,
    // 'no-unused-expressions': 0,
  }
});
