var assert = require('chai').assert;

const home = require('../lib/index');

function clearText(text) {
    let processingModules = [new home.ClearPunctuatio(), new home.DuplicationCleaner(), new home.DigitCleaner()];

    for(let i = 0; i < processingModules.length; i++) {
        text = processingModules[i].startProcessing(text);
    }
    return text;
}

describe("pow", function() {

    let bigText = "It's very big hard test, but in 1999-year he die in alb234, // and now&&^&*(";

    it("возводит в n-ю степень", function() {


        let res = clearText(bigText);

        console.log(res);
    });

});