import {ClearPunctuatio} from "./processing_modules/ClearPunctuatio";
import {DuplicationCleaner} from "./processing_modules/DuplicationCleaner";
import {DigitCleaner} from "./processing_modules/DigitCleaner";

const needModules = [
    new ClearPunctuatio(),
    new DuplicationCleaner(),
    new DigitCleaner()
];

export function ProcessTextAllModules(text) {
    for (let i = 0; i < needModules.length; i++) {
        text = needModules[i].startProcessing(text);
    }
    return text;
}

export function GetUnknownWords(allWords, knownWords) {
    let result = [];
    let knowWords = [];
    for (let i = 0; i < allWords.length; i++) {
        let isKnown = false;
        for (let t = 0; t < knownWords.length; t++) {
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
