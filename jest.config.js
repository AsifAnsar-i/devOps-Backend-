module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/__tests__/**/*.test.{ts,tsx}'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  