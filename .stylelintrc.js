const { stylelint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(stylelint, {
  rules: {
    "no-descending-specificity": 0,
    "no-duplicate-selectors": 0,
  }
});
