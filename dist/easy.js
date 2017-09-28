var StellarBase =
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

	module.exports = __webpack_require__(1);
	// Ignore lodash from js-xdr
	/*globals _*/
	_.noConflict();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _clear_word = __webpack_require__(2);

	Object.defineProperty(exports, 'Word2', {
	  enumerable: true,
	  get: function get() {
	    return _clear_word.Word2;
	  }
	});

	var _word = __webpack_require__(3);

	Object.defineProperty(exports, 'Word', {
	  enumerable: true,
	  get: function get() {
	    return _word.Word;
	  }
	});

	var _dictionary = __webpack_require__(4);

	Object.defineProperty(exports, 'Dictionary', {
	  enumerable: true,
	  get: function get() {
	    return _dictionary.Dictionary;
	  }
	});
	exports['default'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cheker = (function () {
	    function Cheker(cheker) {
	        _classCallCheck(this, Cheker);

	        this.val = cheker;
	    }

	    _createClass(Cheker, [{
	        key: "getC",
	        value: function getC() {
	            return this.val;
	        }
	    }]);

	    return Cheker;
	})();

	exports.Cheker = Cheker;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _word = __webpack_require__(3);

	var Dictionary = (function () {
	    function Dictionary(texts) {
	        _classCallCheck(this, Dictionary);

	        this.words = [];
	        this.spliceInWords(texts);
	    }

	    _createClass(Dictionary, [{
	        key: "spliceInWords",
	        value: function spliceInWords(texts) {
	            var processWord = texts.splice(" ");
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

/***/ })
/******/ ]);