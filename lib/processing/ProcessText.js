"use strict";

var ClearPunctuatio = require("./processing_modules/ClearPunctuatio").ClearPunctuatio;

var DuplicationCleaner = require("./processing_modules/DuplicationCleaner").DuplicationCleaner;

var DigitCleaner = require("./processing_modules/DigitCleaner").DigitCleaner;

var needModules = [new ClearPunctuatio(), new DuplicationCleaner(), new DigitCleaner()];

module.exports = {

    ProcessTextAllModules: function ProcessTextAllModules(text) {
        for (var i = 0; i < needModules.length; i++) {
            text = needModules[i].startProcessing(text);
        }
        return text;
    },
    GetUnknownWords: function GetUnknownWords(allWords, knownWords) {
        var result = [];
        var knowWords = [];
        for (var i = 0; i < allWords.length; i++) {
            var isKnown = false;
            for (var t = 0; t < knownWords.length; t++) {
                if (allWords[i] === knownWords[t].Word_value) {
                    knowWords.push(knownWords[t]);
                    isKnown = true;
                    break;
                }
            }
            if (!isKnown) {
                result.push(allWords[i]);
            }
        }
        return result;
    }
};