(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _clipPath = __webpack_require__(2);

var _clipPath2 = _interopRequireDefault(_clipPath);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ClipPath('.ring-before', '50% 0 0 0');
ClipPath('.ring-bigger-before', '50% 0 0 0');
ClipPath('.ring-after', '0 0 50% 0');
ClipPath('.ring-bigger-after', '0 0 50% 0');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e("object"==typeof exports?exports:t)}(this,function(t){"use strict";function e(){return"clip-path-"+Math.random().toString(36).substring(7)}function i(t,i){i=i.replace(/px|%|em/g,"");var n=t.getAttribute("data-clip-path-id");if(n)document.querySelector("#"+n+" > polygon").setAttribute("points",i);else{var r=e(),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","0"),o.setAttribute("height","0"),o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");var p=document.createElementNS("http://www.w3.org/2000/svg","clipPath");p.setAttribute("id",r);var a=document.createElementNS("http://www.w3.org/2000/svg","polygon");a.setAttribute("points",i),p.appendChild(a),o.appendChild(p),document.body.appendChild(o),t.setAttribute("data-clip-path-id",r),setTimeout(function(){t.style.clipPath="url(#"+r+")"},0)}}function n(t,e,n){n=void 0!==n?n:o,void 0!==t.style.webkitClipPath?t.style.webkitClipPath="polygon("+e+")":n?t.style.clipPath="polygon("+e+")":i(t,e)}function r(t,e,i){if(!t)return console.error("Missing selector"),!1;var r=document.querySelectorAll(t||"");Array.prototype.forEach.call(r,function(t){(e=e||t.getAttribute("data-clip"))?n(t,e,i):console.error("Missing clip-path parameters. Please check ClipPath() arguments or data-clip attribute.",t)})}var o=function(){var t=document.createElement("div");return t.style.clipPath="polygon(0 0, 0 0, 0 0, 0 0)","polygon(0 0, 0 0, 0 0, 0 0)"===t.style.clipPath}();r.applyClipPath=n,"undefined"!=typeof jQuery&&function(t,e){t.fn.ClipPath=function(i){return i===Object(i)&&i.path&&(i=i.path),this.each(function(){e.applyClipPath(this,t(this).attr("data-clip")||i)})}}(jQuery,r),t.ClipPath=r});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.js.map