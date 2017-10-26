import {ClearPunctuatio} from "./processing_modules/ClearPunctuatio";
import {DuplicationCleaner} from "./processing_modules/DuplicationCleaner";
import {DigitCleaner} from "./processing_modules/DigitCleaner";

const needModules = [
    new ClearPunctuatio(),
    new DuplicationCleaner(),
    new DigitCleaner()
];

export function ProcessText(text){
    for(let i = 0; i < needModules.length; i++){
        text = needModules[i].startProcessing(text);
    }
    return text;
}