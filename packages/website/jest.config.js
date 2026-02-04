const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

async function jestConfig() {
  const nextJestConfig = await createJestConfig({
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx}",
    ],
    "testMatch": [
      "**/*.(spec).(ts)",
      "**/*.(spec).(tsx)"
    ],
    "moduleNameMapper": {
      "src/(.*)$": "<rootDir>/src/$1",
      "\\.svg$": "<rootDir>/__mocks__/svg.js"
    },
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
    "reporters": [
      "default",
      "github-actions"
    ]
  })()

  // Add ignores for specific ESM packages so they are transformed by Jest
  // See: https://github.com/vercel/next.js/issues/35634
  nextJestConfig.transformIgnorePatterns[0] = '/node_modules/(!@vercel/analytics)/'

  return nextJestConfig
}

module.exports = jestConfig
