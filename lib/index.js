"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearPunctuatio = require("./processing/processing_modules/ClearPunctuatio").ClearPunctuatio;
exports.DuplicationCleaner = require("./processing/processing_modules/DuplicationCleaner").DuplicationCleaner;
exports.DigitCleaner = require("./processing/processing_modules/DigitCleaner").DigitCleaner;

var _processingProcessText = require("./processing/ProcessText");

exports.ProcessTextAllModules = _processingProcessText.ProcessTextAllModules;
exports.GetUnknownWords = _processingProcessText.GetUnknownWords;
exports.BasicInformation = require("./statistic/BasicInfo").BasicInformation;
exports.Word = require("./word").Word;
exports.Dictionary = require("./dictionary").Dictionary;
exports["default"] = module.exports;