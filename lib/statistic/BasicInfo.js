"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var BasicInformation = exports.BasicInformation = (function () {
    function BasicInformation() {
        _classCallCheck(this, BasicInformation);
    }

    _createClass(BasicInformation, null, {
        GetCountUsageWord: {
            value: function GetCountUsageWord(word, text) {
                if (!word) {
                    return 0;
                }var res = 0,
                    index = 0;
                while ((index = text.indexOf(word)) >= 0) {
                    text = text.substring(index + word.length);
                    res++;
                }
                return res;
            }
        }
    });

    return BasicInformation;
})();