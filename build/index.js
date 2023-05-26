/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ "./src/blocks/social-sharing-link/edit.js":
/*!************************************************!*\
  !*** ./src/blocks/social-sharing-link/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony import */ var _social_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social-list */ "./src/blocks/social-sharing-link/social-list.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



const SocialSharingLinkEdit = _ref => {
  let {
    attributes,
    context,
    setAttributes
  } = _ref;
  const {
    service,
    label
  } = attributes;
  const {
    showLabels,
    iconColor,
    iconColorValue,
    iconBackgroundColor,
    iconBackgroundColorValue
  } = context;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('outermost-social-sharing-link', 'outermost-social-sharing-link-' + service, {
    [`has-${iconColor}-color`]: iconColor,
    [`has-${iconBackgroundColor}-background-color`]: iconBackgroundColor
  });
  const IconComponent = (0,_social_list__WEBPACK_IMPORTED_MODULE_5__.getIconBySite)(service);
  const socialLinkName = (0,_social_list__WEBPACK_IMPORTED_MODULE_5__.getNameBySite)(service);
  const socialLinkLabel = label ? label : (0,_social_list__WEBPACK_IMPORTED_MODULE_5__.getLabelBySite)(service);
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
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('%s settings', 'social-sharing-block'), socialLinkName),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Share label', 'social-sharing-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Briefly describe the share link to help screen reader users.', 'social-sharing-block'),
    value: label,
    onChange: value => setAttributes({
      label: value
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "wp-block-outermost-social-sharing-link-anchor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconComponent, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-outermost-social-sharing-link-label', {
      'screen-reader-text': !showLabels
    })
  }, socialLinkLabel))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialSharingLinkEdit);

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/facebook.js":
/*!**********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/facebook.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookIcon": () => (/* binding */ FacebookIcon)
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

/***/ "./src/blocks/social-sharing-link/icons/flipboard.js":
/*!***********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/flipboard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlipboardIcon": () => (/* binding */ FlipboardIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const FlipboardIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Polygon, {
  points: "9.333 20 4 20 4 4 20 4 20 9.333 14.667 9.333 14.667 14.667 9.333 14.667"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/index.js":
/*!*******************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookIcon": () => (/* reexport safe */ _facebook__WEBPACK_IMPORTED_MODULE_0__.FacebookIcon),
/* harmony export */   "FlipboardIcon": () => (/* reexport safe */ _flipboard__WEBPACK_IMPORTED_MODULE_1__.FlipboardIcon),
/* harmony export */   "LineIcon": () => (/* reexport safe */ _line__WEBPACK_IMPORTED_MODULE_2__.LineIcon),
/* harmony export */   "LinkedInIcon": () => (/* reexport safe */ _linkedin__WEBPACK_IMPORTED_MODULE_3__.LinkedInIcon),
/* harmony export */   "MailIcon": () => (/* reexport safe */ _mail__WEBPACK_IMPORTED_MODULE_4__.MailIcon),
/* harmony export */   "PinterestIcon": () => (/* reexport safe */ _pinterest__WEBPACK_IMPORTED_MODULE_5__.PinterestIcon),
/* harmony export */   "PocketIcon": () => (/* reexport safe */ _pocket__WEBPACK_IMPORTED_MODULE_6__.PocketIcon),
/* harmony export */   "PrintIcon": () => (/* reexport safe */ _print__WEBPACK_IMPORTED_MODULE_7__.PrintIcon),
/* harmony export */   "RedditIcon": () => (/* reexport safe */ _reddit__WEBPACK_IMPORTED_MODULE_8__.RedditIcon),
/* harmony export */   "SMSIcon": () => (/* reexport safe */ _sms__WEBPACK_IMPORTED_MODULE_10__.SMSIcon),
/* harmony export */   "SkypeIcon": () => (/* reexport safe */ _skype__WEBPACK_IMPORTED_MODULE_9__.SkypeIcon),
/* harmony export */   "TelegramIcon": () => (/* reexport safe */ _telegram__WEBPACK_IMPORTED_MODULE_11__.TelegramIcon),
/* harmony export */   "TumblrIcon": () => (/* reexport safe */ _tumblr__WEBPACK_IMPORTED_MODULE_12__.TumblrIcon),
/* harmony export */   "TwitterIcon": () => (/* reexport safe */ _twitter__WEBPACK_IMPORTED_MODULE_13__.TwitterIcon),
/* harmony export */   "WhatsAppIcon": () => (/* reexport safe */ _whatsapp__WEBPACK_IMPORTED_MODULE_14__.WhatsAppIcon)
/* harmony export */ });
/* harmony import */ var _facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebook */ "./src/blocks/social-sharing-link/icons/facebook.js");
/* harmony import */ var _flipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flipboard */ "./src/blocks/social-sharing-link/icons/flipboard.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./src/blocks/social-sharing-link/icons/line.js");
/* harmony import */ var _linkedin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkedin */ "./src/blocks/social-sharing-link/icons/linkedin.js");
/* harmony import */ var _mail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail */ "./src/blocks/social-sharing-link/icons/mail.js");
/* harmony import */ var _pinterest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pinterest */ "./src/blocks/social-sharing-link/icons/pinterest.js");
/* harmony import */ var _pocket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pocket */ "./src/blocks/social-sharing-link/icons/pocket.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print */ "./src/blocks/social-sharing-link/icons/print.js");
/* harmony import */ var _reddit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reddit */ "./src/blocks/social-sharing-link/icons/reddit.js");
/* harmony import */ var _skype__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skype */ "./src/blocks/social-sharing-link/icons/skype.js");
/* harmony import */ var _sms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sms */ "./src/blocks/social-sharing-link/icons/sms.js");
/* harmony import */ var _telegram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./telegram */ "./src/blocks/social-sharing-link/icons/telegram.js");
/* harmony import */ var _tumblr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tumblr */ "./src/blocks/social-sharing-link/icons/tumblr.js");
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./twitter */ "./src/blocks/social-sharing-link/icons/twitter.js");
/* harmony import */ var _whatsapp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./whatsapp */ "./src/blocks/social-sharing-link/icons/whatsapp.js");
















/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/line.js":
/*!******************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/line.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineIcon": () => (/* binding */ LineIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const LineIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.7619 2.5C3.5133 2.5 2.5 3.5133 2.5 4.7619v14.4762C2.5 20.4867 3.5133 21.5 4.7619 21.5h14.4762c1.2486 0 2.2619-1.0133 2.2619-2.2619V4.7619C21.5 3.5133 20.4867 2.5 19.2381 2.5H4.7619ZM12 5.6667c3.7412 0 6.7857 2.4244 6.7857 5.4056 0 1.1897-.4708 2.2671-1.457 3.3257-.7102.8052-1.8632 1.6916-2.9263 2.4245-1.0631.7238-2.0405 1.2935-2.4024 1.4428-.1448.0588-.2533.0857-.3393.0857-.2986 0-.2718-.3159-.2491-.447.018-.0996.0998-.5709.0998-.5709.0226-.1673.0449-.4334-.023-.6008-.0769-.1854-.38-.2808-.6017-.326-3.2571-.4252-5.6724-2.665-5.6724-5.334 0-2.9812 3.0445-5.4056 6.7857-5.4056Zm-.456 3.6181c-.2278.0043-.4488.1782-.4488.4533v2.7143c0 .2497.2027.4524.4524.4524A.4525.4525 0 0 0 12 12.4524V11.15l.9887 1.5648c.256.3583.8208.1777.8208-.2624V9.738a.4525.4525 0 0 0-.4524-.4524.4525.4525 0 0 0-.4523.4524v1.3571l-.9887-1.6195c-.096-.1344-.2353-.1934-.372-.1909Zm-4.0678.001a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524A.4525.4525 0 0 0 8.8333 12h-.9047V9.7381a.4525.4525 0 0 0-.4524-.4524Zm2.7143 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524a.4525.4525 0 0 0 .4524-.4524V9.738a.4525.4525 0 0 0-.4524-.4524Zm4.5238 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-.9047v-.4524h.9047a.4523.4523 0 0 0 .4524-.4524.4523.4523 0 0 0-.4524-.4523h-.9047v-.4524h.9047a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-1.3571Z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/linkedin.js":
/*!**********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/linkedin.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedInIcon": () => (/* binding */ LinkedInIcon)
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

/***/ "./src/blocks/social-sharing-link/icons/mail.js":
/*!******************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/mail.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailIcon": () => (/* binding */ MailIcon)
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

/***/ "./src/blocks/social-sharing-link/icons/pinterest.js":
/*!***********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/pinterest.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinterestIcon": () => (/* binding */ PinterestIcon)
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

/***/ "./src/blocks/social-sharing-link/icons/pocket.js":
/*!********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/pocket.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PocketIcon": () => (/* binding */ PocketIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const PocketIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.927,4.194C21.667,3.48,20.982,3,20.222,3h-0.01h-1.721H3.839C3.092,3,2.411,3.47,2.145,4.17 C2.066,4.378,2.026,4.594,2.026,4.814v6.035l0.069,1.2c0.29,2.73,1.707,5.115,3.899,6.778c0.039,0.03,0.079,0.059,0.119,0.089 l0.025,0.018c1.175,0.859,2.491,1.441,3.91,1.727c0.655,0.132,1.325,0.2,1.991,0.2c0.615,0,1.232-0.057,1.839-0.17 c0.073-0.014,0.145-0.028,0.219-0.044c0.02-0.004,0.042-0.012,0.064-0.023c1.359-0.297,2.621-0.864,3.753-1.691l0.025-0.018 c0.04-0.029,0.08-0.058,0.119-0.089c2.192-1.664,3.609-4.049,3.898-6.778l0.069-1.2V4.814C22.026,4.605,22,4.398,21.927,4.194z M17.692,10.481l-4.704,4.512c-0.266,0.254-0.608,0.382-0.949,0.382c-0.342,0-0.684-0.128-0.949-0.382l-4.705-4.512 C5.838,9.957,5.82,9.089,6.344,8.542c0.524-0.547,1.392-0.565,1.939-0.04l3.756,3.601l3.755-3.601 c0.547-0.524,1.415-0.506,1.939,0.04C18.256,9.089,18.238,9.956,17.692,10.481z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/print.js":
/*!*******************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/print.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintIcon": () => (/* binding */ PrintIcon)
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
  d: "m14.639 3 4.222 4.235v3.177h.528c1.113 0 2.025.864 2.105 1.96l.006.157v5.295h-2.639v2.117c0 .585-.472 1.059-1.055 1.059H6.194a1.057 1.057 0 0 1-1.055-1.059v-2.117H2.5v-5.295c0-1.17.945-2.117 2.111-2.117h.528V4.059C5.139 3.474 5.61 3 6.194 3h8.445Zm2.639 13.235H6.722v3.177h10.556v-3.177Zm2.11-4.5a.793.793 0 0 0-.79.794.793.793 0 1 0 .79-.794Zm-5.277-7.147H6.722v6.883h10.556V7.765h-2.111a1.057 1.057 0 0 1-1.056-1.06V4.589Z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/reddit.js":
/*!********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/reddit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedditIcon": () => (/* binding */ RedditIcon)
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
  d: "M22 12.068a2.184 2.184 0 0 0-2.186-2.186c-.592 0-1.13.233-1.524.609-1.505-1.075-3.566-1.774-5.86-1.864l1.004-4.695 3.261.699A1.56 1.56 0 1 0 18.255 3c-.61-.001-1.147.357-1.398.877l-3.638-.77a.382.382 0 0 0-.287.053.348.348 0 0 0-.161.251l-1.112 5.233c-2.33.072-4.426.77-5.95 1.864a2.201 2.201 0 0 0-1.523-.61 2.184 2.184 0 0 0-.896 4.176c-.036.215-.053.43-.053.663 0 3.37 3.924 6.111 8.763 6.111s8.763-2.724 8.763-6.11c0-.216-.017-.449-.053-.664A2.207 2.207 0 0 0 22 12.068Zm-15.018 1.56a1.56 1.56 0 0 1 3.118 0c0 .86-.699 1.558-1.559 1.558-.86.018-1.559-.699-1.559-1.559Zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 0 1 0-.573.4.4 0 0 1 .574 0c.68.68 2.114.914 3.136.914 1.022 0 2.473-.233 3.136-.914a.4.4 0 0 1 .574 0 .436.436 0 0 1 0 .573Zm-.287-2.563a1.56 1.56 0 0 1 0-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558Z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/skype.js":
/*!*******************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/skype.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkypeIcon": () => (/* binding */ SkypeIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const SkypeIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/sms.js":
/*!*****************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/sms.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SMSIcon": () => (/* binding */ SMSIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const SMSIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.696 4C20.069 4 22 5.973 22 8.398v4.357c0 2.04-1.368 3.783-3.261 4.266v4.427l-5.234-4.295h-7.2C3.93 17.153 2 15.18 2 12.755V8.398C2 5.973 3.931 4 6.304 4h11.392ZM7.028 8.515c-.98 0-1.66.562-1.66 1.349-.009.497.322.91.985 1.178l.39.142c.242.097.305.171.305.297 0 .162-.131.251-.442.251s-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.315-.224-.741-.316-1.171-.316Zm10.302 0c-.98 0-1.66.562-1.66 1.349-.008.497.322.91.985 1.178l.39.142c.243.097.305.171.305.297 0 .162-.13.251-.442.251-.311 0-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.316-.224-.741-.316-1.171-.316Zm-3.733 0c-.297 0-.55.066-.78.202l-.144.098a1.823 1.823 0 0 0-.264.247l-.078.095-.027-.077c-.15-.34-.55-.565-1.033-.565l-.169.007a1.363 1.363 0 0 0-.896.42l-.08.09-.038-.363-.075-.067H8.994l-.075.079.024.634c.005.2.008.397.008.604v2.652l.075.075h1.178l.075-.075v-2.269c0-.113.012-.202.042-.274.083-.23.262-.392.496-.392.314 0 .483.267.483.753v2.182l.075.075h1.179l.075-.075v-2.277c0-.097.016-.213.043-.285.077-.224.26-.373.486-.373.33 0 .5.272.5.817v2.118l.074.075h1.179l.075-.075v-2.293c0-1.131-.537-1.763-1.39-1.763Z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/telegram.js":
/*!**********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/telegram.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelegramIcon": () => (/* binding */ TelegramIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const TelegramIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 128 128",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M28.97 63.324c18.657-8.128 31.098-13.487 37.323-16.076 17.774-7.393 21.467-8.677 23.874-8.72.53-.009 1.713.122 2.48.745.648.525.826 1.235.911 1.733.085.498.191 1.633.107 2.52-.963 10.12-5.13 34.677-7.25 46.012-.898 4.796-2.664 6.404-4.375 6.561-3.716.342-6.538-2.456-10.138-4.815-5.633-3.693-8.815-5.991-14.283-9.594-6.319-4.164-2.222-6.453 1.379-10.193.942-.98 17.318-15.874 17.634-17.225.04-.169.077-.799-.297-1.131-.375-.333-.927-.22-1.325-.129-.565.128-9.564 6.076-26.996 17.843-2.554 1.754-4.868 2.609-6.94 2.564-2.286-.05-6.681-1.292-9.95-2.354-4.007-1.303-7.193-1.992-6.915-4.205.144-1.152 1.731-2.33 4.761-3.536Z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/tumblr.js":
/*!********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/tumblr.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TumblrIcon": () => (/* binding */ TumblrIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const TumblrIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-5.02v-5.67H6.08V7.5c2.93-.73 4.11-3.3 4.3-5.48h3.01v4.93h3.47v3.65H13.4v4.93c0 1.47.73 2.01 1.92 2.01h1.73v3.75z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/icons/twitter.js":
/*!*********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/twitter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterIcon": () => (/* binding */ TwitterIcon)
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

/***/ "./src/blocks/social-sharing-link/icons/whatsapp.js":
/*!**********************************************************!*\
  !*** ./src/blocks/social-sharing-link/icons/whatsapp.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsAppIcon": () => (/* binding */ WhatsAppIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const WhatsAppIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.164 3a8.836 8.836 0 1 1-4.272 16.574L3 21.14l1.595-4.74A8.837 8.837 0 0 1 12.164 3Zm0 1.407c-4.097 0-7.43 3.333-7.43 7.43 0 1.625.526 3.13 1.415 4.355l-.928 2.76 2.855-.915a7.386 7.386 0 0 0 4.088 1.228c4.096 0 7.429-3.332 7.429-7.429 0-4.096-3.333-7.429-7.43-7.429Zm-2.795 3.4c.09 0 .172.004.248.007.221.01.33.023.474.368.103.247.289.702.439 1.066l.104.251c.063.15.11.26.125.29.054.109.103.258.03.402-.072.145-.132.212-.24.339-.109.126-.211.223-.322.357-.098.118-.213.248-.087.464.127.217.562.926 1.205 1.5.828.738 1.503.973 1.743 1.075.182.078.394.058.526-.081.167-.178.37-.478.58-.77.154-.21.337-.233.536-.16.083.03.316.138.575.262l.316.153c.261.126.499.244.59.289.216.109.36.162.414.253.054.09.054.524-.126 1.03-.18.505-.892.922-1.459 1.046-.389.085-.896.148-2.602-.559-2.187-.906-3.593-3.125-3.701-3.27-.108-.144-.884-1.174-.884-2.24 0-1.065.541-1.584.758-1.806.178-.182.473-.266.758-.266Z"
}));

/***/ }),

/***/ "./src/blocks/social-sharing-link/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/social-sharing-link/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/social-sharing-link/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/social-sharing-link/block.json");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/blocks/social-sharing-link/variations.js");
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

/***/ "./src/blocks/social-sharing-link/social-list.js":
/*!*******************************************************!*\
  !*** ./src/blocks/social-sharing-link/social-list.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconBySite": () => (/* binding */ getIconBySite),
/* harmony export */   "getLabelBySite": () => (/* binding */ getLabelBySite),
/* harmony export */   "getNameBySite": () => (/* binding */ getNameBySite)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/blocks/social-sharing-link/variations.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/blocks/social-sharing-link/icons/index.js");
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
  return variation ? variation.icon : _icons__WEBPACK_IMPORTED_MODULE_3__.MailIcon;
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
  return variation ? variation.title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Email this Page', 'social-sharing-block');
};
/**
 * Retrieves the display label for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display label for social service
 */

const getLabelBySite = name => {
  var _variation$title, _variation$label;

  const variation = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_variations__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name
  });

  if (!variation) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mail', 'social-sharing-block');
  }

  const title = (_variation$title = variation === null || variation === void 0 ? void 0 : variation.title) !== null && _variation$title !== void 0 ? _variation$title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Link', 'social-sharing-block');
  const label = (_variation$label = variation === null || variation === void 0 ? void 0 : variation.label) !== null && _variation$label !== void 0 ? _variation$label :
  /* translators: %s: title of the social service. */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Share on %s', 'social-sharing-block'), title);
  return label;
};

/***/ }),

/***/ "./src/blocks/social-sharing-link/variations.js":
/*!******************************************************!*\
  !*** ./src/blocks/social-sharing-link/variations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/social-sharing-link/icons/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


const variations = [{
  name: 'facebook',
  attributes: {
    service: 'facebook'
  },
  title: 'Facebook',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.FacebookIcon
}, {
  name: 'flipboard',
  attributes: {
    service: 'flipboard'
  },
  title: 'Flipboard',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.FlipboardIcon
}, {
  name: 'line',
  attributes: {
    service: 'line'
  },
  title: 'LINE',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.LineIcon
}, {
  name: 'linkedin',
  attributes: {
    service: 'linkedin'
  },
  title: 'LinkedIn',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.LinkedInIcon
}, {
  name: 'mail',
  attributes: {
    service: 'mail'
  },
  title: 'Mail',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email this Page', 'social-sharing-block'),
  keywords: ['email', 'e-mail'],
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.MailIcon
}, {
  name: 'pinterest',
  attributes: {
    service: 'pinterest'
  },
  title: 'Pinterest',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.PinterestIcon
}, {
  name: 'pocket',
  attributes: {
    service: 'pocket'
  },
  title: 'Pocket',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.PocketIcon
}, {
  name: 'print',
  attributes: {
    service: 'print'
  },
  title: 'Print',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Print this Page', 'social-sharing-block'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.PrintIcon
}, {
  name: 'reddit',
  attributes: {
    service: 'reddit'
  },
  title: 'Reddit',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.RedditIcon
}, {
  name: 'skype',
  attributes: {
    service: 'skype'
  },
  title: 'Skype',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.SkypeIcon
}, {
  name: 'sms',
  attributes: {
    service: 'sms'
  },
  title: 'SMS',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.SMSIcon
}, {
  name: 'telegram',
  attributes: {
    service: 'telegram'
  },
  title: 'Telegram',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.TelegramIcon
}, {
  name: 'tumblr',
  attributes: {
    service: 'tumblr'
  },
  title: 'Tumblr',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.TumblrIcon
}, {
  isDefault: true,
  name: 'twitter',
  attributes: {
    service: 'twitter'
  },
  title: 'Twitter',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.TwitterIcon
}, {
  name: 'whatsapp',
  attributes: {
    service: 'whatsapp'
  },
  title: 'WhatsApp',
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__.WhatsAppIcon
}];
/**
 * Add `isActive` function to all `social link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 * Block by providing its attributes.
 */

variations.forEach(variation => {
  if (variation.isActive) {
    return;
  }

  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.service === variationAttributes.service;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "./src/blocks/social-sharing/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/social-sharing/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialSharingEdit": () => (/* binding */ SocialSharingEdit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
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






const ALLOWED_BLOCKS = ['outermost/social-sharing-link'];
const sizeOptions = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Small', 'social-sharing-block'),
  value: 'has-small-icon-size'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Normal', 'social-sharing-block'),
  value: 'has-normal-icon-size'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Large', 'social-sharing-block'),
  value: 'has-large-icon-size'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Huge', 'social-sharing-block'),
  value: 'has-huge-icon-size'
}];
function SocialSharingEdit(props) {
  var _attributes$className, _layout$orientation, _colorGradientSetting;

  const {
    clientId,
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
    customIconBackgroundColor,
    iconColorValue,
    layout,
    showLabels,
    size
  } = attributes; // Remove icon background color if logos only style selected.

  const logosOnly = ((_attributes$className = attributes.className) === null || _attributes$className === void 0 ? void 0 : _attributes$className.indexOf('is-style-logos-only')) >= 0;
  const backgroundBackup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (logosOnly) {
      backgroundBackup.current = {
        iconBackgroundColor,
        iconBackgroundColorValue,
        customIconBackgroundColor
      };
      setAttributes({
        iconBackgroundColor: undefined,
        customIconBackgroundColor: undefined,
        iconBackgroundColorValue: undefined
      });
    } else {
      setAttributes({ ...backgroundBackup.current
      });
    }
  }, [logosOnly]);
  const SocialPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
    className: "wp-block-outermost-social-sharing__social-placeholder"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "wp-block-outermost-social-sharing__social-placeholder-icons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "outermost-social-sharing-link outermost-social-sharing-link-facebook"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "outermost-social-sharing-link outermost-social-sharing-link-twitter"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "outermost-social-sharing-link outermost-social-sharing-link-linkedin"
  })));
  const SelectedSocialPlaceholder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
    className: "wp-block-outermost-social-sharing__social-prompt"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Click plus to add', 'social-sharing-block')); // Fallback color values are used maintain selections in case switching
  // themes and named colors in palette do not match.

  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(size, {
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
    orientation: (_layout$orientation = layout === null || layout === void 0 ? void 0 : layout.orientation) !== null && _layout$orientation !== void 0 ? _layout$orientation : 'horizontal',
    __experimentalAppenderTagName: 'li'
  });
  const POPOVER_PROPS = {
    position: 'bottom right'
  };
  const colorSettings = [{
    // Use custom attribute as fallback to prevent loss of named color selection when
    // switching themes to a new theme that does not have a matching named color.
    value: iconColor.color || iconColorValue,
    onChange: colorValue => {
      setIconColor(colorValue);
      setAttributes({
        iconColorValue: colorValue
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon color', 'social-sharing-block'),
    resetAllFilter: () => {
      setIconColor(undefined);
      setAttributes({
        iconColorValue: undefined
      });
    }
  }];

  if (!logosOnly) {
    colorSettings.push({
      // Use custom attribute as fallback to prevent loss of named color selection when
      // switching themes to a new theme that does not have a matching named color.
      value: iconBackgroundColor.color || iconBackgroundColorValue,
      onChange: colorValue => {
        setIconBackgroundColor(colorValue);
        setAttributes({
          iconBackgroundColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Icon background', 'social-sharing-block'),
      resetAllFilter: () => {
        setIconBackgroundColor(undefined);
        setAttributes({
          iconBackgroundColorValue: undefined
        });
      }
    });
  }

  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseMultipleOriginColorsAndGradients)(); // In WordPress <=6.2 this will return null, so default to true in those cases.

  const hasColorsOrGradients = (_colorGradientSetting = colorGradientSettings === null || colorGradientSettings === void 0 ? void 0 : colorGradientSettings.hasColorsOrGradients) !== null && _colorGradientSetting !== void 0 ? _colorGradientSetting : true;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
    group: "other"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarDropdownMenu, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Size', 'social-sharing-block'),
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Size', 'social-sharing-block'),
    icon: null,
    popoverProps: POPOVER_PROPS
  }, _ref => {
    let {
      onClose
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, null, sizeOptions.map(entry => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
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
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Share settings', 'social-sharing-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    checked: showLabels,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Show labels', 'social-sharing-block'),
    onChange: () => setAttributes({
      showLabels: !showLabels
    })
  }))), hasColorsOrGradients && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "color"
  }, colorSettings.map(_ref2 => {
    let {
      onChange,
      label,
      value,
      resetAllFilter
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: `social-sharing-color-${label}`,
      __experimentalIsRenderedInSidebar: true,
      settings: [{
        colorValue: value,
        label,
        onColorChange: onChange,
        isShownByDefault: true,
        resetAllFilter,
        enableAlpha: true
      }],
      panelId: clientId
    }, colorGradientSettings));
  }), !logosOnly && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker, {
    textColor: iconColorValue,
    backgroundColor: iconBackgroundColorValue,
    isLargeText: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", innerBlocksProps));
}
const iconColorAttributes = {
  iconBackgroundColor: 'icon-background-color',
  iconColor: 'icon-color'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)(iconColorAttributes)(SocialSharingEdit));

/***/ }),

/***/ "./src/blocks/social-sharing/index.js":
/*!********************************************!*\
  !*** ./src/blocks/social-sharing/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/social-sharing/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/social-sharing/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/social-sharing/save.js");
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
      name: 'outermost/social-sharing-link',
      attributes: {
        service: 'facebook'
      }
    }, {
      name: 'outermost/social-sharing-link',
      attributes: {
        service: 'twitter'
      }
    }, {
      name: 'outermost/social-sharing-link',
      attributes: {
        service: 'linkedin'
      }
    }]
  },
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/social-sharing/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/social-sharing/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
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
      showLabels,
      size
    }
  } = props;
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(size, {
    'has-visible-labels': showLabels,
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
/***/ ((module, exports) => {

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
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/blocks/social-sharing-link/block.json":
/*!***************************************************!*\
  !*** ./src/blocks/social-sharing-link/block.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"outermost/social-sharing-link","title":"Social Sharing Link","parent":["outermost/social-sharing"],"description":"Display an icon that shares the current page when clicked.","textdomain":"social-sharing","attributes":{"service":{"type":"string"},"label":{"type":"string"}},"usesContext":["showLabels","iconColor","iconColorValue","iconBackgroundColor","iconBackgroundColorValue"],"supports":{"reusable":false,"html":false},"editorScript":"outermost-social-sharing-scripts","editorStyle":"file:./../../editor.css"}');

/***/ }),

/***/ "./src/blocks/social-sharing/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/social-sharing/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"outermost/social-sharing","title":"Social Sharing","category":"widgets","description":"Display icons that share the current page when clicked.","keywords":["icon","social","links","share"],"textdomain":"social-sharing","attributes":{"iconColor":{"type":"string"},"customIconColor":{"type":"string"},"iconColorValue":{"type":"string"},"iconBackgroundColor":{"type":"string"},"customIconBackgroundColor":{"type":"string"},"iconBackgroundColorValue":{"type":"string"},"showLabels":{"type":"boolean","default":false},"size":{"type":"string"}},"providesContext":{"showLabels":"showLabels","iconColor":"iconColor","iconColorValue":"iconColorValue","iconBackgroundColor":"iconBackgroundColor","iconBackgroundColorValue":"iconBackgroundColorValue"},"supports":{"align":["left","center","right"],"anchor":true,"__experimentalExposeControlsToChildren":true,"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex"}},"spacing":{"blockGap":true,"margin":["top","bottom"],"units":["px","em","rem","vh","vw"],"__experimentalDefaultControls":{"blockGap":true}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"logos-only","label":"Logos Only"},{"name":"pill-shape","label":"Pill Shape"}],"editorScript":"outermost-social-sharing-scripts","editorStyle":"file:./../../editor.css","style":"file:./../../style.css"}');

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_social_sharing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/social-sharing */ "./src/blocks/social-sharing/index.js");
/* harmony import */ var _blocks_social_sharing_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/social-sharing-link */ "./src/blocks/social-sharing-link/index.js");
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


const registerSocialSharingBlocks = function () {
  let blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [_blocks_social_sharing__WEBPACK_IMPORTED_MODULE_1__, _blocks_social_sharing_link__WEBPACK_IMPORTED_MODULE_2__];
  blocks.forEach(registerBlock);
};

registerSocialSharingBlocks();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map