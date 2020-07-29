module.exports = {
  extends: ['./eslint-config'],
  globals: {
    Prism: false,
  },
  env: {
    browser: false,
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {
    // 使用驼峰式
    camelcase: 'error',
    /** 分割线：以下为公司 eslint 规则覆盖 **/
    // 驼峰式可以使用前缀下划线
    'no-underscore-dangle': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['warn', 'as-needed'],
    indent: 'off', // 以 prettier 为主
    'comma-dangle': 'off',
    strict: 'off',
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'array-callback-return': 'off',
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    quotes: 'off',
    'newline-per-chained-call': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true, // 允许 decorator 语法
    },
  },
};
