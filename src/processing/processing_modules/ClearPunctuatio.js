import {ProcessModule} from "./ProcessModule";

export class ClearPunctuatio extends ProcessModule{

    constructor(){
        super();
        //TODO: it's metainfo, need expand in config file. (Best way)
        this.IgnoreSymbols = [
            '{', '}', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '<',
            '>', ',', '.', ';', '/', '~', '?', '|', '[', ']'
        ];
    }

    isIgnoreSymbol(symbol)
    {
        for(let i = 0; i < this.IgnoreSymols.length; i++){
            if(symbol === this.IgnoreSymbols[i]) {
                return true;
            }
        }
        return false;
    }

    startProcessing(text){
        for(let i = 0; i < this.IgnoreSymbols; i++){
            text = text.replace(this.IgnoreSymbols[i], ' ');
        }
        text = text.replace(/\s\s+/g, ' ');
    }
}
