"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Word = exports.Word = (function () {
    function Word(word) {
        _classCallCheck(this, Word);

        this.word = word;
    }

    _createClass(Word, {
        getWord: {
            value: function getWord() {
                return this.word;
            }
        },
        getWithOut: {
            value: function getWithOut() {}
        }
    });

    return Word;
})();