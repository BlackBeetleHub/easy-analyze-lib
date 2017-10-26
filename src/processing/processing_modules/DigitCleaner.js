import {ProcessModule} from './ProcessModule';

export class DigitCleaner extends ProcessModule {

    constructor() {
        super();
    }

    isContainDigit(word) {
        for (let i = 0; i < word.length; i++) {
            if(!isNaN(word[i])){
                return true;
            }
        }
        return false;
    }

    startProcessing(words) {
        let result = [];
        for(let i = 0; i < words.length; i++){
            if(this.isContainDigit(words[i])){
                continue;
            }
            result.push(words[i]);
        }

        return result;
    }
}
