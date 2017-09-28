"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Word = require("./word").Word;

var Dictionary = exports.Dictionary = (function () {
    function Dictionary(texts) {
        _classCallCheck(this, Dictionary);

        this.words = [];
        this.spliceInWords(texts);
    }

    _createClass(Dictionary, {
        spliceInWords: {
            value: function spliceInWords(texts) {
                var processWord = texts.split(" ");
                for (var i = 0; i < processWord.length; i++) {
                    this.words[i] = new Word(processWord[i]);
                }
            }
        },
        atWord: {
            value: function atWord(index) {
                return this.words[index];
            }
        }
    });

    return Dictionary;
})();