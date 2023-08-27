const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      // Handle module aliases (this will be automatically configured for you soon)
      '^@app/(.*)$': '<rootDir>/src/app/$1',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@custom-hooks/(.*)$': '<rootDir>/src/custom-hooks/$1',
      '^@libs/(.*)$': '<rootDir>/src/libs/$1',
      '^@translations/(.*)$': '<rootDir>/src/translations/$1',
      '^@test/(.*)$': '<rootDir>/test/$1',
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
  };

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)