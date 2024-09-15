const nextJest = require('next/jest');

import type { JestConfigWithTsJest } from 'ts-jest';

const createJestConfig = nextJest({
  dir: './',
});

const tsconfig = require('./tsconfig.json');
const customJestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>'],
  moduleNameMapper: require('tsconfig-paths-jest')(tsconfig),
};

module.exports = createJestConfig(customJestConfig);
