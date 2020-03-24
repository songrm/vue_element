module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/typescript",
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: ['vue', 'html'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // js
    'space-before-function-paren': 0, // 函数名与参数的空格
    'camelcase': 0, // 变量必须用驼峰法
    'no-useless-escape': 0, // 正则转义字符
    'no-unused-vars': 0, // 'Vue' is defined but never used  no-unused-vars
    'no-undef': 0, // cityOptions' is not defined  no-undef
    'prefer-promise-reject-errors': 0, // promise reject必须是Error
    'no-async-promise-executor': 0,

    // vue
    'vue/no-use-v-if-with-v-for': 0,
    'vue/order-in-components': 0,
    'vue/require-prop-types': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/name-property-casing': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/require-default-prop': 0,
    'vue/attributes-order': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
};
// ,"@typescript-eslint/parser"
