/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
      /*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n}\n\n:root {\n  --main-color: #0c4a6e;\n  --main-color-grad: #0369a1;\n  --off-color: #f0f9ff;\n  --error-color: #be185d;\n  --uv-index-low: #a3e635;\n  --uv-index-med: #fcd34d;\n  --uv-index-medHigh: #f59e0b;\n  --uv-index-high: #dc2626;\n  --displayDiv-w: clamp(15rem, 80vw, 50rem);\n  --displayDiv-p: calc(var(--displayDiv-w) * 0.05);\n  --displayDiv-bord-rad: calc(var(--displayDiv-w) * 0.03);\n  --form-header-el: clamp(2rem, 10vw, 6rem);\n  --form-header-gap: calc(var(--form-header-el) * 0.1);\n  --form-input-p: calc(var(--displayDiv-p) * 0.25);\n  --form-input-fs: calc(var(--form-header-el) * 0.4);\n  --searchRes-fs: calc(var(--form-input-fs) * 0.8);\n}\n\nhtml {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\nbody {\n  background: linear-gradient(\n    to bottom,\n    var(--main-color),\n    var(--main-color-grad)\n  );\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Poppins", sans-serif;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  font-family: inherit;\n}\n\n.displayDiv {\n  background-color: white;\n  width: var(--displayDiv-w);\n  padding: var(--displayDiv-p);\n  border-radius: var(--displayDiv-bord-rad);\n}\n\n.displayDiv .form-header {\n  display: flex;\n  gap: var(--form-header-gap);\n  align-items: center;\n}\n.displayDiv .form-header > svg {\n  fill: var(--main-color);\n  width: var(--form-header-el);\n}\n\n.displayDiv .form-input {\n  flex-grow: 1;\n  position: relative;\n}\n\n.displayDiv .form-input > input {\n  width: 100%;\n  padding-block: var(--form-input-p);\n  padding-inline: calc(var(--form-input-p) * 0.5);\n  font-size: var(--form-input-fs);\n  color: var(--main-color);\n  text-transform: capitalize;\n}\n\n.displayDiv .form-input > input:focus + label,\n.displayDiv .form-input > input:valid + label {\n  scale: 0;\n}\n\n.displayDiv .form-input > label {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: calc(var(--form-input-fs) * 0.8);\n  color: var(--main-color);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.displayDiv .form-input > .invalid-location {\n  color: var(--error-color);\n  font-weight: 600;\n}\n\n.displayDiv .form-header > button {\n  background-color: var(--off-color);\n  display: grid;\n  border-radius: 50%;\n  width: var(--form-header-el);\n  padding: calc(var(--form-input-p) * 0.5);\n}\n\n.displayDiv .form-header > button:hover {\n  background-color: var(--main-color);\n  cursor: pointer;\n}\n\n.displayDiv .form-header > button:hover > svg {\n  fill: var(--off-color);\n}\n\n.displayDiv .form-header > button > svg {\n  fill: var(--main-color);\n}\n\n.displayDiv > .searchResult.hidden {\n  display: none;\n}\n\n.displayDiv > .searchResult {\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--form-header-gap) * 5);\n  margin-top: calc(var(--displayDiv-p) * 2.5);\n  padding-inline: calc(var(--displayDiv-p) * 0.3);\n  font-size: var(--searchRes-fs);\n  color: var(--main-color);\n}\n\n.searchResult span {\n  font-weight: 600;\n}\n\n.temperature,\n.windAndUV {\n  display: flex;\n  justify-content: space-between;\n}\n\n.locationAndCondition,\n.degrees,\n.feelsLike,\n.wind,\n.UV {\n  display: flex;\n  flex-direction: column;\n  gap: var(--form-header-gap);\n}\n\n.locationAndCondition > div,\n.degrees > div,\n.feelsLike > div,\n.wind > div,\n.UV > div {\n  display: flex;\n  justify-content: space-between;\n  gap: calc(var(--form-header-gap) * 2.5);\n}\n\n.UV {\n  display: flex;\n  justify-content: center;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style.css"],
            names: [],
            mappings:
              "AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,2BAA2B;EAC3B,wBAAwB;EACxB,yCAAyC;EACzC,gDAAgD;EAChD,uDAAuD;EACvD,yCAAyC;EACzC,oDAAoD;EACpD,gDAAgD;EAChD,kDAAkD;EAClD,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE;;;;GAIC;EACD,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;;;;EAIE,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,4BAA4B;EAC5B,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kCAAkC;EAClC,+CAA+C;EAC/C,+BAA+B;EAC/B,wBAAwB;EACxB,0BAA0B;AAC5B;;AAEA;;EAEE,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,2CAA2C;EAC3C,wBAAwB;EACxB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,kBAAkB;EAClB,4BAA4B;EAC5B,wCAAwC;AAC1C;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qCAAqC;EACrC,2CAA2C;EAC3C,+CAA+C;EAC/C,8BAA8B;EAC9B,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;;;EAKE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;;;;;EAKE,aAAa;EACb,8BAA8B;EAC9B,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB",
            sourcesContent: [
              '*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n}\n\n:root {\n  --main-color: #0c4a6e;\n  --main-color-grad: #0369a1;\n  --off-color: #f0f9ff;\n  --error-color: #be185d;\n  --uv-index-low: #a3e635;\n  --uv-index-med: #fcd34d;\n  --uv-index-medHigh: #f59e0b;\n  --uv-index-high: #dc2626;\n  --displayDiv-w: clamp(15rem, 80vw, 50rem);\n  --displayDiv-p: calc(var(--displayDiv-w) * 0.05);\n  --displayDiv-bord-rad: calc(var(--displayDiv-w) * 0.03);\n  --form-header-el: clamp(2rem, 10vw, 6rem);\n  --form-header-gap: calc(var(--form-header-el) * 0.1);\n  --form-input-p: calc(var(--displayDiv-p) * 0.25);\n  --form-input-fs: calc(var(--form-header-el) * 0.4);\n  --searchRes-fs: calc(var(--form-input-fs) * 0.8);\n}\n\nhtml {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\nbody {\n  background: linear-gradient(\n    to bottom,\n    var(--main-color),\n    var(--main-color-grad)\n  );\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Poppins", sans-serif;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  font-family: inherit;\n}\n\n.displayDiv {\n  background-color: white;\n  width: var(--displayDiv-w);\n  padding: var(--displayDiv-p);\n  border-radius: var(--displayDiv-bord-rad);\n}\n\n.displayDiv .form-header {\n  display: flex;\n  gap: var(--form-header-gap);\n  align-items: center;\n}\n.displayDiv .form-header > svg {\n  fill: var(--main-color);\n  width: var(--form-header-el);\n}\n\n.displayDiv .form-input {\n  flex-grow: 1;\n  position: relative;\n}\n\n.displayDiv .form-input > input {\n  width: 100%;\n  padding-block: var(--form-input-p);\n  padding-inline: calc(var(--form-input-p) * 0.5);\n  font-size: var(--form-input-fs);\n  color: var(--main-color);\n  text-transform: capitalize;\n}\n\n.displayDiv .form-input > input:focus + label,\n.displayDiv .form-input > input:valid + label {\n  scale: 0;\n}\n\n.displayDiv .form-input > label {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: calc(var(--form-input-fs) * 0.8);\n  color: var(--main-color);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.displayDiv .form-input > .invalid-location {\n  color: var(--error-color);\n  font-weight: 600;\n}\n\n.displayDiv .form-header > button {\n  background-color: var(--off-color);\n  display: grid;\n  border-radius: 50%;\n  width: var(--form-header-el);\n  padding: calc(var(--form-input-p) * 0.5);\n}\n\n.displayDiv .form-header > button:hover {\n  background-color: var(--main-color);\n  cursor: pointer;\n}\n\n.displayDiv .form-header > button:hover > svg {\n  fill: var(--off-color);\n}\n\n.displayDiv .form-header > button > svg {\n  fill: var(--main-color);\n}\n\n.displayDiv > .searchResult.hidden {\n  display: none;\n}\n\n.displayDiv > .searchResult {\n  display: flex;\n  flex-direction: column;\n  gap: calc(var(--form-header-gap) * 5);\n  margin-top: calc(var(--displayDiv-p) * 2.5);\n  padding-inline: calc(var(--displayDiv-p) * 0.3);\n  font-size: var(--searchRes-fs);\n  color: var(--main-color);\n}\n\n.searchResult span {\n  font-weight: 600;\n}\n\n.temperature,\n.windAndUV {\n  display: flex;\n  justify-content: space-between;\n}\n\n.locationAndCondition,\n.degrees,\n.feelsLike,\n.wind,\n.UV {\n  display: flex;\n  flex-direction: column;\n  gap: var(--form-header-gap);\n}\n\n.locationAndCondition > div,\n.degrees > div,\n.feelsLike > div,\n.wind > div,\n.UV > div {\n  display: flex;\n  justify-content: space-between;\n  gap: calc(var(--form-header-gap) * 2.5);\n}\n\n.UV {\n  display: flex;\n  justify-content: center;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += "}";
              }
              if (item[2]) {
                content += "}";
              }
              if (item[4]) {
                content += "}";
              }
              return content;
            }).join("");
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/styles/style.css":
      /*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          var result = -1;
          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);
          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };
          return updater;
        }
        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }
            var newLastIdentifiers = modulesToDom(newList, options);
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];
              var _index = getIndexByIdentifier(_identifier);
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }
            memo[target] = styleTarget;
          }
          return memo[target];
        }

        /* istanbul ignore next  */
        function insertBySelector(insert, style) {
          var target = getTarget(insert);
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";
          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }
          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }
          var needLayer = typeof obj.layer !== "undefined";
          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
          }
          css += obj.css;
          if (needLayer) {
            css += "}";
          }
          if (obj.media) {
            css += "}";
          }
          if (obj.supports) {
            css += "}";
          }
          var sourceMap = obj.sourceMap;
          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
          }

          // For old IE
          /* istanbul ignore if  */
          options.styleTagTransform(css, styleElement, options.options);
        }
        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }
          styleElement.parentNode.removeChild(styleElement);
        }

        /* istanbul ignore next  */
        function domAPI(options) {
          if (typeof document === "undefined") {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }
            styleElement.appendChild(document.createTextNode(css));
          }
        }
        module.exports = styleTagTransform;

        /***/
      },

    /***/ "./src/modules/UI.js":
      /*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ events,
          /* harmony export */ getSearchResult: () =>
            /* binding */ getSearchResult,
          /* harmony export */
        });
        /* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./weatherAPI */ "./src/modules/weatherAPI.js"
          );
        /* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../styles/style.css */ "./src/styles/style.css"
          );

        const searchResDiv = document.querySelector(".searchResult");
        const degrees = document.querySelector(".degrees");
        const feelsLike = document.querySelector(".feelsLike");
        const locationAndCondition = document.querySelector(
          ".locationAndCondition"
        );
        const wind = document.querySelector(".wind");
        const UV = document.querySelector(".UV");

        function appendCondition(data, subdata, sub2data, sub3data) {
          const conditionDiv = searchResDiv.querySelector(
            ".locationAndCondition"
          );
          const para = document.createElement("p");
          const span = document.createElement("span");
          span.textContent = `${data[subdata][sub2data][sub3data]}`;
          para.textContent = "Condition: ";
          const div = document.createElement("div");
          [para, span].forEach((element) => div.appendChild(element));
          conditionDiv.appendChild(div);
        }

        function appendElement(
          caption,
          data,
          subdata,
          subsubdata,
          unit,
          targetDiv
        ) {
          const para = document.createElement("p");
          const span = document.createElement("span");
          span.textContent = `${data[subdata][subsubdata]} ${unit}`;
          para.textContent = `${caption}: `;
          const div = document.createElement("div");
          [para, span].forEach((element) => div.appendChild(element));
          targetDiv.appendChild(div);
        }

        function removeElement(parent) {
          while (parent.firstChild) {
            parent.removeChild(parent.lastChild);
          }
        }

        function removeDisplayedElements() {
          [degrees, feelsLike, locationAndCondition, wind, UV].forEach((div) =>
            removeElement(div)
          );
        }

        function getSearchResult() {
          const searchInp = document.getElementById("searchInput");
          const { value } = searchInp;
          searchInp.value = "";
          return value;
        }

        function showSearchResult() {
          searchResDiv.classList.remove("hidden");
        }

        function hideSearchResult() {
          searchResDiv.classList.add("hidden");
        }

        function showError() {
          const searchLabel = document.getElementById("searchLabel");
          searchLabel.textContent = "enter a valid location";
          searchLabel.classList.add("invalid-location");
        }

        function hideError() {
          const searchLabel = document.getElementById("searchLabel");
          searchLabel.textContent = "enter a location";
          searchLabel.classList.remove("invalid-location");
        }

        async function displayElements() {
          try {
            hideError();
            showSearchResult();
            const response = await (0,
            _weatherAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(
              getSearchResult()
            );

            appendElement(
              "City",
              response,
              "location",
              "name",
              "",
              locationAndCondition
            );
            appendElement(
              "Country",
              response,
              "location",
              "country",
              "",
              locationAndCondition
            );
            appendCondition(response, "current", "condition", "text");
            appendElement(
              "Time",
              response,
              "location",
              "localtime",
              "",
              locationAndCondition
            );
            appendElement(
              "Temperature",
              response,
              "current",
              "temp_c",
              "°C",
              degrees
            );
            appendElement(
              "Temperature",
              response,
              "current",
              "temp_f",
              "°F",
              degrees
            );
            appendElement(
              "Feels like",
              response,
              "current",
              "feelslike_c",
              "°C",
              feelsLike
            );
            appendElement(
              "Feels like",
              response,
              "current",
              "feelslike_f",
              "°F",
              feelsLike
            );
            appendElement(
              "Wind speed",
              response,
              "current",
              "wind_kph",
              "Kph",
              wind
            );
            appendElement(
              "Wind direction",
              response,
              "current",
              "wind_dir",
              "",
              wind
            );
            appendElement("UV Index", response, "current", "uv", "", UV);
          } catch (error) {
            hideSearchResult();
            showError();
            [degrees, feelsLike, locationAndCondition, wind, UV].forEach(
              (div) => removeElement(div)
            );
          }
        }

        function formatTime() {
          if (locationAndCondition.lastChild) {
            const element =
              locationAndCondition.lastChild.querySelector("span");
            const textCon = element.textContent.split(" ")[1];
            element.textContent = textCon;
          }
        }

        function handleUVIndex() {
          if (UV.querySelector("span")) {
            const UVspan = UV.querySelector("span");
            const UVIndex = UVspan.textContent;
            switch (true) {
              case UVIndex < 3:
                UVspan.setAttribute("style", "color: var(--uv-index-low);");
                break;
              case UVIndex < 6:
                UVspan.setAttribute("style", "color: var(--uv-index-med);");
                break;
              case UVIndex < 8:
                UVspan.setAttribute("style", "color: var(--uv-index-medHigh);");
                break;
              case UVIndex >= 8:
                UVspan.setAttribute("style", "color: var(--uv-index-high);");
                break;
              default:
            }
          }
        }

        function events() {
          const form = document.querySelector("form");
          form.addEventListener("submit", (e) => {
            e.preventDefault(), handleUserInput();
          });
          const searchBtn = document.getElementById("searchBtn");
          searchBtn.addEventListener("click", handleUserInput);

          async function handleUserInput() {
            removeDisplayedElements();
            await displayElements();
            formatTime();
            handleUVIndex();
          }
        }

        /***/
      },

    /***/ "./src/modules/weatherAPI.js":
      /*!***********************************!*\
  !*** ./src/modules/weatherAPI.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ getWeatherData,
          /* harmony export */
        });
        async function getWeatherData(location) {
          try {
            const APIkey = "242db9d02ad5442f87771054231904";
            const response = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`,
              { mode: "cors" }
            );
            const weatherData = await response.json();

            return weatherData;
          } catch (error) {
            return error;
          }
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");

    (0, _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICMwYzRhNmU7XFxuICAtLW1haW4tY29sb3ItZ3JhZDogIzAzNjlhMTtcXG4gIC0tb2ZmLWNvbG9yOiAjZjBmOWZmO1xcbiAgLS1lcnJvci1jb2xvcjogI2JlMTg1ZDtcXG4gIC0tdXYtaW5kZXgtbG93OiAjYTNlNjM1O1xcbiAgLS11di1pbmRleC1tZWQ6ICNmY2QzNGQ7XFxuICAtLXV2LWluZGV4LW1lZEhpZ2g6ICNmNTllMGI7XFxuICAtLXV2LWluZGV4LWhpZ2g6ICNkYzI2MjY7XFxuICAtLWRpc3BsYXlEaXYtdzogY2xhbXAoMTVyZW0sIDgwdncsIDUwcmVtKTtcXG4gIC0tZGlzcGxheURpdi1wOiBjYWxjKHZhcigtLWRpc3BsYXlEaXYtdykgKiAwLjA1KTtcXG4gIC0tZGlzcGxheURpdi1ib3JkLXJhZDogY2FsYyh2YXIoLS1kaXNwbGF5RGl2LXcpICogMC4wMyk7XFxuICAtLWZvcm0taGVhZGVyLWVsOiBjbGFtcCgycmVtLCAxMHZ3LCA2cmVtKTtcXG4gIC0tZm9ybS1oZWFkZXItZ2FwOiBjYWxjKHZhcigtLWZvcm0taGVhZGVyLWVsKSAqIDAuMSk7XFxuICAtLWZvcm0taW5wdXQtcDogY2FsYyh2YXIoLS1kaXNwbGF5RGl2LXApICogMC4yNSk7XFxuICAtLWZvcm0taW5wdXQtZnM6IGNhbGModmFyKC0tZm9ybS1oZWFkZXItZWwpICogMC40KTtcXG4gIC0tc2VhcmNoUmVzLWZzOiBjYWxjKHZhcigtLWZvcm0taW5wdXQtZnMpICogMC44KTtcXG59XFxuXFxuaHRtbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBib3R0b20sXFxuICAgIHZhcigtLW1haW4tY29sb3IpLFxcbiAgICB2YXIoLS1tYWluLWNvbG9yLWdyYWQpXFxuICApO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5kaXNwbGF5RGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IHZhcigtLWRpc3BsYXlEaXYtdyk7XFxuICBwYWRkaW5nOiB2YXIoLS1kaXNwbGF5RGl2LXApO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGlzcGxheURpdi1ib3JkLXJhZCk7XFxufVxcblxcbi5kaXNwbGF5RGl2IC5mb3JtLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1mb3JtLWhlYWRlci1nYXApO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRpc3BsYXlEaXYgLmZvcm0taGVhZGVyID4gc3ZnIHtcXG4gIGZpbGw6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgd2lkdGg6IHZhcigtLWZvcm0taGVhZGVyLWVsKTtcXG59XFxuXFxuLmRpc3BsYXlEaXYgLmZvcm0taW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1pbnB1dCA+IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tZm9ybS1pbnB1dC1wKTtcXG4gIHBhZGRpbmctaW5saW5lOiBjYWxjKHZhcigtLWZvcm0taW5wdXQtcCkgKiAwLjUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb3JtLWlucHV0LWZzKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1pbnB1dCA+IGlucHV0OmZvY3VzICsgbGFiZWwsXFxuLmRpc3BsYXlEaXYgLmZvcm0taW5wdXQgPiBpbnB1dDp2YWxpZCArIGxhYmVsIHtcXG4gIHNjYWxlOiAwO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1pbnB1dCA+IGxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tZm9ybS1pbnB1dC1mcykgKiAwLjgpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5kaXNwbGF5RGl2IC5mb3JtLWlucHV0ID4gLmludmFsaWQtbG9jYXRpb24ge1xcbiAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kaXNwbGF5RGl2IC5mb3JtLWhlYWRlciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmYtY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiB2YXIoLS1mb3JtLWhlYWRlci1lbCk7XFxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWZvcm0taW5wdXQtcCkgKiAwLjUpO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1oZWFkZXIgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNwbGF5RGl2IC5mb3JtLWhlYWRlciA+IGJ1dHRvbjpob3ZlciA+IHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1vZmYtY29sb3IpO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1oZWFkZXIgPiBidXR0b24gPiBzdmcge1xcbiAgZmlsbDogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5kaXNwbGF5RGl2ID4gLnNlYXJjaFJlc3VsdC5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRpc3BsYXlEaXYgPiAuc2VhcmNoUmVzdWx0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWZvcm0taGVhZGVyLWdhcCkgKiA1KTtcXG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tZGlzcGxheURpdi1wKSAqIDIuNSk7XFxuICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1kaXNwbGF5RGl2LXApICogMC4zKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2VhcmNoUmVzLWZzKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaFJlc3VsdCBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50ZW1wZXJhdHVyZSxcXG4ud2luZEFuZFVWIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2NhdGlvbkFuZENvbmRpdGlvbixcXG4uZGVncmVlcyxcXG4uZmVlbHNMaWtlLFxcbi53aW5kLFxcbi5VViB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tZm9ybS1oZWFkZXItZ2FwKTtcXG59XFxuXFxuLmxvY2F0aW9uQW5kQ29uZGl0aW9uID4gZGl2LFxcbi5kZWdyZWVzID4gZGl2LFxcbi5mZWVsc0xpa2UgPiBkaXYsXFxuLndpbmQgPiBkaXYsXFxuLlVWID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IGNhbGModmFyKC0tZm9ybS1oZWFkZXItZ2FwKSAqIDIuNSk7XFxufVxcblxcbi5VViB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix5Q0FBeUM7RUFDekMsZ0RBQWdEO0VBQ2hELHVEQUF1RDtFQUN2RCx5Q0FBeUM7RUFDekMsb0RBQW9EO0VBQ3BELGdEQUFnRDtFQUNoRCxrREFBa0Q7RUFDbEQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTs7OztFQUlFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsK0NBQStDO0VBQy9DLCtCQUErQjtFQUMvQix3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQywyQ0FBMkM7RUFDM0Msd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsMkNBQTJDO0VBQzNDLCtDQUErQztFQUMvQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiAjMGM0YTZlO1xcbiAgLS1tYWluLWNvbG9yLWdyYWQ6ICMwMzY5YTE7XFxuICAtLW9mZi1jb2xvcjogI2YwZjlmZjtcXG4gIC0tZXJyb3ItY29sb3I6ICNiZTE4NWQ7XFxuICAtLXV2LWluZGV4LWxvdzogI2EzZTYzNTtcXG4gIC0tdXYtaW5kZXgtbWVkOiAjZmNkMzRkO1xcbiAgLS11di1pbmRleC1tZWRIaWdoOiAjZjU5ZTBiO1xcbiAgLS11di1pbmRleC1oaWdoOiAjZGMyNjI2O1xcbiAgLS1kaXNwbGF5RGl2LXc6IGNsYW1wKDE1cmVtLCA4MHZ3LCA1MHJlbSk7XFxuICAtLWRpc3BsYXlEaXYtcDogY2FsYyh2YXIoLS1kaXNwbGF5RGl2LXcpICogMC4wNSk7XFxuICAtLWRpc3BsYXlEaXYtYm9yZC1yYWQ6IGNhbGModmFyKC0tZGlzcGxheURpdi13KSAqIDAuMDMpO1xcbiAgLS1mb3JtLWhlYWRlci1lbDogY2xhbXAoMnJlbSwgMTB2dywgNnJlbSk7XFxuICAtLWZvcm0taGVhZGVyLWdhcDogY2FsYyh2YXIoLS1mb3JtLWhlYWRlci1lbCkgKiAwLjEpO1xcbiAgLS1mb3JtLWlucHV0LXA6IGNhbGModmFyKC0tZGlzcGxheURpdi1wKSAqIDAuMjUpO1xcbiAgLS1mb3JtLWlucHV0LWZzOiBjYWxjKHZhcigtLWZvcm0taGVhZGVyLWVsKSAqIDAuNCk7XFxuICAtLXNlYXJjaFJlcy1mczogY2FsYyh2YXIoLS1mb3JtLWlucHV0LWZzKSAqIDAuOCk7XFxufVxcblxcbmh0bWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tLFxcbiAgICB2YXIoLS1tYWluLWNvbG9yKSxcXG4gICAgdmFyKC0tbWFpbi1jb2xvci1ncmFkKVxcbiAgKTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEsXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uZGlzcGxheURpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiB2YXIoLS1kaXNwbGF5RGl2LXcpO1xcbiAgcGFkZGluZzogdmFyKC0tZGlzcGxheURpdi1wKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWRpc3BsYXlEaXYtYm9yZC1yYWQpO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tZm9ybS1oZWFkZXItZ2FwKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaXNwbGF5RGl2IC5mb3JtLWhlYWRlciA+IHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHdpZHRoOiB2YXIoLS1mb3JtLWhlYWRlci1lbCk7XFxufVxcblxcbi5kaXNwbGF5RGl2IC5mb3JtLWlucHV0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRpc3BsYXlEaXYgLmZvcm0taW5wdXQgPiBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLWZvcm0taW5wdXQtcCk7XFxuICBwYWRkaW5nLWlubGluZTogY2FsYyh2YXIoLS1mb3JtLWlucHV0LXApICogMC41KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9ybS1pbnB1dC1mcyk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmRpc3BsYXlEaXYgLmZvcm0taW5wdXQgPiBpbnB1dDpmb2N1cyArIGxhYmVsLFxcbi5kaXNwbGF5RGl2IC5mb3JtLWlucHV0ID4gaW5wdXQ6dmFsaWQgKyBsYWJlbCB7XFxuICBzY2FsZTogMDtcXG59XFxuXFxuLmRpc3BsYXlEaXYgLmZvcm0taW5wdXQgPiBsYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiBjYWxjKHZhcigtLWZvcm0taW5wdXQtZnMpICogMC44KTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1pbnB1dCA+IC5pbnZhbGlkLWxvY2F0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1oZWFkZXIgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogdmFyKC0tZm9ybS1oZWFkZXItZWwpO1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1mb3JtLWlucHV0LXApICogMC41KTtcXG59XFxuXFxuLmRpc3BsYXlEaXYgLmZvcm0taGVhZGVyID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGlzcGxheURpdiAuZm9ybS1oZWFkZXIgPiBidXR0b246aG92ZXIgPiBzdmcge1xcbiAgZmlsbDogdmFyKC0tb2ZmLWNvbG9yKTtcXG59XFxuXFxuLmRpc3BsYXlEaXYgLmZvcm0taGVhZGVyID4gYnV0dG9uID4gc3ZnIHtcXG4gIGZpbGw6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4uZGlzcGxheURpdiA+IC5zZWFyY2hSZXN1bHQuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5RGl2ID4gLnNlYXJjaFJlc3VsdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogY2FsYyh2YXIoLS1mb3JtLWhlYWRlci1nYXApICogNSk7XFxuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWRpc3BsYXlEaXYtcCkgKiAyLjUpO1xcbiAgcGFkZGluZy1pbmxpbmU6IGNhbGModmFyKC0tZGlzcGxheURpdi1wKSAqIDAuMyk7XFxuICBmb250LXNpemU6IHZhcigtLXNlYXJjaFJlcy1mcyk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hSZXN1bHQgc3BhbiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUsXFxuLndpbmRBbmRVViB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG9jYXRpb25BbmRDb25kaXRpb24sXFxuLmRlZ3JlZXMsXFxuLmZlZWxzTGlrZSxcXG4ud2luZCxcXG4uVVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLWZvcm0taGVhZGVyLWdhcCk7XFxufVxcblxcbi5sb2NhdGlvbkFuZENvbmRpdGlvbiA+IGRpdixcXG4uZGVncmVlcyA+IGRpdixcXG4uZmVlbHNMaWtlID4gZGl2LFxcbi53aW5kID4gZGl2LFxcbi5VViA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiBjYWxjKHZhcigtLWZvcm0taGVhZGVyLWdhcCkgKiAyLjUpO1xcbn1cXG5cXG4uVVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL3dlYXRoZXJBUElcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuY29uc3Qgc2VhcmNoUmVzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hSZXN1bHRcIik7XG5jb25zdCBkZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VcIik7XG5jb25zdCBsb2NhdGlvbkFuZENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25BbmRDb25kaXRpb25cIik7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kXCIpO1xuY29uc3QgVVYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlVWXCIpO1xuXG5mdW5jdGlvbiBhcHBlbmRDb25kaXRpb24oZGF0YSwgc3ViZGF0YSwgc3ViMmRhdGEsIHN1YjNkYXRhKSB7XG4gIGNvbnN0IGNvbmRpdGlvbkRpdiA9IHNlYXJjaFJlc0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uQW5kQ29uZGl0aW9uXCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2RhdGFbc3ViZGF0YV1bc3ViMmRhdGFdW3N1YjNkYXRhXX1gO1xuICBwYXJhLnRleHRDb250ZW50ID0gXCJDb25kaXRpb246IFwiO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBbcGFyYSwgc3Bhbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4gZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpKTtcbiAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoY2FwdGlvbiwgZGF0YSwgc3ViZGF0YSwgc3Vic3ViZGF0YSwgdW5pdCwgdGFyZ2V0RGl2KSB7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYCR7ZGF0YVtzdWJkYXRhXVtzdWJzdWJkYXRhXX0gJHt1bml0fWA7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBgJHtjYXB0aW9ufTogYDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgW3BhcmEsIHNwYW5dLmZvckVhY2goKGVsZW1lbnQpID0+IGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG4gIHRhcmdldERpdi5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGlzcGxheWVkRWxlbWVudHMoKSB7XG4gIFtkZWdyZWVzLCBmZWVsc0xpa2UsIGxvY2F0aW9uQW5kQ29uZGl0aW9uLCB3aW5kLCBVVl0uZm9yRWFjaCgoZGl2KSA9PlxuICAgIHJlbW92ZUVsZW1lbnQoZGl2KVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUmVzdWx0KCkge1xuICBjb25zdCBzZWFyY2hJbnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaElucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBzZWFyY2hJbnA7XG4gIHNlYXJjaElucC52YWx1ZSA9IFwiXCI7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2hvd1NlYXJjaFJlc3VsdCgpIHtcbiAgc2VhcmNoUmVzRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVTZWFyY2hSZXN1bHQoKSB7XG4gIHNlYXJjaFJlc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IoKSB7XG4gIGNvbnN0IHNlYXJjaExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hMYWJlbFwiKTtcbiAgc2VhcmNoTGFiZWwudGV4dENvbnRlbnQgPSBcImVudGVyIGEgdmFsaWQgbG9jYXRpb25cIjtcbiAgc2VhcmNoTGFiZWwuY2xhc3NMaXN0LmFkZChcImludmFsaWQtbG9jYXRpb25cIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVFcnJvcigpIHtcbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaExhYmVsXCIpO1xuICBzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9IFwiZW50ZXIgYSBsb2NhdGlvblwiO1xuICBzZWFyY2hMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZC1sb2NhdGlvblwiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUVsZW1lbnRzKCkge1xuICB0cnkge1xuICAgIGhpZGVFcnJvcigpO1xuICAgIHNob3dTZWFyY2hSZXN1bHQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGdldFNlYXJjaFJlc3VsdCgpKTtcblxuICAgIGFwcGVuZEVsZW1lbnQoXG4gICAgICBcIkNpdHlcIixcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgXCJsb2NhdGlvblwiLFxuICAgICAgXCJuYW1lXCIsXG4gICAgICBcIlwiLFxuICAgICAgbG9jYXRpb25BbmRDb25kaXRpb25cbiAgICApO1xuICAgIGFwcGVuZEVsZW1lbnQoXG4gICAgICBcIkNvdW50cnlcIixcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgXCJsb2NhdGlvblwiLFxuICAgICAgXCJjb3VudHJ5XCIsXG4gICAgICBcIlwiLFxuICAgICAgbG9jYXRpb25BbmRDb25kaXRpb25cbiAgICApO1xuICAgIGFwcGVuZENvbmRpdGlvbihyZXNwb25zZSwgXCJjdXJyZW50XCIsIFwiY29uZGl0aW9uXCIsIFwidGV4dFwiKTtcbiAgICBhcHBlbmRFbGVtZW50KFxuICAgICAgXCJUaW1lXCIsXG4gICAgICByZXNwb25zZSxcbiAgICAgIFwibG9jYXRpb25cIixcbiAgICAgIFwibG9jYWx0aW1lXCIsXG4gICAgICBcIlwiLFxuICAgICAgbG9jYXRpb25BbmRDb25kaXRpb25cbiAgICApO1xuICAgIGFwcGVuZEVsZW1lbnQoXCJUZW1wZXJhdHVyZVwiLCByZXNwb25zZSwgXCJjdXJyZW50XCIsIFwidGVtcF9jXCIsIFwiwrBDXCIsIGRlZ3JlZXMpO1xuICAgIGFwcGVuZEVsZW1lbnQoXCJUZW1wZXJhdHVyZVwiLCByZXNwb25zZSwgXCJjdXJyZW50XCIsIFwidGVtcF9mXCIsIFwiwrBGXCIsIGRlZ3JlZXMpO1xuICAgIGFwcGVuZEVsZW1lbnQoXG4gICAgICBcIkZlZWxzIGxpa2VcIixcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgXCJjdXJyZW50XCIsXG4gICAgICBcImZlZWxzbGlrZV9jXCIsXG4gICAgICBcIsKwQ1wiLFxuICAgICAgZmVlbHNMaWtlXG4gICAgKTtcbiAgICBhcHBlbmRFbGVtZW50KFxuICAgICAgXCJGZWVscyBsaWtlXCIsXG4gICAgICByZXNwb25zZSxcbiAgICAgIFwiY3VycmVudFwiLFxuICAgICAgXCJmZWVsc2xpa2VfZlwiLFxuICAgICAgXCLCsEZcIixcbiAgICAgIGZlZWxzTGlrZVxuICAgICk7XG4gICAgYXBwZW5kRWxlbWVudChcIldpbmQgc3BlZWRcIiwgcmVzcG9uc2UsIFwiY3VycmVudFwiLCBcIndpbmRfa3BoXCIsIFwiS3BoXCIsIHdpbmQpO1xuICAgIGFwcGVuZEVsZW1lbnQoXCJXaW5kIGRpcmVjdGlvblwiLCByZXNwb25zZSwgXCJjdXJyZW50XCIsIFwid2luZF9kaXJcIiwgXCJcIiwgd2luZCk7XG4gICAgYXBwZW5kRWxlbWVudChcIlVWIEluZGV4XCIsIHJlc3BvbnNlLCBcImN1cnJlbnRcIiwgXCJ1dlwiLCBcIlwiLCBVVik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaGlkZVNlYXJjaFJlc3VsdCgpO1xuICAgIHNob3dFcnJvcigpO1xuICAgIFtkZWdyZWVzLCBmZWVsc0xpa2UsIGxvY2F0aW9uQW5kQ29uZGl0aW9uLCB3aW5kLCBVVl0uZm9yRWFjaCgoZGl2KSA9PlxuICAgICAgcmVtb3ZlRWxlbWVudChkaXYpXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKCkge1xuICBpZiAobG9jYXRpb25BbmRDb25kaXRpb24ubGFzdENoaWxkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGxvY2F0aW9uQW5kQ29uZGl0aW9uLmxhc3RDaGlsZC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCB0ZXh0Q29uID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMV07XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb247XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVVZJbmRleCgpIHtcbiAgaWYgKFVWLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpKSB7XG4gICAgY29uc3QgVVZzcGFuID0gVVYucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgVVZJbmRleCA9IFVWc3Bhbi50ZXh0Q29udGVudDtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgVVZJbmRleCA8IDM6XG4gICAgICAgIFVWc3Bhbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImNvbG9yOiB2YXIoLS11di1pbmRleC1sb3cpO1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVWSW5kZXggPCA2OlxuICAgICAgICBVVnNwYW4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogdmFyKC0tdXYtaW5kZXgtbWVkKTtcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVVkluZGV4IDwgODpcbiAgICAgICAgVVZzcGFuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6IHZhcigtLXV2LWluZGV4LW1lZEhpZ2gpO1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVWSW5kZXggPj0gODpcbiAgICAgICAgVVZzcGFuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6IHZhcigtLXV2LWluZGV4LWhpZ2gpO1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHMoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpLCBoYW5kbGVVc2VySW5wdXQoKTtcbiAgfSk7XG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVzZXJJbnB1dCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KCkge1xuICAgIHJlbW92ZURpc3BsYXllZEVsZW1lbnRzKCk7XG4gICAgYXdhaXQgZGlzcGxheUVsZW1lbnRzKCk7XG4gICAgZm9ybWF0VGltZSgpO1xuICAgIGhhbmRsZVVWSW5kZXgoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBBUElrZXkgPSBcIjI0MmRiOWQwMmFkNTQ0MmY4Nzc3MTA1NDIzMTkwNFwiO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke0FQSWtleX0mcT0ke2xvY2F0aW9ufWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cbmV2ZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
