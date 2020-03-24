module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null
  }
}
