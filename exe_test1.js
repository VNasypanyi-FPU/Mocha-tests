const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()

describe("Symbol calculator", function() {
describe("1 [Word counter]", function() {

it("1.1 WС [valid value with extraspacing]", function () {
    const testValue = 'Lorem ipsum '; //spacing before ! is counted
    const expectedResult = 2;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.2 WС [value with NUMBER datatype]", function () {
    const testValue = 5;
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.3 WС [NULL value]", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.4 WС [empty value]", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.5 WС [completely valid value]", function () {
    const testValue = 'Lorem ipsum dolor sit amet';
    const expectedResult = 5;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.6 WС [UNDEFINED value]", function () {
    const testValue = undefined;
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.7 WС [boolean value]", function () {
    const testValue = true;
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.8 WС [Array value]", function () {
    const testValue = ["value1", "value2", "value3"];
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.9 WС [Object value]", function () {
    const testValue = {firstName: "Vadim", lastName: "Nas"};
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

});

describe("2 [Sentence counter]", function() {
it("2.1 SС [valid value with few trigger symbols]", function () {
    const testValue = " Sentence testing. Review updates? news. Changes of' structure! ";
    const expectedResult = 4;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.2 SС [empty value]", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.3 SС [valid value without dots]", function () {
    const testValue = 'Report';
    const expectedResult = 1;
    const result = program.countSentences(testValue); //null is returned
    assert.equal(result, expectedResult);
});

it("2.4 SС [valid value with single dot]", function () {
    const testValue = 'Reporting new solution.';
    const expectedResult = 1;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.5 SС [NULL value]", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.5 SС [value with NUMBER datatype]", function () {
    const testValue = 5;
    const expectedResult = 0;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});
});

describe("3 [Vowels counter]", function() {
it("3.1 VС [valid value]", function () {
    const testValue = 'ae4i ouyt 32';
    const expectedResult = 6;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);

});

it("3.2 VС [valid value without vowels]", function () {
    const testValue = 'rtst / 567';
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);

});

it("3.3 VС [empty value]", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);

});

it("3.4 VС [NULL value]", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);

});

it("3.5 VС [value with NUMBER datatype]", function () {
    const testValue = 5;
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);

});
});

describe("4 [Different words counter]", function() {
it("4.1 DW counter [valid value with few repeated words]", function () {
    const testValue = 'Test image laptop image 33 33 vadim image';
    const expectedResult = 5;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.2 DW counter [single unique value]", function () {
    const testValue = 'image image image image image image image  ';
    const expectedResult = 1;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.3 DW counter [empty value]", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.4 DW counter [NULL value]", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.5 DW counter [value with NUMBER datatype]", function () {
    const testValue = 4;
    const expectedResult = 0;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});
});

describe("5 [General symbol counter]", function() {
it("5.1 GSC [valid value]", function () {
    const testValue = 'Lorem ipsum !#@$%^*()_+-|/?6~<>=юb';
    const expectedResult = 34;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);


});

it("5.2 GSC [empty value]", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);

});

it("5.3 GSC [NULL value]", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);

});

it("5.4 GSC [value with NUMBER datatype]", function () {
    const testValue = 9;
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);

});

});
});


