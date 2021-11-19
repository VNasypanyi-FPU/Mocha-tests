const testing = require("./exe.js");
const assert = require('chai').assert

const program = new testing()

describe("Symbol calculator", function() {
describe("1 [Word counter]", function() {

it("1.1 Expected: Correct words amount for valid value with extraspacing", function () {
    const testValue = 'Lorem ipsum '; //spacing before ! is counted
    const expectedResult = 2;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.3 Expected: O for NULL value", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.4 Expected: O for empty value", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});

it("1.5 Expected: Correct words amount for completely valid value", function () {
    const testValue = 'Lorem ipsum dolor sit amet';
    const expectedResult = 5;
    const result = program.countWords(testValue);
    assert.equal(result, expectedResult);
});
});

describe("2 [Sentence counter]", function() {
it("2.1 Expected: Correct sentence amount for value with all trigger symbols", function () {
    const testValue = " Sentence testing. Review updates? news. Changes of' structure! ";
    const expectedResult = 4;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.2 Expected: O for empty value", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.3 Expected: Correct sentence amount for value without dots", function () {
    const testValue = 'Report';
    const expectedResult = 1;
    const result = program.countSentences(testValue); //null is returned
    assert.equal(result, expectedResult);
});

it("2.4 Expected: Correct sentence amount for value with single dot", function () {
    const testValue = 'Reporting new solution.';
    const expectedResult = 1;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});

it("2.5 Expected: O while using NULL value", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countSentences(testValue);
    assert.equal(result, expectedResult);
});
});

describe("3 [Vowels counter]", function() {
it("3.1 Expected: Correct vowels amount for valid value", function () {
    const testValue = 'ae4i ouyt 32';
    const expectedResult = 6;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);
});

it("3.2 Expected: O for value without vowels", function () {
    const testValue = 'rtst / 567';
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);
});

it("3.3 Expected: O for empty value", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);
});

it("3.4 Expected: O for NULL value", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countAllVowels(testValue);
    assert.equal(result, expectedResult);
});

});

describe("4 [Different words counter]", function() {
it("4.1 Expected: Correct different words amount for value with few repeated words", function () {
    const testValue = 'Test image laptop image 33 33 vadim image';
    const expectedResult = 5;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.2 Expected: Correct different words amount for single unique value", function () {
    const testValue = 'image image image image image image image  ';
    const expectedResult = 1;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.3 Expected: O for empty value", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

it("4.4 Expected: O for NULL value", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countDifferentWords(testValue);
    assert.equal(result, expectedResult);
});

});


describe("5 [General symbol counter]", function() {
it("5.1 Expected: Correct symbols amount for valid value", function () {
    const testValue = 'Lorem ipsum !#@$%^*()_+-|/?6~<>=юb';
    const expectedResult = 34;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);
});

it("5.2 Expected: O for empty value", function () {
    const testValue = '';
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);
});

it("5.3 Expected: O for NULL value", function () {
    const testValue = null;
    const expectedResult = 0;
    const result = program.countNumberOfAllCharacters(testValue);
    assert.equal(result, expectedResult);
});

});
});




