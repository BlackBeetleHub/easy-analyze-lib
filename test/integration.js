var assert = require('chai').assert;

const mylib = require('../lib/index');

describe("pow", function() {

    let bigText = "Bigsdf sdhfsdklksgd khsadgh sgkd;lkhsdgklsdhglkasdhg;shdglksdh gh4tihg98iy3ht4wgiohngj khsg hsdig sdg lsd gdg 1 1 1 1 1 ";

    it("возводит в n-ю степень", function() {


        let clear = new mylib.ClearPunctuatio();

        let res = clear.startProcessing(bigText);

        console.log(res);
    });

});