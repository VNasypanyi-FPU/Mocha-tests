const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()

describe("Sentence counter", function() {
    it("Expected: Correct sentence amount for value with all trigger symbols", function () {
        const testValue = " Sentence testing. Review updates? news. Changes of' structure! ";
        const expectedResult = 4;
        const result = program.countSentences(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for empty value", function () {
        const testValue = '';
        const expectedResult = 0;
        const result = program.countSentences(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: Correct sentence amount for value without dots", function () {
        const testValue = 'Report';
        const expectedResult = 1;
        const result = program.countSentences(testValue); //null is returned
        assert.equal(result, expectedResult);
    });

    it("Expected: Correct sentence amount for value with single dot", function () {
        const testValue = 'Reporting new solution.';
        const expectedResult = 1;
        const result = program.countSentences(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O while using NULL value", function () {
        const testValue = null;
        const expectedResult = 0;
        const result = program.countSentences(testValue);
        assert.equal(result, expectedResult);
    });

    it("Expected: O for undefined value", function () {
        const testValue = undefined;
        const expectedResult = 0;
        const result = program.countSentences(testValue);
        assert.equal(result, expectedResult);
    });
});