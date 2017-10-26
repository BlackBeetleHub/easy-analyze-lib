"use strict";

exports.ProcessText = ProcessText;
Object.defineProperty(exports, "__esModule", {
    value: true
});

var ClearPunctuatio = require("./processing_modules/ClearPunctuatio").ClearPunctuatio;

var DuplicationCleaner = require("./processing_modules/DuplicationCleaner").DuplicationCleaner;

var DigitCleaner = require("./processing_modules/DigitCleaner").DigitCleaner;

var needModules = [new ClearPunctuatio(), new DuplicationCleaner(), new DigitCleaner()];

function ProcessText(text) {
    for (var i = 0; i < needModules.length; i++) {
        text = needModules[i].startProcessing(text);
    }
    return text;
}