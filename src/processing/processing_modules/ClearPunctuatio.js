import {ProcessModule} from './ProcessModule';

export class ClearPunctuatio extends ProcessModule{

    constructor(){
        super();
        //TODO: it"s metainfo, need expand in config file. (Best way)
        this.IgnoreSymbols = [
            "\\{", "\\}", "\\!", "\\@", "\\#", "\\$", "\\%", "\\^", "\\&", "\\*", "\\(", "\\)", "\\=", "\\+", "\\<",
            "\\>", "\\,", "\\.", "\\;", "\\/", "\\~", "\\?", "\\|", "\\[", "\\]", " \\- ", " \\-", "\\- ",
            "(n|)\\'.\\w*", "not"  // it's delete next matches (n'*, '*) example didn't -> did , don't -> do, hasn't, has
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
        let regex;
        for(let i = 0; i < this.IgnoreSymbols.length; i++){
            regex = new RegExp(this.IgnoreSymbols[i], "g");
            text = text.replace(regex, ' ');
        }
        text = text.replace(/\s\s+/g, ' ');
        text = text.split(" ");
        return text;
    }
}
