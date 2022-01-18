/**
 * @jest-environment node
 */

const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

describe('SASS', () => {
	const sassTestFiles = glob.sync(path.resolve(process.cwd(), '**/*.test.scss'));

	sassTestFiles.forEach((file) => sassTrue.runSass({ file }, { describe, it }));
});
