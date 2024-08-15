module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      'indent': ['error', 2], // Enforce 2-space indentation
      'no-unused-vars': ['warn', { 'varsIgnorePattern': '^(React|process)$' }], 
      //'no-console': ['warn'], // Warn on console statements
      'react/jsx-uses-react': 'off', // Not needed with React 17+
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
  };
  