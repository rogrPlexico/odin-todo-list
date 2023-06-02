"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
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
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
      layer: item[5]
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
        references: 1
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
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
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
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
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
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
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
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stprint: () => (/* binding */ stprint)
/* harmony export */ });
/* harmony import */ var _listHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listHandler */ "./src/listHandler.js");
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskHandler */ "./src/taskHandler.js");
/* harmony import */ var _webStorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webStorageService */ "./src/webStorageService.js");
/* harmony import */ var _rootListWebStorageInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootListWebStorageInterface */ "./src/rootListWebStorageInterface.js");
/* harmony import */ var _runtimeToWebStorageInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runtimeToWebStorageInterface */ "./src/runtimeToWebStorageInterface.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









// ****STATIC PRINT FUNCTION FOR DEBUGGING (prints objects statically instead of passing by reference for debugging purposes)******to delete*****
function stprint (x) {
    let strung = JSON.stringify(x);
    console.log(JSON.parse(strung));   
}
///////////////

_listHandler__WEBPACK_IMPORTED_MODULE_0__.createRootList();

// example add tasks to root list 
(0,_runtimeToWebStorageInterface__WEBPACK_IMPORTED_MODULE_4__.addTask)('Do dishes', undefined, undefined, 2, undefined);

(0,_runtimeToWebStorageInterface__WEBPACK_IMPORTED_MODULE_4__.addTask)('ducks');

(0,_runtimeToWebStorageInterface__WEBPACK_IMPORTED_MODULE_4__.addTask)('what');

// example get task
let task0 = _taskHandler__WEBPACK_IMPORTED_MODULE_1__.getTask(0);
task0.setProject('Tortles');
stprint(task0);

let task2 = _taskHandler__WEBPACK_IMPORTED_MODULE_1__.getTask(2);
task2.setTaskPriority(1);

// storageService.storeRootList(rootList);

let retrievedList = _rootListWebStorageInterface__WEBPACK_IMPORTED_MODULE_3__.getStoredRootList();

// listHandler.updateRootList(retrievedList);

let gotRoot = _listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList();




gotRoot[0].setProject('web api done not fucked it up');
let x = _listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList();

_taskHandler__WEBPACK_IMPORTED_MODULE_1__.removeTask(1);

 console.log(_listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList());

_listHandler__WEBPACK_IMPORTED_MODULE_0__.createList('otherStuff')
console.log(_listHandler__WEBPACK_IMPORTED_MODULE_0__.getListArray());

let list0 = _listHandler__WEBPACK_IMPORTED_MODULE_0__.getList(0);
console.log(Object.getOwnPropertyDescriptor(list0, 'properties'));
console.log(Object.getOwnPropertyDescriptor(list0, 'setListName'));


// storageService.retrieveRootListFromStorage();






/***/ }),

/***/ "./src/listHandler.js":
/*!****************************!*\
  !*** ./src/listHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createRootList: () => (/* binding */ createRootList),
/* harmony export */   getList: () => (/* binding */ getList),
/* harmony export */   getListArray: () => (/* binding */ getListArray),
/* harmony export */   getRootList: () => (/* binding */ getRootList),
/* harmony export */   updateRootList: () => (/* binding */ updateRootList)
/* harmony export */ });
let rootList;
let listIdIterator = 0;
let listArray = [];
let rootListCreatedBool = false;

function createList(listName) {

    // conditional statement prevents creation of more than one list with listName 'rootList'
    if (rootListCreatedBool == true && listName == 'rootList') {
        console.error('rootList is a reserved name');
    } else {
        let list = Object.create(createList.proto);
  
        list.properties = {};
        // make the nested 'properties' object non-enumerable
        Object.defineProperty(list, 'properties', {
            enumerable: false,
        }),
        list.properties._listName = listName;
        list.properties._listId = listIdIterator++;
    
        // if not root list, push to array 
        if (rootListCreatedBool == true) {
            listArray.push(list);
        // if root list, override setName method to prevent name modification, make the setName method non-enumerable, flip rootListCreated to true, and store list in rootList variable (rootList is not stored in the array--probably poor design, doing this to practice different techniques for storing objects)
        } else {
            list.setListName = () => console.error('Cannot change the name of rootList');
            Object.defineProperty(list, 'setListName', {
                enumerable: false,
            }),
            rootListCreatedBool = true;
            return list;
        } 
    }
}

createList.proto = {
    getList: function() {
        return this;
    },
    getListName: function() {
        return this._listName;
    },
    getListID: function() {
        return this._listId;
    },
    setListName: function(newName) {
        this.properties._listName = newName;
    },
};

function createRootList() {
    rootList = createList('rootList');
}

function getRootList()  {
    return rootList;
}

function getList(listId) {
    if (listId == 0) return rootList;
    return listArray.find((item) => item.properties._listId == listId);
}

function updateRootList(updatedRootList) {
    rootList = updatedRootList;
}

function getListArray() {
    return listArray;
}











/***/ }),

/***/ "./src/rootListWebStorageInterface.js":
/*!********************************************!*\
  !*** ./src/rootListWebStorageInterface.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStoredRootList: () => (/* binding */ getStoredRootList),
/* harmony export */   storeRootList: () => (/* binding */ storeRootList)
/* harmony export */ });
/* harmony import */ var _listHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listHandler */ "./src/listHandler.js");
/* harmony import */ var _webStorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webStorageService */ "./src/webStorageService.js");



function storeRootList() {
    let rootList = (0,_listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList)();
    _webStorageService__WEBPACK_IMPORTED_MODULE_1__.storeListToWeb(rootList);
}

function getStoredRootList() {_webStorageService__WEBPACK_IMPORTED_MODULE_1__.getListFromWebStore('rootList');
}

/***/ }),

/***/ "./src/runtimeToWebStorageInterface.js":
/*!*********************************************!*\
  !*** ./src/runtimeToWebStorageInterface.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskHandler */ "./src/taskHandler.js");
/* harmony import */ var _webStorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webStorageService */ "./src/webStorageService.js");
/* harmony import */ var _rootListWebStorageInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootListWebStorageInterface */ "./src/rootListWebStorageInterface.js");




function addTask(taskTitle, taskDescription, taskDueDate, taskPriortity, project) {
    let task = (0,_taskHandler__WEBPACK_IMPORTED_MODULE_0__.addTaskToRuntime)(taskTitle, taskDescription, taskDueDate, taskPriortity, project);
    _rootListWebStorageInterface__WEBPACK_IMPORTED_MODULE_2__.storeRootList();
    return task;
}

/***/ }),

/***/ "./src/taskHandler.js":
/*!****************************!*\
  !*** ./src/taskHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToRuntime: () => (/* binding */ addTaskToRuntime),
/* harmony export */   getCreateTaskProto: () => (/* binding */ getCreateTaskProto),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _listHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listHandler */ "./src/listHandler.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



let taskIDIterator = 0;

// creates task and returns it. Does not add task to rootList
function createTask(taskTitle, taskDescription, taskDueDate, taskPriortity, project) {
    // let rootList = getRootList();
    // let rootListPrototype = Object.getPrototyprootList);
    let task = Object.create(createTask.proto);
    
    // _underscored properties should not be accessed directly
    task._taskID = taskIDIterator++;
    task._taskTitle = taskTitle;  
    task._taskDescription = taskDescription;
    task._taskDueDate = taskDueDate;
    task._taskPriority = taskPriortity;
    task._project = project;

    return task;
}

createTask.proto = {
    // accessor functions allow for ability to add logic later (eg, processing, validation, etc)
    getTask: function(taskID) {
        let rootList = (0,_listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList)();
        return rootList[taskID];
    },
    getTaskTitle: function() {  
        return this._taskTitle;
    },
    getTaskDescription: function() {
        return this._taskDescription;
    },
    getTaskDueDate: function() {
        return this._taskDueDate;
    },
    getTaskPriority: function() {
        return this._taskPriority;
    },
    getProject: function() {
        return this._project;
    },
    getTaskID: function() {
        return this._taskID;
    },

    setTaskTitle: function(newValue) {  
        this._taskTitle = newValue;
    },
    setTaskDescription: function(newValue) {
        this._taskDescription = newValue;
    },
    setTaskDueDate: function(newValue) {
        this._taskDueDate = newValue;
    },
    setTaskPriority: function(newValue) {
        this._taskPriority = newValue;
    },
    setProject: function(newValue) {
        this._project = newValue;
    },
    setTaskID: function(newValue) {
        this._taskID = newValue;
    }
};

function getCreateTaskProto() {
    return createTask.proto;
}

// add task to rootList
function addTaskToRuntime(taskTitle, taskDescription = null, taskDueDate = null, taskPriortity = 3, project = 'default') {
    let newTask = createTask(taskTitle, taskDescription, taskDueDate, taskPriortity, project);
    let taskID = newTask._taskID;
    // object is stored under taskID as key/name
    let rootList = (0,_listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList)();
    rootList[taskID] = newTask;
    return newTask;
}

function getTask(taskID) {
    return (0,_listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList)()[taskID];
}

function removeTask(taskID) {
    let rootList = (0,_listHandler__WEBPACK_IMPORTED_MODULE_0__.getRootList)();
    delete rootList[taskID];
}




/***/ }),

/***/ "./src/webStorageService.js":
/*!**********************************!*\
  !*** ./src/webStorageService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getListFromWebStore: () => (/* binding */ getListFromWebStore),
/* harmony export */   removeListFromStorage: () => (/* binding */ removeListFromStorage),
/* harmony export */   storeListToWeb: () => (/* binding */ storeListToWeb)
/* harmony export */ });
/* harmony import */ var _listHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listHandler */ "./src/listHandler.js");
/* harmony import */ var _taskHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskHandler */ "./src/taskHandler.js");
// this module handles storage of list objects in browser Web Storage API




function storeListToWeb(listObj) {
    let strungObject = JSON.stringify(listObj);
    localStorage.setItem('rootList', strungObject);
}

function getListFromWebStore(key) {
    let strungList = localStorage.getItem(key);
    let parsedList = JSON.parse(strungList);
    
    // add back prototype for tasks (excepting the nested 'properties' object)
    for (let task in parsedList) {
        if (task !== 'properties') {
            let taskObj = parsedList[task];
            Object.setPrototypeOf(taskObj, (0,_taskHandler__WEBPACK_IMPORTED_MODULE_1__.getCreateTaskProto)());
        }
    }

    // add back prototype for list
    let rootList = Object.create(_listHandler__WEBPACK_IMPORTED_MODULE_0__.createList.proto);
    Object.assign(rootList, parsedList);

    return rootList;
}

function removeListFromStorage(listKey) {
    localStorage.removeItem(listKey);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1A7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLHlEQUFXO0FBQ3RCO0FBQ0E7QUFDTztBQUNQLG1CQUFtQix5REFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQzJDO0FBQ1E7QUFDbkQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnRUFBa0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMERBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9yb290TGlzdFdlYlN0b3JhZ2VJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcnVudGltZVRvV2ViU3RvcmFnZUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy93ZWJTdG9yYWdlU2VydmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBsaXN0SGFuZGxlciBmcm9tIFwiLi9saXN0SGFuZGxlclwiO1xyXG5pbXBvcnQgKiBhcyB0YXNrSGFuZGxlciBmcm9tICBcIi4vdGFza0hhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgd2ViU3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4vd2ViU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgcm9vdExpc3RXZWJTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9yb290TGlzdFdlYlN0b3JhZ2VJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gXCIuL3J1bnRpbWVUb1dlYlN0b3JhZ2VJbnRlcmZhY2VcIjtcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcbi8vICoqKipTVEFUSUMgUFJJTlQgRlVOQ1RJT04gRk9SIERFQlVHR0lORyAocHJpbnRzIG9iamVjdHMgc3RhdGljYWxseSBpbnN0ZWFkIG9mIHBhc3NpbmcgYnkgcmVmZXJlbmNlIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMpKioqKioqdG8gZGVsZXRlKioqKipcclxuZXhwb3J0IGZ1bmN0aW9uIHN0cHJpbnQgKHgpIHtcclxuICAgIGxldCBzdHJ1bmcgPSBKU09OLnN0cmluZ2lmeSh4KTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uoc3RydW5nKSk7ICAgXHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5saXN0SGFuZGxlci5jcmVhdGVSb290TGlzdCgpO1xyXG5cclxuLy8gZXhhbXBsZSBhZGQgdGFza3MgdG8gcm9vdCBsaXN0IFxyXG5hZGRUYXNrKCdEbyBkaXNoZXMnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgMiwgdW5kZWZpbmVkKTtcclxuXHJcbmFkZFRhc2soJ2R1Y2tzJyk7XHJcblxyXG5hZGRUYXNrKCd3aGF0Jyk7XHJcblxyXG4vLyBleGFtcGxlIGdldCB0YXNrXHJcbmxldCB0YXNrMCA9IHRhc2tIYW5kbGVyLmdldFRhc2soMCk7XHJcbnRhc2swLnNldFByb2plY3QoJ1RvcnRsZXMnKTtcclxuc3RwcmludCh0YXNrMCk7XHJcblxyXG5sZXQgdGFzazIgPSB0YXNrSGFuZGxlci5nZXRUYXNrKDIpO1xyXG50YXNrMi5zZXRUYXNrUHJpb3JpdHkoMSk7XHJcblxyXG4vLyBzdG9yYWdlU2VydmljZS5zdG9yZVJvb3RMaXN0KHJvb3RMaXN0KTtcclxuXHJcbmxldCByZXRyaWV2ZWRMaXN0ID0gcm9vdExpc3RXZWJTdG9yYWdlU2VydmljZS5nZXRTdG9yZWRSb290TGlzdCgpO1xyXG5cclxuLy8gbGlzdEhhbmRsZXIudXBkYXRlUm9vdExpc3QocmV0cmlldmVkTGlzdCk7XHJcblxyXG5sZXQgZ290Um9vdCA9IGxpc3RIYW5kbGVyLmdldFJvb3RMaXN0KCk7XHJcblxyXG5cclxuXHJcblxyXG5nb3RSb290WzBdLnNldFByb2plY3QoJ3dlYiBhcGkgZG9uZSBub3QgZnVja2VkIGl0IHVwJyk7XHJcbmxldCB4ID0gbGlzdEhhbmRsZXIuZ2V0Um9vdExpc3QoKTtcclxuXHJcbnRhc2tIYW5kbGVyLnJlbW92ZVRhc2soMSk7XHJcblxyXG4gY29uc29sZS5sb2cobGlzdEhhbmRsZXIuZ2V0Um9vdExpc3QoKSk7XHJcblxyXG5saXN0SGFuZGxlci5jcmVhdGVMaXN0KCdvdGhlclN0dWZmJylcclxuY29uc29sZS5sb2cobGlzdEhhbmRsZXIuZ2V0TGlzdEFycmF5KCkpO1xyXG5cclxubGV0IGxpc3QwID0gbGlzdEhhbmRsZXIuZ2V0TGlzdCgwKTtcclxuY29uc29sZS5sb2coT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihsaXN0MCwgJ3Byb3BlcnRpZXMnKSk7XHJcbmNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobGlzdDAsICdzZXRMaXN0TmFtZScpKTtcclxuXHJcblxyXG4vLyBzdG9yYWdlU2VydmljZS5yZXRyaWV2ZVJvb3RMaXN0RnJvbVN0b3JhZ2UoKTtcclxuXHJcblxyXG5cclxuXHJcbiIsImxldCByb290TGlzdDtcclxubGV0IGxpc3RJREl0ZXJhdG9yID0gMDtcclxubGV0IGxpc3RBcnJheSA9IFtdO1xyXG5sZXQgcm9vdExpc3RDcmVhdGVkQm9vbCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdE5hbWUpIHtcclxuXHJcbiAgICAvLyBjb25kaXRpb25hbCBzdGF0ZW1lbnQgcHJldmVudHMgY3JlYXRpb24gb2YgbW9yZSB0aGFuIG9uZSBsaXN0IHdpdGggbGlzdE5hbWUgJ3Jvb3RMaXN0J1xyXG4gICAgaWYgKHJvb3RMaXN0Q3JlYXRlZEJvb2wgPT0gdHJ1ZSAmJiBsaXN0TmFtZSA9PSAncm9vdExpc3QnKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncm9vdExpc3QgaXMgYSByZXNlcnZlZCBuYW1lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBsaXN0ID0gT2JqZWN0LmNyZWF0ZShjcmVhdGVMaXN0LnByb3RvKTtcclxuICBcclxuICAgICAgICBsaXN0LnByb3BlcnRpZXMgPSB7fTtcclxuICAgICAgICAvLyBtYWtlIHRoZSBuZXN0ZWQgJ3Byb3BlcnRpZXMnIG9iamVjdCBub24tZW51bWVyYWJsZVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsaXN0LCAncHJvcGVydGllcycsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbGlzdC5wcm9wZXJ0aWVzLl9saXN0TmFtZSA9IGxpc3ROYW1lO1xyXG4gICAgICAgIGxpc3QucHJvcGVydGllcy5fbGlzdElEID0gbGlzdElESXRlcmF0b3IrKztcclxuICAgIFxyXG4gICAgICAgIC8vIGlmIG5vdCByb290IGxpc3QsIHB1c2ggdG8gYXJyYXkgXHJcbiAgICAgICAgaWYgKHJvb3RMaXN0Q3JlYXRlZEJvb2wgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsaXN0QXJyYXkucHVzaChsaXN0KTtcclxuICAgICAgICAvLyBpZiByb290IGxpc3QsIG92ZXJyaWRlIHNldE5hbWUgbWV0aG9kIHRvIHByZXZlbnQgbmFtZSBtb2RpZmljYXRpb24sIG1ha2UgdGhlIHNldE5hbWUgbWV0aG9kIG5vbi1lbnVtZXJhYmxlLCBmbGlwIHJvb3RMaXN0Q3JlYXRlZCB0byB0cnVlLCBhbmQgc3RvcmUgbGlzdCBpbiByb290TGlzdCB2YXJpYWJsZSAocm9vdExpc3QgaXMgbm90IHN0b3JlZCBpbiB0aGUgYXJyYXktLXByb2JhYmx5IHBvb3IgZGVzaWduLCBkb2luZyB0aGlzIHRvIHByYWN0aWNlIGRpZmZlcmVudCB0ZWNobmlxdWVzIGZvciBzdG9yaW5nIG9iamVjdHMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdC5zZXRMaXN0TmFtZSA9ICgpID0+IGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBjaGFuZ2UgdGhlIG5hbWUgb2Ygcm9vdExpc3QnKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxpc3QsICdzZXRMaXN0TmFtZScsIHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcm9vdExpc3RDcmVhdGVkQm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbn1cclxuXHJcbmNyZWF0ZUxpc3QucHJvdG8gPSB7XHJcbiAgICBnZXRMaXN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBnZXRMaXN0TmFtZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3ROYW1lO1xyXG4gICAgfSxcclxuICAgIGdldExpc3RJRDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RJRDtcclxuICAgIH0sXHJcbiAgICBzZXRMaXN0TmFtZTogZnVuY3Rpb24obmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcy5fbGlzdE5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb290TGlzdCgpIHtcclxuICAgIHJvb3RMaXN0ID0gY3JlYXRlTGlzdCgncm9vdExpc3QnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RMaXN0KCkgIHtcclxuICAgIHJldHVybiByb290TGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3QobGlzdElEKSB7XHJcbiAgICBpZiAobGlzdElEID09IDApIHJldHVybiByb290TGlzdDtcclxuICAgIHJldHVybiBsaXN0QXJyYXkuZmluZCgoaXRlbSkgPT4gaXRlbS5wcm9wZXJ0aWVzLl9saXN0SUQgPT0gbGlzdElEKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvb3RMaXN0KHVwZGF0ZWRSb290TGlzdCkge1xyXG4gICAgcm9vdExpc3QgPSB1cGRhdGVkUm9vdExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0QXJyYXkoKSB7XHJcbiAgICByZXR1cm4gbGlzdEFycmF5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdldFJvb3RMaXN0IH0gZnJvbSBcIi4vbGlzdEhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgd2ViU3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4vd2ViU3RvcmFnZVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVJvb3RMaXN0KCkge1xyXG4gICAgbGV0IHJvb3RMaXN0ID0gZ2V0Um9vdExpc3QoKTtcclxuICAgIHdlYlN0b3JhZ2VTZXJ2aWNlLnN0b3JlTGlzdFRvV2ViKHJvb3RMaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlZFJvb3RMaXN0KCkge3dlYlN0b3JhZ2VTZXJ2aWNlLmdldExpc3RGcm9tV2ViU3RvcmUoJ3Jvb3RMaXN0Jyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRUYXNrVG9SdW50aW1lIH0gZnJvbSBcIi4vdGFza0hhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgd2ViU3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4vd2ViU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgcm9vdExpc3RXZWJTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9yb290TGlzdFdlYlN0b3JhZ2VJbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9ydGl0eSwgcHJvamVjdCkge1xyXG4gICAgbGV0IHRhc2sgPSBhZGRUYXNrVG9SdW50aW1lKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9ydGl0eSwgcHJvamVjdCk7XHJcbiAgICByb290TGlzdFdlYlN0b3JhZ2VTZXJ2aWNlLnN0b3JlUm9vdExpc3QoKTtcclxuICAgIHJldHVybiB0YXNrO1xyXG59IiwiaW1wb3J0IHsgZ2V0Um9vdExpc3QgfSBmcm9tIFwiLi9saXN0SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBzdHByaW50IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmxldCB0YXNrSURJdGVyYXRvciA9IDA7XHJcblxyXG4vLyBjcmVhdGVzIHRhc2sgYW5kIHJldHVybnMgaXQuIERvZXMgbm90IGFkZCB0YXNrIHRvIHJvb3RMaXN0XHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3J0aXR5LCBwcm9qZWN0KSB7XHJcbiAgICAvLyBsZXQgcm9vdExpc3QgPSBnZXRSb290TGlzdCgpO1xyXG4gICAgLy8gbGV0IHJvb3RMaXN0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwcm9vdExpc3QpO1xyXG4gICAgbGV0IHRhc2sgPSBPYmplY3QuY3JlYXRlKGNyZWF0ZVRhc2sucHJvdG8pO1xyXG4gICAgXHJcbiAgICAvLyBfdW5kZXJzY29yZWQgcHJvcGVydGllcyBzaG91bGQgbm90IGJlIGFjY2Vzc2VkIGRpcmVjdGx5XHJcbiAgICB0YXNrLl90YXNrSUQgPSB0YXNrSURJdGVyYXRvcisrO1xyXG4gICAgdGFzay5fdGFza1RpdGxlID0gdGFza1RpdGxlOyAgXHJcbiAgICB0YXNrLl90YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb247XHJcbiAgICB0YXNrLl90YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlO1xyXG4gICAgdGFzay5fdGFza1ByaW9yaXR5ID0gdGFza1ByaW9ydGl0eTtcclxuICAgIHRhc2suX3Byb2plY3QgPSBwcm9qZWN0O1xyXG5cclxuICAgIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5jcmVhdGVUYXNrLnByb3RvID0ge1xyXG4gICAgLy8gYWNjZXNzb3IgZnVuY3Rpb25zIGFsbG93IGZvciBhYmlsaXR5IHRvIGFkZCBsb2dpYyBsYXRlciAoZWcsIHByb2Nlc3NpbmcsIHZhbGlkYXRpb24sIGV0YylcclxuICAgIGdldFRhc2s6IGZ1bmN0aW9uKHRhc2tJRCkge1xyXG4gICAgICAgIGxldCByb290TGlzdCA9IGdldFJvb3RMaXN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3RMaXN0W3Rhc2tJRF07XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFza1RpdGxlOiBmdW5jdGlvbigpIHsgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrVGl0bGU7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFza0Rlc2NyaXB0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0Rlc2NyaXB0aW9uO1xyXG4gICAgfSxcclxuICAgIGdldFRhc2tEdWVEYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0R1ZURhdGU7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFza1ByaW9yaXR5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFza1ByaW9yaXR5O1xyXG4gICAgfSxcclxuICAgIGdldFByb2plY3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xyXG4gICAgfSxcclxuICAgIGdldFRhc2tJRDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rhc2tJRDtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0VGFza1RpdGxlOiBmdW5jdGlvbihuZXdWYWx1ZSkgeyAgXHJcbiAgICAgICAgdGhpcy5fdGFza1RpdGxlID0gbmV3VmFsdWU7XHJcbiAgICB9LFxyXG4gICAgc2V0VGFza0Rlc2NyaXB0aW9uOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Rhc2tEZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xyXG4gICAgfSxcclxuICAgIHNldFRhc2tEdWVEYXRlOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Rhc2tEdWVEYXRlID0gbmV3VmFsdWU7XHJcbiAgICB9LFxyXG4gICAgc2V0VGFza1ByaW9yaXR5OiBmdW5jdGlvbihuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Rhc2tQcmlvcml0eSA9IG5ld1ZhbHVlO1xyXG4gICAgfSxcclxuICAgIHNldFByb2plY3Q6IGZ1bmN0aW9uKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IG5ld1ZhbHVlO1xyXG4gICAgfSxcclxuICAgIHNldFRhc2tJRDogZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgICB0aGlzLl90YXNrSUQgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDcmVhdGVUYXNrUHJvdG8oKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlVGFzay5wcm90bztcclxufVxyXG5cclxuLy8gYWRkIHRhc2sgdG8gcm9vdExpc3RcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb1J1bnRpbWUodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24gPSBudWxsLCB0YXNrRHVlRGF0ZSA9IG51bGwsIHRhc2tQcmlvcnRpdHkgPSAzLCBwcm9qZWN0ID0gJ2RlZmF1bHQnKSB7XHJcbiAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3J0aXR5LCBwcm9qZWN0KTtcclxuICAgIGxldCB0YXNrSUQgPSBuZXdUYXNrLl90YXNrSUQ7XHJcbiAgICAvLyBvYmplY3QgaXMgc3RvcmVkIHVuZGVyIHRhc2tJRCBhcyBrZXkvbmFtZVxyXG4gICAgbGV0IHJvb3RMaXN0ID0gZ2V0Um9vdExpc3QoKTtcclxuICAgIHJvb3RMaXN0W3Rhc2tJRF0gPSBuZXdUYXNrO1xyXG4gICAgcmV0dXJuIG5ld1Rhc2s7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrKHRhc2tJRCkge1xyXG4gICAgcmV0dXJuIGdldFJvb3RMaXN0KClbdGFza0lEXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza0lEKSB7XHJcbiAgICBsZXQgcm9vdExpc3QgPSBnZXRSb290TGlzdCgpO1xyXG4gICAgZGVsZXRlIHJvb3RMaXN0W3Rhc2tJRF07XHJcbn1cclxuXHJcblxyXG4iLCIvLyB0aGlzIG1vZHVsZSBoYW5kbGVzIHN0b3JhZ2Ugb2YgbGlzdCBvYmplY3RzIGluIGJyb3dzZXIgV2ViIFN0b3JhZ2UgQVBJXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2V0Q3JlYXRlVGFza1Byb3RvIH0gZnJvbSBcIi4vdGFza0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yZUxpc3RUb1dlYihsaXN0T2JqKSB7XHJcbiAgICBsZXQgc3RydW5nT2JqZWN0ID0gSlNPTi5zdHJpbmdpZnkobGlzdE9iaik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9vdExpc3QnLCBzdHJ1bmdPYmplY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdEZyb21XZWJTdG9yZShrZXkpIHtcclxuICAgIGxldCBzdHJ1bmdMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIGxldCBwYXJzZWRMaXN0ID0gSlNPTi5wYXJzZShzdHJ1bmdMaXN0KTtcclxuICAgIFxyXG4gICAgLy8gYWRkIGJhY2sgcHJvdG90eXBlIGZvciB0YXNrcyAoZXhjZXB0aW5nIHRoZSBuZXN0ZWQgJ3Byb3BlcnRpZXMnIG9iamVjdClcclxuICAgIGZvciAobGV0IHRhc2sgaW4gcGFyc2VkTGlzdCkge1xyXG4gICAgICAgIGlmICh0YXNrICE9PSAncHJvcGVydGllcycpIHtcclxuICAgICAgICAgICAgbGV0IHRhc2tPYmogPSBwYXJzZWRMaXN0W3Rhc2tdO1xyXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFza09iaiwgZ2V0Q3JlYXRlVGFza1Byb3RvKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgYmFjayBwcm90b3R5cGUgZm9yIGxpc3RcclxuICAgIGxldCByb290TGlzdCA9IE9iamVjdC5jcmVhdGUoY3JlYXRlTGlzdC5wcm90byk7XHJcbiAgICBPYmplY3QuYXNzaWduKHJvb3RMaXN0LCBwYXJzZWRMaXN0KTtcclxuXHJcbiAgICByZXR1cm4gcm9vdExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMaXN0RnJvbVN0b3JhZ2UobGlzdEtleSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obGlzdEtleSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9