import {ProcessModule} from './ProcessModule';

export class DuplicationCleaner extends ProcessModule {

    constructor() {
        super();
    }

    startProcessing(words) {
        words.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });

        return words;
    }
}
