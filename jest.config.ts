/** @type {import('ts-jest').JestConfigWithTsJest} */
import type {Config} from "jest";

const config: Config = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/"],
	collectCoverage: false,
	collectCoverageFrom: ["src/**/*.ts(x)"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
	modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"]
};

export default config;
