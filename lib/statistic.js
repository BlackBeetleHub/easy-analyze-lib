"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Word2 = exports.Word2 = (function () {
    function Word2(word2) {
        _classCallCheck(this, Word2);

        this.word2 = word2;
    }

    _createClass(Word2, {
        getWord: {
            value: function getWord() {
                return this.word2;
            }
        },
        getWithOut: {
            value: function getWithOut() {}
        }
    });

    return Word2;
})();