var easy =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ClearPunctuatio = __webpack_require__(1).ClearPunctuatio;
	exports.DuplicationCleaner = __webpack_require__(3).DuplicationCleaner;
	exports.DigitCleaner = __webpack_require__(4).DigitCleaner;
	exports.ProcessTextAllModules = __webpack_require__(5).ProcessTextAllModules;
	exports.Word = __webpack_require__(6).Word;
	exports.Dictionary = __webpack_require__(7).Dictionary;
	exports["default"] = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ProcessModule = __webpack_require__(2).ProcessModule;

	var ClearPunctuatio = exports.ClearPunctuatio = (function (_ProcessModule) {
	    function ClearPunctuatio() {
	        _classCallCheck(this, ClearPunctuatio);

	        _get(Object.getPrototypeOf(ClearPunctuatio.prototype), "constructor", this).call(this);
	        //TODO: it"s metainfo, need expand in config file. (Best way)
	        this.IgnoreSymbols = ["\\{", "\\}", "\\!", "\\@", "\\#", "\\$", "\\%", "\\^", "\\&", "\\*", "\\(", "\\)", "\\=", "\\+", "\\<", "\\>", "\\,", "\\.", "\\;", "\\/", "\\~", "\\?", "\\|", "\\[", "\\]", " \\- ", " \\-", "\\- ", "(n|)\\'.\\w*", "not" // it's delete next matches (n'*, '*) example didn't -> did , don't -> do, hasn't, has
	        ];
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ProcessModule = exports.ProcessModule = (function () {
	    function ProcessModule() {
	        _classCallCheck(this, ProcessModule);
	    }

	    _createClass(ProcessModule, {
	        startProcessing: {
	            value: function startProcessing(text) {}
	        }
	    });

	    return ProcessModule;
	})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ProcessModule = __webpack_require__(2).ProcessModule;

	var DuplicationCleaner = exports.DuplicationCleaner = (function (_ProcessModule) {
	    function DuplicationCleaner() {
	        _classCallCheck(this, DuplicationCleaner);

	        _get(Object.getPrototypeOf(DuplicationCleaner.prototype), "constructor", this).call(this);
	    }

	    _inherits(DuplicationCleaner, _ProcessModule);

	    _createClass(DuplicationCleaner, {
	        startProcessing: {
	            value: function startProcessing(words) {
	                return Array.from(new Set(words));;
	            }
	        }
	    });

	    return DuplicationCleaner;
	})(ProcessModule);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ProcessModule = __webpack_require__(2).ProcessModule;

	var DigitCleaner = exports.DigitCleaner = (function (_ProcessModule) {
	    function DigitCleaner() {
	        _classCallCheck(this, DigitCleaner);

	        _get(Object.getPrototypeOf(DigitCleaner.prototype), "constructor", this).call(this);
	    }

	    _inherits(DigitCleaner, _ProcessModule);

	    _createClass(DigitCleaner, {
	        isContainDigit: {
	            value: function isContainDigit(word) {
	                for (var i = 0; i < word.length; i++) {
	                    if (!isNaN(word[i])) {
	                        return true;
	                    }
	                }
	                return false;
	            }
	        },
	        startProcessing: {
	            value: function startProcessing(words) {
	                var result = [];
	                for (var i = 0; i < words.length; i++) {
	                    if (this.isContainDigit(words[i])) {
	                        continue;
	                    }
	                    result.push(words[i]);
	                }

	                return result;
	            }
	        }
	    });

	    return DigitCleaner;
	})(ProcessModule);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.ProcessTextAllModules = ProcessTextAllModules;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ClearPunctuatio = __webpack_require__(1).ClearPunctuatio;

	var DuplicationCleaner = __webpack_require__(3).DuplicationCleaner;

	var DigitCleaner = __webpack_require__(4).DigitCleaner;

	var needModules = [new ClearPunctuatio(), new DuplicationCleaner(), new DigitCleaner()];

	function ProcessTextAllModules(text) {
	    for (var i = 0; i < needModules.length; i++) {
	        text = needModules[i].startProcessing(text);
	    }
	    return text;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var Word = __webpack_require__(6).Word;

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

/***/ })
/******/ ]);