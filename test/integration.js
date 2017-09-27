var assert = require('assert');
var easy = require('../lib/index');

describe('word', function() {
    describe('#getWord', function() {
        it('should get text after invoke getWord()', function() {
            let g = new easy.Word("test");
            assert.equal(g.getWord(), "test");
        });
    });
});