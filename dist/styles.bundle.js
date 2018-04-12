webpackJsonp([2,4],{

/***/ 29:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(513);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(598)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 100; src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v15/vzIUHo9z-oJ4WgkpPOtg13YhjbSpvc47ee6xR_80Hnw.woff) format('woff'); }\r\n@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 300; src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfbO3LdcAZYWl9Si6vvxL-qU.woff) format('woff'); }\r\n@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 400; src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v15/CrYjSnGjrRCn0pd9VQsnFOvvDin1pK8aKteLpeZ5c0A.woff) format('woff'); }\r\n@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 500; src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUbO3LdcAZYWl9Si6vvxL-qU.woff) format('woff'); }\r\n@font-face { font-family: 'Roboto'; font-style: normal; font-weight: 700; src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOLO3LdcAZYWl9Si6vvxL-qU.woff) format('woff'); }\r\nh1 { font-size: 56px; line-height: 1.2em; font-weight: 300; margin-bottom: 15px; }\r\n.hero-copy { font-size: 24px; line-height: 1.583em; }\r\nh2 { font-size: 56px; line-height: 1.2em; font-weight: 300; }\r\nh3 { font-size: 48px; line-height: 1.1667em; font-weight: 100; }\r\nh4 { font-size: 32px; line-height: 1.1375em; font-weight: 300; }\r\nh5 { font-weight: 300; font-size: 22px; line-height: 1.36em; }\r\nh6 { font-weight: 700; font-size: 15px; line-height: 1.375; }\r\n\r\n@media (max-width: 767px) {\r\nh1 { font-size: 30px; }\r\n.hero-copy { font-size: 18px; }\r\nh2 { font-size: 30px; }\r\nh3 { font-size: 26px; }\r\nh4 { font-size: 22px; }\r\nh5 { font-size: 20px; }\r\n}\r\n\r\n@media (min-width: 768px) {\r\nh2 { font-size: 36px; }\r\n}\r\n.top-padding { padding-top: 80px; }\r\n.bottom-padding { padding-bottom: 80px; }\r\n\r\n@media (max-width: 767px) {\r\n.small-extra-margin-bottom { margin-bottom: 40px; }\r\n}\r\n.navbar .navbar-nav > li { padding-right: 34px; }\r\n.navbar .navbar-nav li { font-size: 16px; font-weight: 400; }\r\n.navbar .navbar-nav > li > a { padding: 0; border-top: 3px solid transparent; line-height: 50px; }\r\n.navbar .navbar-nav > .active > a, .navbar .navbar-nav > li > a:hover, .navbar .navbar-nav > li > a:focus { border-color: #FFF; }\r\n.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle { border-color: #000 !important; background-color: #000 !important; }\r\n.navbar-inverse .navbar-toggle .icon-bar { background-color: #888 !important; }\r\n.dropdown-menu.inverse-dropdown { background-color: #333333; border: 0px; border-top: 3px solid #FFF; }\r\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: #333333; }\r\n.footer-spacing { padding-top: 1.2em; }\r\n\r\n@media (max-width: 992px) {\r\n.medium-top-padding { padding-top: 1.2em; }\r\n}\r\n\r\n@media (max-width: 910px) {\r\n.navbar-collapse.collapse { display: block !important; height: auto !important; padding-bottom: 0; overflow-y: auto !important; overflow-x: hidden!important; }\r\n.navbar-collapse.in { display: block !important; height: auto !important; padding-bottom: 0; overflow-y: auto !important; overflow-x: hidden!important; }\r\n}\r\n\r\n@media (max-width: 908px) {\r\n.navbar-header { float: none; }\r\n.navbar-toggle { display: block; }\r\n.navbar-collapse { border-top: 1px solid transparent; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1); }\r\n.navbar-collapse.collapse { display: none!important; overflow-y: auto; overflow-x: hidden!important; }\r\n.navbar-nav { float: none!important;/*margin: 7.5px -15px;*/\r\n}\r\n.navbar-nav>li { float: none; }\r\n.navbar-nav>li>a { padding-top: 10px; padding-bottom: 10px; }\r\n.navbar-text { float: none; margin: 15px 0; }\r\n/* since 3.1.0 */\r\n.navbar-collapse.collapse.in { display: block!important; overflow-y: auto; overflow-x: hidden!important; }\r\n.collapsing { overflow: hidden!important; }\r\n.navbar-nav .open .dropdown-menu { position: static; float: none; width: auto; margin-top: 0; background-color: transparent; border: 0; box-shadow: none; }\r\n.navbar .navbar-nav > li { padding-right: 0px; }\r\n.navbar .navbar-nav > li > a { padding-right: 10px; padding-left: 10px; }\r\n.navbar .navbar-nav > .active > a,  .navbar .navbar-nav > li > a:hover,  .navbar .navbar-nav > li > a:focus { border-color: transparent; }\r\n.dropdown-menu.inverse-dropdown { background-color: #333333; border: 0px; border-top: 3px solid #FFF; }\r\n.dropdown-menu > .active > a,  .dropdown-menu > .active > a:hover,  .dropdown-menu > .active > a:focus { background-color: #333333; }\r\n}\r\n.result-block { margin-bottom: 30px; }\r\n.result-body { padding-left: 30px; padding-top: 15px; }\r\n/***** original ******/\r\n\r\n\r\nbody { font-family: 'Roboto', sans-serif; line-height: 1.667em; font-size: 18px; font-weight: 300; }\r\nlabel { font-size: 14px; }\r\nh1 { font-weight: 100; }\r\n.img_container { height: 387px; position: relative; background-color: #f5f5f5; }\r\n.cursor-pointer { cursor: pointer }\r\n.img_container img { position: absolute; margin: auto; top: 0; left: 0; right: 0; bottom: 0; max-height: 100%; max-width: 100%; }\r\n.image-list .image-item { float: left; position: relative; min-height: 140px; }\r\nul.content-slider { list-style: none; margin-top: 50px; }\r\n.content-slider li { width: 150px; float: left; }\r\n.video_container { position: relative; background-color: #f5f5f5; }\r\n.video_container video { max-height: 100%; max-width: 100%; }\r\n.face-rectangle { position: absolute; border-style: solid; border-width: 3px; color: #008272; }\r\n.face-landmark { position: absolute; border-style: solid; border-width: 2px; color: #008272; }\r\n.detection-demo-codes { height: 420px; overflow: auto; position: relative; }\r\n.input-group .input-group-btn input[type=file] { display: none; }\r\n.filmstrip { position: relative; height: 200px; overflow: hidden; }\r\n.filmstrip img { /*position: absolute;*/\r\ntop: 0; left: 0; height: 100%; opacity: 0.5; /*margin: 10px;*/\r\nmargin-top: 10px; margin-bottom: 10px; margin-left: auto; margin-right: auto; display: block; }\r\n.filmstrip img:hover { opacity: 1; }\r\n.filmstrip img.selected { opacity: 1; }\r\n.image-pair { opacity: .5; margin-top: 5px; margin-bottom: 5px; }\r\n.image-pair.selected { opacity: 1; }\r\n.image-pair:hover { opacity: 1; }\r\n.glyphicon.spinning { animation: spin 1s infinite linear; -webkit-animation: spin2 1s infinite linear; }\r\n @keyframes spin {\r\n from {\r\ntransform: scale(1) rotate(0deg);\r\n}\r\n to {\r\ntransform: scale(1) rotate(360deg);\r\n}\r\n}\r\n.display-middle { height: 90%; width: 100%; display: -ms-flexbox; display: flex; -ms-flex-align: center; align-items: center; -ms-flex-pack: center; justify-content: center; }\r\n.hero-banner-container { min-height: 425px; /*background-color: #004b50;*/\r\nbackground-color: #000; background-position: center top; /*background-size: cover;*/\r\n-ms-flex-direction: column;\r\n    flex-direction: column; height: 425px; background-position: center top; background-repeat: no-repeat; display: -ms-flexbox; display: flex; -ms-flex-pack: center; justify-content: center; margin-left: 0px; margin-right: 0px; margin-top: -20px; position: relative;/*width: 1800px;*/\r\n}\r\n.hero-banner__content-container { padding-left: 0px; padding-right: 0px;/*margin-top: -40px;*/\r\n}\r\n.hero-banner__content-container_homepage { padding-left: 25px; padding-right: 0px; height: 415px; padding-top: 60px; -ms-flex-pack: center; justify-content: center; -ms-flex-direction: column; flex-direction: column; background-color: rgba(0,75,80,0.9); max-width: 650px;/*margin-left: 10%;*/\r\n}\r\n.text--lg { font-size: 46px; line-height: 56px; }\r\n.text--light { /*font-family: segoe-ui-light,\"Microsoft YaHei Light\",\"微软雅黑 Light\",sans-serif*/\r\nfont-weight: 100; }\r\n.text--white { color: #fff; }\r\n.btn--yellow { background-color: #ffb900; color: #2f2f2f; }\r\n.pricing-section { margin-top: 50px; }\r\n.quote-section { background-repeat: repeat; display: -ms-flexbox; display: flex; -ms-flex-align: center; align-items: center; background-color: black;/*background-color: #004b50;*/\r\n}\r\n.quote-section .quote-section-quote { margin-bottom: 20px; padding: 0 20px; color: #fff; text-align: center; }\r\n.quote-section .quote-section-source { text-align: center; color: #fff; }\r\n.text--md { font-size: 30px; line-height: 42px; }\r\n\r\n@media (max-width: 767px) {\r\n.text--md { font-size: 22px; line-height: 27px; }\r\n}\r\n.text-xxs { font-size: 14px; line-height: 18px; }\r\n.api-detail-cta-bar { background-color: #2f2f2f; margin-top: -1px; margin-left: 0px; margin-right: 0px; width: 1800px; }\r\n.api-detail-cta-bar__btn-container { padding: 12px; }\r\n.api-detail-btn { display: inline-block; margin-right: 85px; }\r\n.api-detail-cta-bar__btn-container a, .api-resources-section-content__btn-container a { margin-left: 15px; }\r\na.btn--oxford { border: none; height: 45px; padding: 0 20px; display: inline-block; line-height: 45px; text-decoration: none !important; }\r\n.btn--teal { background-color: #008272; color: #fff !important; margin: 0; }\r\n.btn--teal:active, .btn--teal:hover { background-color: #004b50; font-weight: 400; color: #FFF!important; border: none }\r\n.btn--teal:focus { outline-color: transparent; color: #FFF!important }\r\n.inverse-dropdown { background-color: black; border-color: black; }\r\n.inverse-dropdown > li > a { color: #999; }\r\n.inverse-dropdown > li > a:hover { color: #fff; background-color: #000; }\r\n.apidetail-pricing-options th { background-color: #505050; color: #fff; font-size: 18px; padding: 15px !important; }\r\n.apidetail-pricing-options th, .apidetail-pricing-options tr { border-left: none !important; border-right: none !important; border: 1px solid #505050; }\r\n.text--centered { text-align: center; }\r\n\r\n@media (max-width:992px) {\r\n.hero-banner-container { min-height: 0; height: 310px!important }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n.hero-banner-container { min-height: 0; height: 350px!important }\r\n}\r\n.api-description { text-align: center; margin: 0; padding-bottom: 30px; }\r\n\r\n@media (max-width:768px) {\r\n.api-description { text-align: left; margin: 0; }\r\n}\r\nbody { padding-right: 0px !important; margin-right: 0px !important; }\r\nbody.modal-open { overflow: auto; }\r\n.mention { cursor: pointer; border-bottom-width: 2px; border-bottom-style: solid; border-bottom-color: blue; text-decoration: none; }\r\n.thumbnail-image-container { width: 393px; position: absolute; top: 63px; left: 80px; right: auto; bottom: auto; }\r\n.thumbnail-result-left { float: left; width: 175px; }\r\n.thumbnail-result-right { float: left; margin-left: 13px; width: 204px; height: 204px; }\r\n.feature-item-container--grey { background-color: #fafafa; padding: 50px 0; margin-top: 50px; margin-left: 0; margin-right: 0; }\r\n.related-search { margin-bottom: 5px; }\r\n.webpage-url { color: rgb(16, 32, 208); }\r\n.webpage-display-url { color: #009030; }\r\n/*.bing-search-demo-codes {\r\n    width: 100%;\r\n    height: 650px;\r\n    overflow-y: scroll;\r\n    overflow-x: scroll;\r\n    background-color: rgba(173,173,173,0.15);\r\n    border: none;\r\n}\r\n.demo-codes {\r\n    word-wrap: break-word;\r\n    color: #2a2a2a;\r\n    border: solid 1px #939393;\r\n}*/\r\n\r\n.preview-thumbnail { height: 168px; width: 168px; padding: 2px; }\r\n.video-thumbnail-container { float: left; position: relative; }\r\n.video-preview-thumbnail { width: 174px; /*width: 260px;*/\r\nheight: 102px; /*height: 168px;*/\r\npadding: 2px; }\r\n.video-preview-motion-thumbnail { width: 174px; height: 102px; padding: 2px; position: absolute; z-index: 100; left: 0px; top: 0px; }\r\n.video-caption { width: 170px; position: absolute; bottom: 10px; left: 10px; color: white; font-size: 12px; }\r\n/* Bing News Search */\r\n.news-snippet { float: left; width: 76%; /*width: 500px;*/\r\nmargin-left: 10px; }\r\nimg.news-thumbnail { float: left; width: 100px; vertical-align: middle; }\r\n/* Accordion styles */\r\n.panel-heading.accordion-toggle:before { font-family: 'Glyphicons Halflings'; content: \"\\E114\"; float: right; color: grey; }\r\n.panel-heading.accordion-toggle.collapsed:before { content: \"\\E080\"; }\r\n.panel-heading { cursor: pointer; }\r\n.param-row { margin-bottom: 10px; }\r\n.tablerow1 { background-color: white; height: -webkit-fit-content; height: -moz-fit-content; height: fit-content; min-height: 200px; -ms-flex-line-pack: center; align-content: center; padding-left: 20px; padding-right: 20px; }\r\n.tablerow2 { background-color: #fafafa; -ms-flex-line-pack: center; align-content: center; padding-left: 20px; padding-right: 20px; height: -webkit-fit-content; height: -moz-fit-content; height: fit-content; min-height: 200px; width: 100%; }\r\n.imageDisplay { width: 350px; height: 200px; vertical-align: middle; padding: 20px; margin: 5px; }\r\n.imageContainer { vertical-align: middle; height: 100%; padding-top: 25px; padding-bottom: 25px }\r\n.maindiv { margin-left: 0px; margin-right: 0px; }\r\n.cosmosButton { min-width: 200px; }\r\n.cosmosButton-withmargin { margin-top: 5px; margin-left: 0px; margin-right: 10px; margin-bottom: 5px; max-width: 250px; min-width: 175px; }\r\n.cosmosDropdown-withmargin { margin-top: 5px; margin-left: 0px; margin-right: 10px; margin-bottom: 5px; max-width: 250px; min-width: 175px; }\r\n.cosmosButton-stretched { margin-bottom: 5px; margin-top: 0px; margin-left: 0px; width: 100%; }\r\n.filler { height: 25px; }\r\n.glyphicon-refresh.spinning { animation: spin 1s infinite linear; }\r\n @keyframes spin {\r\n from {\r\ntransform: scale(1) rotate(0deg);\r\n}\r\n to {\r\ntransform: scale(1) rotate(360deg);\r\n}\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[609]);
//# sourceMappingURL=styles.bundle.js.map