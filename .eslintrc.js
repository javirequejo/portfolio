module.exports = {
 env: {
  browser: true,
  es2020: true
 },
 extends: ['plugin:react/recommended', 'airbnb'],
 parserOptions: {
  ecmaFeatures: {
   jsx: true
  },
  ecmaVersion: 11,
  sourceType: 'module'
 },
 plugins: ['react'],
 rules: {
  indent: 'off',
  semi: 'off',
  'react/jsx-indent': 'off',
  'react/jsx-filename-extension': 'off',
  'import/no-extraneous-dependencies': 'off',
  'react/prop-types': 'off',
  'react/jsx-props-no-spreading': 'off',
  'no-nested-ternary': 'off',
  'import/prefer-default-export': 'off',
  'comma-dangle': 'off'
 }
}
