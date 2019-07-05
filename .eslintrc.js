const { eslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslint, {
  rules: {
    "global-require": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-else-return": 0,
  }
});
