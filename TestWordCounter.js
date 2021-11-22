const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()

describe("Word counter", function() {

it("Expected: Correct words amount for valid value with extraspacing", function () {
    const testValue = 'Lorem ipsum '; //spacing before ! is counted
    const expectedResult = 2;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});
    it("Expected: O for NULL value", function () {
        const testValue = null;
        const expectedResult = 0;
        const result = program.countWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for empty value", function () {
        const testValue = '';
        const expectedResult = 0;
        const result = program.countWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: Correct words amount for completely valid value", function () {
        const testValue = 'Lorem ipsum dolor sit amet';
        const expectedResult = 5;
        const result = program.countWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for undefined value", function () {
        const testValue = undefined;
        const expectedResult = 0;
        const result = program.countWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for undefined value", function () {
        const testValue = undefined;
        const expectedResult = 0;
        const result = program.countWords(testValue);
        assert.equal(result, expectedResult);
    });


});
