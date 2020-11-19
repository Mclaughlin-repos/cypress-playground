module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-react',
    'react-hooks',
    'prettier'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    eqeqeq: ['error', 'allow-null'],
        'no-unused-expressions': ['warn', {
            allowShortCircuit: true,
            allowTernary: true
        }], // UPDATE 'error' to 'warn' re: @typescript-eslint/eslint-plugin@2.20.0
        'no-invalid-this': 'off',
        'no-use-before-define': 'off',
        'no-loops/no-loops': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-confusing-arrow': 'off',
        'max-params': 'off',
        'complexity': ['error', 20],
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react/no-children-prop': 'off',
        'react/prop-types': [2, {
            skipUndeclared: true
        }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': 'off', // use prettier instead
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-ignore': 'warn', // UPDATE to @typescript-eslint/eslint-plugin@2.20.0
        '@typescript-eslint/no-empty-function': 'warn', // UPDATE to @typescript-eslint/eslint-plugin@2.20.0
        'react/display-name': 'off',
        'prettier/prettier': 'error',
        'jsx-a11y/label-has-for': 'off', // DEPRECATED - leave in `OFF` state - DO NOT REMOVE - https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        'jsx-a11y/label-has-associated-control': [ 2, {
          'labelComponents': ['CustomInputLabel'],
          'labelAttributes': ['label'],
          'controlComponents': ['CustomInput'],
          // detects for either a label htmlFor OR <label><component></component></label> nesting
          // RECOMMENED USAGE: htmlFor with id reference whenever possible
          // Fallback usage: <label><component></component></label> nesting
          'assert': 'either', 
          'depth': 3,
        }],
        'jsx-a11y/no-onchange': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': [ 'error', {
            'components': [ 'Link' ],
            'specialLink': [ 'hrefLeft', 'hrefRight' ],
            'aspects': [ 'noHref', 'invalidHref', 'preferButton' ]
          }],
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/aria-role': 'error'
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      env: {
        jest: false
      }
}
