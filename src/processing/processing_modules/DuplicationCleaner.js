import {ProcessModule} from './ProcessModule';

export class DuplicationCleaner extends ProcessModule {

    constructor() {
        super();
    }

    startProcessing(words) {
        return Array.from(new Set(words));;
    }
}
