module.exports = {
  root: true,
  extends: ['@shellagent/eslint-config/next.js'],
  rules: {
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    'no-else-return': 'warn',
    eqeqeq: 'warn',
    'react/self-closing-comp': 'warn',
    'import/no-duplicates': 'warn',
    '@typescript-eslint/lines-between-class-members': 'off',
  },
};
