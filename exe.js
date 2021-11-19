'use strict';

const isNullOrEmpty = text => typeof(text) === 'string' && text.length === 0; // checking for null/number/ other datatypes values is missing

//check of isNullorEmpty function work
console.log(isNullOrEmpty("")); //true
console.log(isNullOrEmpty(null));  //false
console.log(isNullOrEmpty("abc")); //false
console.log(isNullOrEmpty(5)); //false


module.exports = class StatisticsEngine {
    countWords(text) {
        if (isNullOrEmpty(text)) return 0;


        return text.split(' ').length;

    }

    countSentences(text) {
        if (isNullOrEmpty(text)) return 0;

        return text.match(/[\.?!]/g).length; // added exclamation mark as match symbol for calculation
    }

    countAllVowels(text) {

        if (isNullOrEmpty(text)) return 0;

        const res = text.match(/[aeiouy]/gi);

        return res ? res.length : 0;
    }

    countDifferentWords(text) {
        if (isNullOrEmpty(text)) return 0;

        return new Set(text.match(/\w+/g).map(i => i.toLowerCase())).size;
    }

    countNumberOfAllCharacters(text) {
        if (isNullOrEmpty(text)) return 0;

        return text.length;
    }
}


