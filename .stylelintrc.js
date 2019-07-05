const { stylelint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(stylelint, {
  rules: {
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
  }
});
