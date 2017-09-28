var assert = require('assert');
var easy = require('../lib/index');

describe('word', function () {

    describe('#getWord', function () {

        it('should get text after invoke getWord()', function () {
            let g = new easy.Word("test");
            assert.equal(g.getWord(), "test");
        });

        it('big test with specifics symbols', function () {
            let bigText = "!@#$%^&*() привет";
            let dict = new easy.Dictionary(bigText);
            for (let i = 0; i < dict.words.length; i++) {
                console.log(dict.atWord(i));
            }
        });

    });
});