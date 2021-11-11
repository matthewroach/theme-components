module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	setupFilesAfterEnv: [
		'./jest/testSetupFile.js',
	],
	verbose: true,
	moduleNameMapper: {
		'^.+\\.(scss)$': 'identity-obj-proxy',
	},
	transformIgnorePatterns: [
		'/node_modules/(?!@wpmedia)',
	],
	coverageDirectory: '<rootDir>/coverage',
	coverageThreshold: {
		global: {
			statements: 85,
			branches: 85,
			functions: 85,
			lines: 85,
		},
	},
	collectCoverageFrom: [
		'**/**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!**/images/*.svg',
		'!**/mock*.js',
		'!**/*.story*.jsx',
		'!**/.*.js',
		'!**/*.(config).*',
		'!**/.storybook/**',
		'!**/coverage/**',
		'!**/jest/**',
	],
};
