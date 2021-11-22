const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()

describe("Vowels counter", function() {
    it("Expected: Correct vowels amount for valid value", function () {
        const testValue = 'ae4i ouyt 32';
        const expectedResult = 6;
        const result = program.countAllVowels(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for value without vowels", function () {
        const testValue = 'rtst / 567';
        const expectedResult = 0;
        const result = program.countAllVowels(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for empty value", function () {
        const testValue = '';
        const expectedResult = 0;
        const result = program.countAllVowels(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for NULL value", function () {
        const testValue = null;
        const expectedResult = 0;
        const result = program.countAllVowels(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for undefined value", function () {
        const testValue = undefined;
        const expectedResult = 0;
        const result = program.countAllVowels(testValue);
        assert.equal(result, expectedResult);
    });

});