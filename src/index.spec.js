// eslint-disable-next-line @typescript-eslint/no-require-imports
const assert = require("assert");

describe("parse rules", () => {

	let eslint;

	before("load eslint.json", () => {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		eslint = require("./index.js");
	});

	it("should be an object", () => {
		assert.strictEqual(
			typeof eslint,
			"object");
	});

	it("should have rules", () => {
		assert.strictEqual(
			typeof eslint.rules,
			"object");
	});

});
