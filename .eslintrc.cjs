module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'prettier',
    'prettier/@javascript-eslint',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
    'prettier/vue'
  ],
  'rules': {
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.vue', '.js', '.jsx', '.json', '.ts', '.tsx', '.css', '.scss']},
    ],
    /*'indent': [
        'error',
        'tab'
    ],
    'quotes': [
        'error',
        'double'
    ],
    'semi': [
        'error',
        'always'
    ]*/
  }
};
