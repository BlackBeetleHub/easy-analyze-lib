export class BasicInformation {
    constructor(){

    }

    static GetCountUsageWord(word, text){
        if(!word)
            return 0;
        var res = 0, index = 0;
        while((index = text.indexOf(word)) >= 0) {
            text = text.substring(index + word.length);
            res++;
        }
        return res;
    }
}