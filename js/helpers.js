"use strict";
var createTwoDimenensionalArray = function (size) {
    var result = [];
    for (var i = 0; i < size; i++) {
        result[i] = [];
        for (var j = 0; j < size; j++) {
            result[i][j] = Math.floor(Math.random() * 2);
        }
    }
    return result;
};
var checkIfValueIsOne = function (valueToCheck) { return valueToCheck === 1; };
var parseStringToNumber = function (stringToParse) {
    var number = 0;
    try {
        number = JSON.parse(stringToParse);
    }
    catch (ex) {
        console.log(ex);
    }
    return number;
};
