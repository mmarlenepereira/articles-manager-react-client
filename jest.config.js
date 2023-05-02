module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.js?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
    globals: {
      'vue-jest': {
        babelConfig: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  };

