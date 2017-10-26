"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var ProcessModule = require("./ProcessModule").ProcessModule;

var ClearPunctuatio = exports.ClearPunctuatio = (function (_ProcessModule) {
    function ClearPunctuatio() {
        _classCallCheck(this, ClearPunctuatio);

        _get(Object.getPrototypeOf(ClearPunctuatio.prototype), "constructor", this).call(this);
        //TODO: it"s metainfo, need expand in config file. (Best way)
        this.IgnoreSymbols = ["\\{", "\\}", "\\!", "\\@", "\\#", "\\$", "\\%", "\\^", "\\&", "\\*", "\\(", "\\)", "\\=", "\\+", "\\<", "\\>", "\\,", "\\.", "\\;", "\\/", "\\~", "\\?", "\\|", "\\[", "\\]", " \\- ", " \\-", "\\- ", "\\'s"];
    }

    _inherits(ClearPunctuatio, _ProcessModule);

    _createClass(ClearPunctuatio, {
        isIgnoreSymbol: {
            value: function isIgnoreSymbol(symbol) {
                for (var i = 0; i < this.IgnoreSymols.length; i++) {
                    if (symbol === this.IgnoreSymbols[i]) {
                        return true;
                    }
                }
                return false;
            }
        },
        startProcessing: {
            value: function startProcessing(text) {
                var regex = undefined;
                for (var i = 0; i < this.IgnoreSymbols.length; i++) {
                    regex = new RegExp(this.IgnoreSymbols[i], "g");
                    text = text.replace(regex, " ");
                }
                text = text.replace(/\s\s+/g, " ");
                text = text.split(" ");
                return text;
            }
        }
    });

    return ClearPunctuatio;
})(ProcessModule);