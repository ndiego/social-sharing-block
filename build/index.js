/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/share.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/share.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const share = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 11.8l6.1-4.5c.1.4.4.7.9.7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v.4l-6.4 4.8c-.2-.1-.4-.2-.6-.2H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.2 0 .4-.1.6-.2l6.4 4.8v.4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.5 0-.8.3-.9.7L9 12.2v-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (share);
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./src/social-share-link/edit.js":
/*!***************************************!*\
  !*** ./src/social-share-link/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _social_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-list */ "./src/social-share-link/social-list.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const SocialShareLinkEdit = _ref => {
  let {
    attributes,
    context,
    isSelected,
    setAttributes
  } = _ref;
  const {
    service,
    label
  } = attributes;
  const {
    iconColorValue,
    iconBackgroundColorValue
  } = context;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('outermost-social-share-link', 'outermost-social-share-link-' + service);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const IconComponent = (0,_social_list__WEBPACK_IMPORTED_MODULE_5__.getIconBySite)(service);
  const socialLinkName = (0,_social_list__WEBPACK_IMPORTED_MODULE_5__.getNameBySite)(service);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classes,
    style: {
      color: iconColorValue,
      backgroundColor: iconBackgroundColorValue
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    /* translators: %s: name of the social service. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%s share label'), socialLinkName),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Share label'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Briefly describe the share link to help screen reader users.'),
    value: label,
    onChange: value => setAttributes({
      label: value
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconComponent, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialShareLinkEdit);

/***/ }),

/***/ "./src/social-share-link/icons/chain.js":
/*!**********************************************!*\
  !*** ./src/social-share-link/icons/chain.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainIcon": function() { return /* binding */ ChainIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ChainIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.647,16.706a1.134,1.134,0,0,0-.343-.833l-2.549-2.549a1.134,1.134,0,0,0-.833-.343,1.168,1.168,0,0,0-.883.392l.233.226q.2.189.264.264a2.922,2.922,0,0,1,.184.233.986.986,0,0,1,.159.312,1.242,1.242,0,0,1,.043.337,1.172,1.172,0,0,1-1.176,1.176,1.237,1.237,0,0,1-.337-.043,1,1,0,0,1-.312-.159,2.76,2.76,0,0,1-.233-.184q-.073-.068-.264-.264l-.226-.233a1.19,1.19,0,0,0-.4.895,1.134,1.134,0,0,0,.343.833L15.837,19.3a1.13,1.13,0,0,0,.833.331,1.18,1.18,0,0,0,.833-.318l1.8-1.789a1.12,1.12,0,0,0,.343-.821Zm-8.615-8.64a1.134,1.134,0,0,0-.343-.833L8.163,4.7a1.134,1.134,0,0,0-.833-.343,1.184,1.184,0,0,0-.833.331L4.7,6.473a1.12,1.12,0,0,0-.343.821,1.134,1.134,0,0,0,.343.833l2.549,2.549a1.13,1.13,0,0,0,.833.331,1.184,1.184,0,0,0,.883-.38L8.728,10.4q-.2-.189-.264-.264A2.922,2.922,0,0,1,8.28,9.9a.986.986,0,0,1-.159-.312,1.242,1.242,0,0,1-.043-.337A1.172,1.172,0,0,1,9.254,8.079a1.237,1.237,0,0,1,.337.043,1,1,0,0,1,.312.159,2.761,2.761,0,0,1,.233.184q.073.068.264.264l.226.233a1.19,1.19,0,0,0,.4-.895ZM22,16.706a3.343,3.343,0,0,1-1.042,2.488l-1.8,1.789a3.536,3.536,0,0,1-4.988-.025l-2.525-2.537a3.384,3.384,0,0,1-1.017-2.488,3.448,3.448,0,0,1,1.078-2.561l-1.078-1.078a3.434,3.434,0,0,1-2.549,1.078,3.4,3.4,0,0,1-2.5-1.029L3.029,9.794A3.4,3.4,0,0,1,2,7.294,3.343,3.343,0,0,1,3.042,4.806l1.8-1.789A3.384,3.384,0,0,1,7.331,2a3.357,3.357,0,0,1,2.5,1.042l2.525,2.537a3.384,3.384,0,0,1,1.017,2.488,3.448,3.448,0,0,1-1.078,2.561l1.078,1.078a3.551,3.551,0,0,1,5.049-.049l2.549,2.549A3.4,3.4,0,0,1,22,16.706Z"
}));

/***/ }),

/***/ "./src/social-share-link/icons/facebook.js":
/*!*************************************************!*\
  !*** ./src/social-share-link/icons/facebook.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookIcon": function() { return /* binding */ FacebookIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const FacebookIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"
}));

/***/ }),

/***/ "./src/social-share-link/icons/index.js":
/*!**********************************************!*\
  !*** ./src/social-share-link/icons/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChainIcon": function() { return /* reexport safe */ _chain__WEBPACK_IMPORTED_MODULE_0__.ChainIcon; },
/* harmony export */   "FacebookIcon": function() { return /* reexport safe */ _facebook__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon; },
/* harmony export */   "LinkedInIcon": function() { return /* reexport safe */ _linkedin__WEBPACK_IMPORTED_MODULE_2__.LinkedInIcon; },
/* harmony export */   "MailIcon": function() { return /* reexport safe */ _mail__WEBPACK_IMPORTED_MODULE_3__.MailIcon; },
/* harmony export */   "PinterestIcon": function() { return /* reexport safe */ _pinterest__WEBPACK_IMPORTED_MODULE_4__.PinterestIcon; },
/* harmony export */   "PrintIcon": function() { return /* reexport safe */ _print__WEBPACK_IMPORTED_MODULE_5__.PrintIcon; },
/* harmony export */   "RedditIcon": function() { return /* reexport safe */ _reddit__WEBPACK_IMPORTED_MODULE_6__.RedditIcon; },
/* harmony export */   "TwitterIcon": function() { return /* reexport safe */ _twitter__WEBPACK_IMPORTED_MODULE_7__.TwitterIcon; }
/* harmony export */ });
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chain */ "./src/social-share-link/icons/chain.js");
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facebook */ "./src/social-share-link/icons/facebook.js");
/* harmony import */ var _linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedin */ "./src/social-share-link/icons/linkedin.js");
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail */ "./src/social-share-link/icons/mail.js");
/* harmony import */ var _pinterest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pinterest */ "./src/social-share-link/icons/pinterest.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print */ "./src/social-share-link/icons/print.js");
/* harmony import */ var _reddit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reddit */ "./src/social-share-link/icons/reddit.js");
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./twitter */ "./src/social-share-link/icons/twitter.js");









/***/ }),

/***/ "./src/social-share-link/icons/linkedin.js":
/*!*************************************************!*\
  !*** ./src/social-share-link/icons/linkedin.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedInIcon": function() { return /* binding */ LinkedInIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const LinkedInIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
}));

/***/ }),

/***/ "./src/social-share-link/icons/mail.js":
/*!*********************************************!*\
  !*** ./src/social-share-link/icons/mail.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailIcon": function() { return /* binding */ MailIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const MailIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
}));

/***/ }),

/***/ "./src/social-share-link/icons/pinterest.js":
/*!**************************************************!*\
  !*** ./src/social-share-link/icons/pinterest.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinterestIcon": function() { return /* binding */ PinterestIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const PinterestIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"
}));

/***/ }),

/***/ "./src/social-share-link/icons/print.js":
/*!**********************************************!*\
  !*** ./src/social-share-link/icons/print.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintIcon": function() { return /* binding */ PrintIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const PrintIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.03496503,20.3333314 L17.7831938,20.3333314 L17.7831938,16.9999943 L6.03496503,16.9999943 L6.03496503,20.3333314 L6.03496503,20.3333314 Z M6.03496503,12.0000114 L17.7831938,12.0000114 L17.7831938,7.0000057 L15.685286,7.0000057 C15.3356385,7.0000057 15.0384374,6.87847802 14.7936826,6.63542266 C14.5489279,6.3923673 14.4265505,6.09722974 14.4265505,5.75000997 L14.4265505,3.66666857 L6.03496503,3.66666857 L6.03496503,12.0000114 L6.03496503,12.0000114 Z M21.1398142,12.8333343 C21.1398142,12.6076422 21.0567735,12.412332 20.8906921,12.2474038 C20.7246107,12.0824755 20.527935,12.0000114 20.3006649,12.0000114 C20.0733948,12.0000114 19.876719,12.0824755 19.7106376,12.2474038 C19.5445562,12.412332 19.4615155,12.6076422 19.4615155,12.8333343 C19.4615155,13.0590264 19.5445562,13.2543365 19.7106376,13.4192648 C19.876719,13.584193 20.0733948,13.6666572 20.3006649,13.6666572 C20.527935,13.6666572 20.7246107,13.584193 20.8906921,13.4192648 C21.0567735,13.2543365 21.1398142,13.0590264 21.1398142,12.8333343 L21.1398142,12.8333343 Z M22.8181818,12.8333343 L22.8181818,18.24999 C22.8181818,18.3628437 22.7766118,18.4604988 22.6935634,18.5429553 C22.610515,18.6254118 22.5121772,18.6666477 22.3985498,18.6666629 L19.4614926,18.6666629 L19.4614926,20.7500043 C19.4614926,21.097224 19.3391152,21.3923616 19.0943604,21.635417 C18.8496057,21.8784723 18.5524045,22 18.202757,22 L5.61537888,22 C5.2657314,22 4.96853027,21.8784723 4.72377551,21.635417 C4.47902074,21.3923616 4.35664336,21.097224 4.35664336,20.7500043 L4.35664336,18.6666629 L1.41958616,18.6666629 C1.30594346,18.6666629 1.20760558,18.625427 1.12457253,18.5429553 C1.04153947,18.4604836 1,18.3628285 1,18.24999 L1,12.8333343 C1,12.1475688 1.24694226,11.5594584 1.74082679,11.069003 C2.23471131,10.5785477 2.82693371,10.33332 3.51749399,10.33332 L4.35664336,10.33332 L4.35664336,3.24999573 C4.35664336,2.90277596 4.47902074,2.60763839 4.72377551,2.36458304 C4.96853027,2.12152768 5.2657314,2 5.61537888,2 L14.4265505,2 C14.776198,2 15.1608148,2.08680874 15.5804009,2.26042622 C15.9999871,2.4340437 16.3321576,2.64238012 16.5769123,2.88543548 L18.5699121,4.86459728 C18.8146669,5.10765264 19.02446,5.43751673 19.1992914,5.85418957 C19.3741228,6.27086241 19.4615385,6.65280871 19.4615385,7.00002848 L19.4615385,10.3333656 L20.3006878,10.3333656 C20.9912481,10.3333656 21.5834705,10.5785933 22.077355,11.0690486 C22.5712396,11.5595039 22.8181818,12.1476144 22.8181818,12.8333799 L22.8181818,12.8333343 Z"
}));

/***/ }),

/***/ "./src/social-share-link/icons/reddit.js":
/*!***********************************************!*\
  !*** ./src/social-share-link/icons/reddit.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedditIcon": function() { return /* binding */ RedditIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const RedditIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22,11.816c0-1.256-1.021-2.277-2.277-2.277c-0.593,0-1.122,0.24-1.526,0.614c-1.481-0.965-3.455-1.594-5.647-1.69 l1.171-3.702l3.18,0.748c0.008,1.028,0.846,1.862,1.876,1.862c1.035,0,1.877-0.842,1.877-1.878c0-1.035-0.842-1.877-1.877-1.877 c-0.769,0-1.431,0.466-1.72,1.13l-3.508-0.826c-0.203-0.047-0.399,0.067-0.46,0.261l-1.35,4.268 c-2.316,0.038-4.411,0.67-5.97,1.671C5.368,9.765,4.853,9.539,4.277,9.539C3.021,9.539,2,10.56,2,11.816 c0,0.814,0.433,1.523,1.078,1.925c-0.037,0.221-0.061,0.444-0.061,0.672c0,3.292,4.011,5.97,8.941,5.97s8.941-2.678,8.941-5.97 c0-0.214-0.02-0.424-0.053-0.632C21.533,13.39,22,12.661,22,11.816z M18.776,4.394c0.606,0,1.1,0.493,1.1,1.1s-0.493,1.1-1.1,1.1 s-1.1-0.494-1.1-1.1S18.169,4.394,18.776,4.394z M2.777,11.816c0-0.827,0.672-1.5,1.499-1.5c0.313,0,0.598,0.103,0.838,0.269 c-0.851,0.676-1.477,1.479-1.812,2.36C2.983,12.672,2.777,12.27,2.777,11.816z M11.959,19.606c-4.501,0-8.164-2.329-8.164-5.193 S7.457,9.22,11.959,9.22s8.164,2.329,8.164,5.193S16.46,19.606,11.959,19.606z M20.636,13.001c-0.326-0.89-0.948-1.701-1.797-2.384 c0.248-0.186,0.55-0.301,0.883-0.301c0.827,0,1.5,0.673,1.5,1.5C21.223,12.299,20.992,12.727,20.636,13.001z M8.996,14.704 c-0.76,0-1.397-0.616-1.397-1.376c0-0.76,0.637-1.397,1.397-1.397c0.76,0,1.376,0.637,1.376,1.397 C10.372,14.088,9.756,14.704,8.996,14.704z M16.401,13.328c0,0.76-0.616,1.376-1.376,1.376c-0.76,0-1.399-0.616-1.399-1.376 c0-0.76,0.639-1.397,1.399-1.397C15.785,11.931,16.401,12.568,16.401,13.328z M15.229,16.708c0.152,0.152,0.152,0.398,0,0.55 c-0.674,0.674-1.727,1.002-3.219,1.002c-0.004,0-0.007-0.002-0.011-0.002c-0.004,0-0.007,0.002-0.011,0.002 c-1.492,0-2.544-0.328-3.218-1.002c-0.152-0.152-0.152-0.398,0-0.55c0.152-0.152,0.399-0.151,0.55,0 c0.521,0.521,1.394,0.775,2.669,0.775c0.004,0,0.007,0.002,0.011,0.002c0.004,0,0.007-0.002,0.011-0.002 c1.275,0,2.148-0.253,2.669-0.775C14.831,16.556,15.078,16.556,15.229,16.708z"
}));

/***/ }),

/***/ "./src/social-share-link/icons/twitter.js":
/*!************************************************!*\
  !*** ./src/social-share-link/icons/twitter.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterIcon": function() { return /* binding */ TwitterIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const TwitterIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
}));

/***/ }),

/***/ "./src/social-share-link/index.js":
/*!****************************************!*\
  !*** ./src/social-share-link/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/share.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/social-share-link/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/social-share-link/block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/social-share-link/variations.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/social-share-link/social-list.js":
/*!**********************************************!*\
  !*** ./src/social-share-link/social-list.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconBySite": function() { return /* binding */ getIconBySite; },
/* harmony export */   "getNameBySite": function() { return /* binding */ getNameBySite; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/social-share-link/variations.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/social-share-link/icons/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Retrieves the social service's icon component.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {WPComponent} Icon component for social service.
 */

const getIconBySite = name => {
  const variation = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_variations__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name
  });
  return variation ? variation.icon : _icons__WEBPACK_IMPORTED_MODULE_3__.ChainIcon;
};
/**
 * Retrieves the display name for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display name for social service
 */

const getNameBySite = name => {
  const variation = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_variations__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name
  });
  return variation ? variation.title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Icon');
};

/***/ }),

/***/ "./src/social-share-link/variations.js":
/*!*********************************************!*\
  !*** ./src/social-share-link/variations.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/social-share-link/icons/index.js");
/**
 * Internal dependencies
 */

const variations = [{
  name: 'facebook',
  attributes: {
    service: 'facebook'
  },
  title: 'Facebook',
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.FacebookIcon
}, {
  name: 'linkedin',
  attributes: {
    service: 'linkedin'
  },
  title: 'LinkedIn',
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.LinkedInIcon
}, {
  name: 'mail',
  attributes: {
    service: 'mail'
  },
  title: 'Mail',
  keywords: ['email', 'e-mail'],
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.MailIcon
}, {
  name: 'pinterest',
  attributes: {
    service: 'pinterest'
  },
  title: 'Pinterest',
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.PinterestIcon
}, {
  name: 'print',
  attributes: {
    service: 'print'
  },
  title: 'Print',
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.PrintIcon
}, {
  name: 'reddit',
  attributes: {
    service: 'reddit'
  },
  title: 'Reddit',
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.RedditIcon
}, {
  isDefault: true,
  name: 'twitter',
  attributes: {
    service: 'twitter'
  },
  title: 'Twitter',
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.TwitterIcon
}];
/**
 * Add `isActive` function to all `social link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */

variations.forEach(variation => {
  if (variation.isActive) return;

  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.service === variationAttributes.service;
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./src/social-share-links/edit.js":
/*!****************************************!*\
  !*** ./src/social-share-links/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialShareLinksEdit": function() { return /* binding */ SocialShareLinksEdit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







const ALLOWED_BLOCKS = ['outermost/social-share-link'];
const sizeOptions = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Small'),
  value: 'has-small-icon-size'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Normal'),
  value: 'has-normal-icon-size'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Large'),
  value: 'has-large-icon-size'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Huge'),
  value: 'has-huge-icon-size'
}];

const getDefaultBlockLayout = blockTypeOrName => {
  const layoutBlockSupportConfig = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockSupport)(blockTypeOrName, '__experimentalLayout');
  return layoutBlockSupportConfig?.default;
};

function SocialShareLinksEdit(props) {
  const {
    name,
    attributes,
    iconBackgroundColor,
    iconColor,
    isSelected,
    setAttributes,
    setIconBackgroundColor,
    setIconColor
  } = props;
  const {
    iconBackgroundColorValue,
    iconColorValue,
    size,
    layout
  } = attributes;
  const usedLayout = layout || getDefaultBlockLayout(name); // Remove icon background color if logos only style selected.

  const logosOnly = attributes.className?.indexOf('is-style-logos-only') >= 0;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (logosOnly) {
      setAttributes({
        iconBackgroundColor: undefined,
        customIconBackgroundColor: undefined,
        iconBackgroundColorValue: undefined
      });
    }
  }, [logosOnly, setAttributes]);
  const SocialPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-block-outermost-social-share-links__social-placeholder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outermost-social-share-link"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-outermost-social-share-links__social-placeholder-icons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outermost-social-share-link outermost-social-share-link-twitter"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outermost-social-share-link outermost-social-share-link-facebook"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "outermost-social-share-link outermost-social-share-link-linkedin"
  })));
  const SelectedSocialPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wp-block-outermost-social-share-links__social-prompt"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Click plus to add')); // Fallback color values are used maintain selections in case switching
  // themes and named colors in palette do not match.

  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(size, {
    'has-icon-color': iconColor.color || iconColorValue,
    'has-icon-background-color': iconBackgroundColor.color || iconBackgroundColorValue
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    placeholder: isSelected ? SelectedSocialPlaceholder : SocialPlaceholder,
    templateLock: false,
    __experimentalAppenderTagName: 'li',
    __experimentalLayout: usedLayout
  });
  const POPOVER_PROPS = {
    position: 'bottom right'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
    group: "other"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarDropdownMenu, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Size'),
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Size'),
    icon: null,
    popoverProps: POPOVER_PROPS
  }, _ref => {
    let {
      onClose
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, null, sizeOptions.map(entry => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
        icon: (size === entry.value || !size && entry.value === 'has-normal-icon-size') && _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
        isSelected: size === entry.value,
        key: entry.value,
        onClick: () => {
          setAttributes({
            size: entry.value
          });
        },
        onClose: onClose,
        role: "menuitemradio"
      }, entry.name);
    }));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Color'),
    colorSettings: [{
      // Use custom attribute as fallback to prevent loss of named color selection when
      // switching themes to a new theme that does not have a matching named color.
      value: iconColor.color || iconColorValue,
      onChange: colorValue => {
        setIconColor(colorValue);
        setAttributes({
          iconColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon color')
    }, !logosOnly && {
      // Use custom attribute as fallback to prevent loss of named color selection when
      // switching themes to a new theme that does not have a matching named color.
      value: iconBackgroundColor.color || iconBackgroundColorValue,
      onChange: colorValue => {
        setIconBackgroundColor(colorValue);
        setAttributes({
          iconBackgroundColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon background')
    }]
  }), !logosOnly && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker, {
    textColor: iconColorValue,
    backgroundColor: iconBackgroundColorValue,
    isLargeText: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", innerBlocksProps));
}
const iconColorAttributes = {
  iconColor: 'icon-color',
  iconBackgroundColor: 'icon-background-color'
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)(iconColorAttributes)(SocialShareLinksEdit));

/***/ }),

/***/ "./src/social-share-links/index.js":
/*!*****************************************!*\
  !*** ./src/social-share-links/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/share.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/social-share-links/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/social-share-links/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/social-share-links/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

const settings = {
  example: {
    innerBlocks: [{
      name: 'outermost/social-share-link',
      attributes: {
        service: 'facebook',
        url: 'https://www.facebook.com/WordPress/'
      }
    }, {
      name: 'outermost/social-share-link',
      attributes: {
        service: 'twitter',
        url: 'https://twitter.com/WordPress'
      }
    }, {
      name: 'outermost/social-share-link',
      attributes: {
        service: 'linkedin',
        url: 'https://linkedin.com/WordPress'
      }
    }]
  },
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/social-share-links/save.js":
/*!****************************************!*\
  !*** ./src/social-share-links/save.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function save(props) {
  const {
    attributes: {
      iconBackgroundColorValue,
      iconColorValue,
      size
    }
  } = props;
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(size, {
    'has-icon-color': iconColorValue,
    'has-icon-background-color': iconBackgroundColorValue
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", innerBlocksProps);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/social-share-link/block.json":
/*!******************************************!*\
  !*** ./src/social-share-link/block.json ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"outermost/social-share-link","title":"Social Share Link","category":"widgets","parent":["outermost/social-share-links"],"description":"TODO","textdomain":"TODO","attributes":{"url":{"type":"string"},"service":{"type":"string"},"label":{"type":"string"}},"usesContext":["openInNewTab","iconColorValue","iconBackgroundColorValue"],"supports":{"reusable":false,"html":false},"editorStyle":"file:./../../build/editor.css"}');

/***/ }),

/***/ "./src/social-share-links/block.json":
/*!*******************************************!*\
  !*** ./src/social-share-links/block.json ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"outermost/social-share-links","title":"Social Share","category":"widgets","description":"Add social share icons.","keywords":["icon","social","links","share"],"textdomain":"the-social-share-block","attributes":{"iconColor":{"type":"string"},"customIconColor":{"type":"string"},"iconColorValue":{"type":"string"},"iconBackgroundColor":{"type":"string"},"customIconBackgroundColor":{"type":"string"},"iconBackgroundColorValue":{"type":"string"},"size":{"type":"string"}},"providesContext":{"openInNewTab":"openInNewTab","iconColorValue":"iconColorValue","iconBackgroundColorValue":"iconBackgroundColorValue"},"supports":{"align":["left","center","right"],"anchor":true,"__experimentalExposeControlsToChildren":true,"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex"}},"spacing":{"blockGap":true,"margin":["top","bottom"],"units":["px","em","rem","vh","vw"],"__experimentalDefaultControls":{"blockGap":true}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"logos-only","label":"Logos Only"},{"name":"pill-shape","label":"Pill Shape"}],"editorStyle":"file:./../../build/editor.css","style":"file:./../../build/style-style.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _social_share_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-share-link */ "./src/social-share-link/index.js");
/* harmony import */ var _social_share_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-share-links */ "./src/social-share-links/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */

const registerBlock = block => {
  if (!block) {
    return;
  }

  const {
    metadata,
    settings,
    name
  } = block;
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)({
    name,
    ...metadata
  }, settings);
};
/**
 * Function to register blocks.
 *
 * @param {Array} blocks Array of blocks being registered.
 */


const registerSocialShareBlocks = function () {
  let blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_social_share_link__WEBPACK_IMPORTED_MODULE_1__, _social_share_links__WEBPACK_IMPORTED_MODULE_2__];
  blocks.forEach(registerBlock);
};

registerSocialShareBlocks();
}();
/******/ })()
;
//# sourceMappingURL=index.js.map