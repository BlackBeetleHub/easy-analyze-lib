var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Word = (function () {
	    function Word(word) {
	        _classCallCheck(this, Word);
	
	        this.word = word;
	    }
	
	    _createClass(Word, [{
	        key: "getWord",
	        value: function getWord() {
	            return this.word;
	        }
	    }, {
	        key: "getWithOut",
	        value: function getWithOut() {}
	    }]);
	
	    return Word;
	})();

	exports.Word = Word;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _word = __webpack_require__(1);
	
	var Dictionary = (function () {
	    function Dictionary(texts) {
	        _classCallCheck(this, Dictionary);
	
	        this.words = [];
	        this.spliceInWords(texts);
	    }
	
	    _createClass(Dictionary, [{
	        key: "spliceInWords",
	        value: function spliceInWords(texts) {
	            var processWord = texts.split(" ");
	            for (var i = 0; i < processWord.length; i++) {
	                this.words[i] = new _word.Word(processWord[i]);
	            }
	        }
	    }, {
	        key: "atWord",
	        value: function atWord(index) {
	            return this.words[index];
	        }
	    }]);
	
	    return Dictionary;
	})();

	exports.Dictionary = Dictionary;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProcessModule = (function () {
	    function ProcessModule() {
	        _classCallCheck(this, ProcessModule);
	    }
	
	    _createClass(ProcessModule, [{
	        key: "startProcessing",
	        value: function startProcessing(text) {}
	    }]);
	
	    return ProcessModule;
	})();

	exports.ProcessModule = ProcessModule;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ProcessModule2 = __webpack_require__(3);
	
	var ClearPunctuatio = (function (_ProcessModule) {
	    _inherits(ClearPunctuatio, _ProcessModule);
	
	    function ClearPunctuatio() {
	        _classCallCheck(this, ClearPunctuatio);
	
	        _get(Object.getPrototypeOf(ClearPunctuatio.prototype), "constructor", this).call(this);
	        //TODO: it"s metainfo, need expand in config file. (Best way)
	        this.IgnoreSymbols = ["\\{", "\\}", "\\!", "\\@", "\\#", "\\$", "\\%", "\\^", "\\&", "\\*", "\\(", "\\)", "\\=", "\\+", "\\<", "\\>", "\\,", "\\.", "\\;", "\\/", "\\~", "\\?", "\\|", "\\[", "\\]", " \\- ", " \\-", "\\- "];
	    }
	
	    _createClass(ClearPunctuatio, [{
	        key: "isIgnoreSymbol",
	        value: function isIgnoreSymbol(symbol) {
	            for (var i = 0; i < this.IgnoreSymols.length; i++) {
	                if (symbol === this.IgnoreSymbols[i]) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: "startProcessing",
	        value: function startProcessing(text) {
	            var regex = undefined;
	            for (var i = 0; i < this.IgnoreSymbols.length; i++) {
	                regex = new RegExp(this.IgnoreSymbols[i], "g");
	                text = text.replace(regex, ' ');
	            }
	            text = text.replace(/\s\s+/g, ' ');
	            return text;
	        }
	    }]);
	
	    return ClearPunctuatio;
	})(_ProcessModule2.ProcessModule);

	exports.ClearPunctuatio = ClearPunctuatio;

/***/ })
/******/ ]);
//# sourceMappingURL=ggg.js.map