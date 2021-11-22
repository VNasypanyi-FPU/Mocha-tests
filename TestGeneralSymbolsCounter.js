const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()




describe("General symbol counter", function() {
it("Expected: Correct symbols amount for valid value", function () {
    const testValue = 'Lorem ipsum !#@$%^*()_+-|/?6~<>=юb';
    const expectedResult = 34;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);
});

it("Expected: O for empty value", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);
});

it("Expected: O for NULL value", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);
});

    it("Expected: O for undefined value", function () {
        const testValue = undefined;
        const expectedResult = 0;
        const result = program.countNumberOfAllCharacters(testValue);
        assert.equal(result, expectedResult);
    });

});





