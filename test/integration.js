var assert = require('chai').assert;

const home = require('../lib/index');

describe("pow", function() {

    let bigText = "It's very big hard test, ff ff ff but in 1999-year he die in alb234, // and now&&^&*( haha you rally need it's shit and We're not don't and didn't" +
        " you should";

    it("возводит в n-ю степень", function() {


        let res = home.ProcessTextAllModules(bigText);

        console.log(res);
    });

});