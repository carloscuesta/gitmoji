const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
module.exports = createJestConfig({
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
  ],
  "testMatch": [
    "**/*.(spec).(ts)",
    "**/*.(spec).(tsx)"
  ],
  "moduleNameMapper": {
    "src/(.*)$": "<rootDir>/src/$1"
  },
  "testEnvironment": "jsdom"
})
