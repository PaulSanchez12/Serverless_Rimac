const {
  defaults: tsjPreset
} = require('ts-jest/presets')

module.exports = {
  verbose: true,
  //preset: '@shelf/jest-dynamodb',
  testPathIgnorePatterns: [`/node_modules/`],
  testMatch: [`**/*.spec.ts`],
  transform: tsjPreset.transform,
};