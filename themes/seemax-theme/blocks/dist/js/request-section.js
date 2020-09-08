/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/layout/request-section/request-section.js":
/*!**********************************************************!*\
  !*** ./blocks/layout/request-section/request-section.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   */
  var initializeBlock = function initializeBlock($block) {// $block.find('h2').css( "color", "blue" );
  }; // Initialize each block on page load (front end).


  $(document).ready(function () {
    // Make sure it's not the wp-backend
    if (!$('body').hasClass("wp-admin")) {
      $('.request-section').each(function () {
        initializeBlock($(this));
        var $thisID = $(this).attr('id'); // console.log($thisID);

        $('.' + $thisID + '-sideXSideCarousel').slick({
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          speed: 200,
          fade: true,
          cssEase: 'linear',
          prevArrow: $('.' + $thisID + '-slick-prev-arrow'),
          nextArrow: $('.' + $thisID + '-slick-next-arrow')
        });

        if ($(this).next().hasClass("request-section")) {
          $(this).next().addClass('side-x-side-in-a-row');
        }
      });
    }
  }); // Initialize dynamic block preview (editor).

  if (window.acf) {
    window.acf.addAction('render_block_preview/type=request-section', initializeBlock);
  }
})(jQuery);

/***/ }),

/***/ 6:
/*!****************************************************************!*\
  !*** multi ./blocks/layout/request-section/request-section.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/pcm/wp-content/themes/seemax-theme/blocks/layout/request-section/request-section.js */"./blocks/layout/request-section/request-section.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL2xheW91dC9yZXF1ZXN0LXNlY3Rpb24vcmVxdWVzdC1zZWN0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJpbml0aWFsaXplQmxvY2siLCIkYmxvY2siLCJkb2N1bWVudCIsInJlYWR5IiwiaGFzQ2xhc3MiLCJlYWNoIiwiJHRoaXNJRCIsImF0dHIiLCJzbGljayIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImluZmluaXRlIiwic3BlZWQiLCJmYWRlIiwiY3NzRWFzZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsIm5leHQiLCJhZGRDbGFzcyIsIndpbmRvdyIsImFjZiIsImFkZEFjdGlvbiIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQ1Y7Ozs7Ozs7Ozs7OztBQVlBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBVUMsTUFBVixFQUFtQixDQUNyQztBQUNILEdBRkQsQ0FiVSxDQWlCVjs7O0FBQ0FGLEdBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUUxQjtBQUNBLFFBQUksQ0FBQ0osQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSyxRQUFWLENBQW1CLFVBQW5CLENBQUwsRUFBcUM7QUFFbkNMLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCTSxJQUF0QixDQUEyQixZQUFVO0FBQ25DTCx1QkFBZSxDQUFFRCxDQUFDLENBQUMsSUFBRCxDQUFILENBQWY7QUFFQSxZQUFJTyxPQUFPLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsSUFBUixDQUFhLElBQWIsQ0FBZCxDQUhtQyxDQUluQzs7QUFFQVIsU0FBQyxDQUFDLE1BQUlPLE9BQUosR0FBWSxvQkFBYixDQUFELENBQW9DRSxLQUFwQyxDQUEwQztBQUN4Q0Msa0JBQVEsRUFBQyxJQUQrQjtBQUV4Q0MsdUJBQWEsRUFBQyxJQUYwQjtBQUd4Q0Msa0JBQVEsRUFBRSxJQUg4QjtBQUl4Q0MsZUFBSyxFQUFFLEdBSmlDO0FBS3hDQyxjQUFJLEVBQUUsSUFMa0M7QUFNeENDLGlCQUFPLEVBQUUsUUFOK0I7QUFPeENDLG1CQUFTLEVBQUVoQixDQUFDLENBQUMsTUFBSU8sT0FBSixHQUFZLG1CQUFiLENBUDRCO0FBUXhDVSxtQkFBUyxFQUFFakIsQ0FBQyxDQUFDLE1BQUlPLE9BQUosR0FBWSxtQkFBYjtBQVI0QixTQUExQzs7QUFXQSxZQUFJUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFrQixJQUFSLEdBQWViLFFBQWYsQ0FBd0IsaUJBQXhCLENBQUosRUFBK0M7QUFDN0NMLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLElBQVIsR0FBZUMsUUFBZixDQUF3QixzQkFBeEI7QUFDRDtBQUNGLE9BcEJEO0FBcUJEO0FBQ0YsR0EzQkQsRUFsQlUsQ0ErQ1Y7O0FBQ0EsTUFBSUMsTUFBTSxDQUFDQyxHQUFYLEVBQWlCO0FBQ2JELFVBQU0sQ0FBQ0MsR0FBUCxDQUFXQyxTQUFYLENBQXNCLDJDQUF0QixFQUFtRXJCLGVBQW5FO0FBQ0g7QUFFRixDQXBERCxFQW9ER3NCLE1BcERILEUiLCJmaWxlIjoicmVxdWVzdC1zZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiKGZ1bmN0aW9uKCQpe1xuICAvKipcbiAgICogaW5pdGlhbGl6ZUJsb2NrXG4gICAqXG4gICAqIEFkZHMgY3VzdG9tIEphdmFTY3JpcHQgdG8gdGhlIGJsb2NrIEhUTUwuXG4gICAqXG4gICAqIEBkYXRlICAgIDE1LzQvMTlcbiAgICogQHNpbmNlICAgMS4wLjBcbiAgICpcbiAgICogQHBhcmFtICAgb2JqZWN0ICRibG9jayBUaGUgYmxvY2sgalF1ZXJ5IGVsZW1lbnQuXG4gICAqIEBwYXJhbSAgIG9iamVjdCBhdHRyaWJ1dGVzIFRoZSBibG9jayBhdHRyaWJ1dGVzIChvbmx5IGF2YWlsYWJsZSB3aGVuIGVkaXRpbmcpLlxuICAgKiBAcmV0dXJuICB2b2lkXG4gICAqL1xuICB2YXIgaW5pdGlhbGl6ZUJsb2NrID0gZnVuY3Rpb24oICRibG9jayApIHtcbiAgICAgIC8vICRibG9jay5maW5kKCdoMicpLmNzcyggXCJjb2xvclwiLCBcImJsdWVcIiApO1xuICB9O1xuXG4gIC8vIEluaXRpYWxpemUgZWFjaCBibG9jayBvbiBwYWdlIGxvYWQgKGZyb250IGVuZCkuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBNYWtlIHN1cmUgaXQncyBub3QgdGhlIHdwLWJhY2tlbmRcbiAgICBpZiAoISQoJ2JvZHknKS5oYXNDbGFzcyhcIndwLWFkbWluXCIpKSB7XG5cbiAgICAgICQoJy5yZXF1ZXN0LXNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGluaXRpYWxpemVCbG9jayggJCh0aGlzKSApO1xuXG4gICAgICAgIHZhciAkdGhpc0lEID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygkdGhpc0lEKTtcblxuICAgICAgICAkKCcuJyskdGhpc0lEKyctc2lkZVhTaWRlQ2Fyb3VzZWwnKS5zbGljayh7XG4gICAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgICBhdXRvcGxheVNwZWVkOjUwMDAsXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgc3BlZWQ6IDIwMCxcbiAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICAgIHByZXZBcnJvdzogJCgnLicrJHRoaXNJRCsnLXNsaWNrLXByZXYtYXJyb3cnKSxcbiAgICAgICAgICBuZXh0QXJyb3c6ICQoJy4nKyR0aGlzSUQrJy1zbGljay1uZXh0LWFycm93JyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkKHRoaXMpLm5leHQoKS5oYXNDbGFzcyhcInJlcXVlc3Qtc2VjdGlvblwiKSl7XG4gICAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ3NpZGUteC1zaWRlLWluLWEtcm93Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gSW5pdGlhbGl6ZSBkeW5hbWljIGJsb2NrIHByZXZpZXcgKGVkaXRvcikuXG4gIGlmKCB3aW5kb3cuYWNmICkge1xuICAgICAgd2luZG93LmFjZi5hZGRBY3Rpb24oICdyZW5kZXJfYmxvY2tfcHJldmlldy90eXBlPXJlcXVlc3Qtc2VjdGlvbicsIGluaXRpYWxpemVCbG9jayApO1xuICB9XG5cbn0pKGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9