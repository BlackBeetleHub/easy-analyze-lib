import {Word} from "./word";

export class Dictionary{
    constructor(texts){
        this.words = [];
        this.spliceInWords(texts);
    }

    spliceInWords(texts){
        let processWord = texts.split(" ");
        for(let i = 0; i < processWord.length; i++){
            this.words[i] = new Word(processWord[i]);
        }
    }

    atWord(index){
        return this.words[index];
    }
}