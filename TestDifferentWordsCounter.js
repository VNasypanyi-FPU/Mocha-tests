const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()

describe("Different words counter", function() {
    it("Expected: Correct different words amount for value with few repeated words", function () {
        const testValue = 'Test image laptop image 33 33 vadim image';
        const expectedResult = 5;
        const result = program.countDifferentWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: Correct different words amount for single unique value", function () {
        const testValue = 'image image image image image image image  ';
        const expectedResult = 1;
        const result = program.countDifferentWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for empty value", function () {
        const testValue = '';
        const expectedResult = 0;
        const result = program.countDifferentWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for NULL value", function () {
        const testValue = null;
        const expectedResult = 0;
        const result = program.countDifferentWords(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for undefined value", function () {
        const testValue = undefined;
        const expectedResult = 0;
        const result = program.countDifferentWords(testValue);
        assert.equal(result, expectedResult);
    });

});
