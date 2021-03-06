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

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

	var ClearPunctuatio = __webpack_require__(2).ClearPunctuatio;

	var DuplicationCleaner = __webpack_require__(4).DuplicationCleaner;

	var DigitCleaner = __webpack_require__(5).DigitCleaner;

	var ProcessText = _interopRequireWildcard(__webpack_require__(6));

	var BasicInformation = __webpack_require__(7).BasicInformation;

	var Word = __webpack_require__(8).Word;

	var Dictionary = __webpack_require__(9).Dictionary;

	module.exports = module.imports;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ProcessModule = __webpack_require__(3).ProcessModule;

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
/* 3 */
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

	var ProcessModule = __webpack_require__(3).ProcessModule;

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ProcessModule = __webpack_require__(3).ProcessModule;

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.ProcessTextAllModules = ProcessTextAllModules;
	exports.GetUnknownWords = GetUnknownWords;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var ClearPunctuatio = __webpack_require__(2).ClearPunctuatio;

	var DuplicationCleaner = __webpack_require__(4).DuplicationCleaner;

	var DigitCleaner = __webpack_require__(5).DigitCleaner;

	var needModules = [new ClearPunctuatio(), new DuplicationCleaner(), new DigitCleaner()];

	function ProcessTextAllModules(text) {
	    for (var i = 0; i < needModules.length; i++) {
	        text = needModules[i].startProcessing(text);
	    }
	    return text;
	}

	function GetUnknownWords(allWords, knownWords) {
	    var result = [];
	    var knowWords = [];
	    for (var i = 0; i < allWords.length; i++) {
	        var isKnown = false;
	        for (var t = 0; t < knownWords.length; t++) {
	            if (allWords[i] === knownWords[t].Word_value) {
	                knowWords.push(knownWords[t]);
	                isKnown = true;
	                break;
	            }
	        }
	        if (!isKnown) {
	            result.push(allWords[i]);
	        }
	    }
	    return result;
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var Word = __webpack_require__(8).Word;

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