webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDataService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDataService = (function (_super) {
    __extends(ContactDataService, _super);
    function ContactDataService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ContactDataService.prototype.post = function (contactUs) {
        var apiUrl = this.localServer + 'api/email';
        return this.postAsPromise(apiUrl, contactUs, null);
    };
    return ContactDataService;
}(__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]));
ContactDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactDataService);

var _a;
//# sourceMappingURL=contact-data.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cognitive_api_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionDataService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisionDataService = (function (_super) {
    __extends(VisionDataService, _super);
    function VisionDataService(http, cognitiveApiService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.cognitiveApiService = cognitiveApiService;
        return _this;
    }
    VisionDataService.prototype.analyze = function (imageUrlOrData) {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        var apiUrl = this.apiServer + 'vision/v1.0/analyze?visualFeatures=Categories,Tags,Description,Faces,ImageType,Color,Adult';
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.postAsPromise(apiUrl, body, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
        else {
            return this.postBinaryData(apiUrl, imageUrlOrData, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
    };
    VisionDataService.prototype.ocr = function (imageUrlOrData) {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        var apiUrl = this.apiServer + 'vision/v1.0/ocr';
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.postAsPromise(apiUrl, body, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
        else {
            return this.postBinaryData(apiUrl, imageUrlOrData, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
    };
    VisionDataService.prototype.generateThumbnail = function (imageUrlOrData, width, height, smartCropping) {
        if (smartCropping === void 0) { smartCropping = false; }
        var apiUrl = this.textApiServer + "vision/v1.0/generateThumbnail?width=" + width.toString() + "&height=" + height.toString();
        if (smartCropping) {
            apiUrl += '&smartCropping=true';
        }
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.postAsPromise(apiUrl, body, this.cognitiveApiService.subscriptionKeys.computerVision, __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].ArrayBuffer);
        }
        else {
            return this.postBinaryData(apiUrl, imageUrlOrData, this.cognitiveApiService.subscriptionKeys.computerVision, __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].ArrayBuffer);
        }
    };
    return VisionDataService;
}(__WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]));
VisionDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cognitive_api_service__["a" /* CognitiveApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cognitive_api_service__["a" /* CognitiveApiService */]) === "function" && _b || Object])
], VisionDataService);

var _a, _b;
//# sourceMappingURL=vision-data.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(361);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(547),
        styles: [__webpack_require__(516)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__computer_vision_computer_vision_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_output_section_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_api_details_header_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_services_data_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_vision_data_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_services_cognitive_api_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_font_awesome_css_font_awesome_css__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_font_awesome_css_font_awesome_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_font_awesome_css_font_awesome_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_hero_banner_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_contact_data_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__computer_vision_computer_vision_component__["a" /* ComputerVisionComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directives_output_section_component__["a" /* OutputSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directives_api_details_header_component__["a" /* ApiHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__directives_hero_banner_component__["a" /* HeroBannerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap__["a" /* Ng2BootstrapModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10_app_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_12_app_services_cognitive_api_service__["a" /* CognitiveApiService */],
            __WEBPACK_IMPORTED_MODULE_11_app_services_vision_data_service__["a" /* VisionDataService */],
            __WEBPACK_IMPORTED_MODULE_16__services_contact_data_service__["a" /* ContactDataService */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap__["b" /* ComponentLoaderFactory */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap__["c" /* PositioningService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitiveApiComponent; });
var CognitiveApiComponent = (function () {
    function CognitiveApiComponent() {
        this.errorMessage = '';
    }
    CognitiveApiComponent.prototype.onFileDialogOpen = function (event) {
        event.preventDefault();
        $(event.target).next().click(); // click the input file textbox
        return false;
    };
    return CognitiveApiComponent;
}());

//# sourceMappingURL=cognitive-api.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vision_data_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cognitive_api_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vision_api_component__ = __webpack_require__(359);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerVisionComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComputerVisionComponent = (function (_super) {
    __extends(ComputerVisionComponent, _super);
    function ComputerVisionComponent(sanitizer, titleService, visionDataService, cognitiveApiService) {
        var _this = _super.call(this, sanitizer) || this;
        _this.sanitizer = sanitizer;
        _this.titleService = titleService;
        _this.visionDataService = visionDataService;
        _this.cognitiveApiService = cognitiveApiService;
        _this.errorMessage = '';
        _this.showJSON = false;
        _this.apiTitle = 'Creative Asset Analyzer Algorithm';
        _this.apiBackgroundImage = '/assets/COSMOS-DeeperPersonalization-NoLoop';
        _this.apiDescription = 'Every photo tells a story, and machine-learning can decipher that story, extract its information, process, filter, and categorize it for you.';
        _this.apiReferenceUrl = 'https://dev.projectoxford.ai/docs/services/56f91f2d778daf23d8ec6739';
        _this.showCodeButtons = true;
        _this.showLargeCodeWindow = false;
        _this.titleService.setTitle(_this.apiTitle);
        return _this;
    }
    ;
    ComputerVisionComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.imageList = this.cognitiveApiService.objectImageUrls;
        this.internetImageUrl = this.cognitiveApiService.objectImageUrls[0];
        this.onInternetUrlSelected();
    };
    ComputerVisionComponent.prototype.bestDescription = function () {
        if (!this.imageFeatures || !this.imageFeatures.description) {
            return null;
        }
        return this.imageFeatures.description.captions.reduce(function (prev, current) {
            return (prev.confidence > current.confidence) ? prev : current;
        });
    };
    ComputerVisionComponent.prototype.highConfidenceTags = function () {
        return this.imageFeatures.tags.filter(function (tag) {
            return tag.confidence >= 0.5;
        }).map(function (tag) {
            return tag.name;
        }).join(', ');
    };
    ComputerVisionComponent.prototype.lowConfidenceTags = function () {
        return this.imageFeatures.tags.filter(function (tag) {
            return tag.confidence < 0.5;
        }).map(function (tag) {
            return tag.name;
        }).join(', ');
    };
    ComputerVisionComponent.prototype.toggleJSON = function (b) {
        this.showJSON = b;
    };
    ComputerVisionComponent.prototype.onResize = function () {
        this.clearFaces();
        this.processFaces();
    };
    ComputerVisionComponent.prototype.refreshDetection = function () {
        var _this = this;
        this.clearFaces();
        this.errorMessage = "";
        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        }
        else {
            this.isLoading = true;
            this.visionDataService.analyze(this.selectedImageUrl)
                .then(function (imageFeatures) {
                _this.imageFeatures = imageFeatures;
                _this.isLoading = false;
                _this.processFaces();
            })
                .catch(function (error) {
                _this.errorMessage = error;
                _this.isLoading = false;
            });
        }
    };
    ComputerVisionComponent.prototype.processFile = function (result) {
        var _this = this;
        this.isLoading = true;
        this.visionDataService.analyze(result)
            .then(function (imageFeatures) {
            _this.imageFeatures = imageFeatures;
            _this.isLoading = false;
            _this.processFaces();
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.isLoading = false;
        });
    };
    // private fireFaceDetectingEvent(): void {
    //   this.faceDetecting.emit({ cameraName: this.cameraName });
    // }
    // private fireFaceDetectedEvent(): void {
    //   this.faceDetected.emit({ url: this.imageUrl, bytes: this.bytes, faceIds: this.faceIds, cameraName: this.cameraName });
    // }
    ComputerVisionComponent.prototype.processFaces = function () {
        var _this = this;
        if (!this.selectedImage) {
            return;
        }
        if (this.imageFeatures.faces) {
            this.imageFeatures.faces.forEach(function (face) {
                _this.faceRectangles.push(_this.processFaceRectangle(face.faceRectangle));
            });
            // var hoverEvent = (containerIndex == 0 ? 'onmouseover="showFaceInfo(' + i + ',this,' + containerIndex
            //     + ')" onmouseout="hideImginfo(this)"' : '');
            // $(".floatingCirclesG", imageContainer.container).before('<div ' + hoverEvent + ' bw="5" faceid="' + f.faceId
            //     + '" class="labelbox  labelpointer" style="' + style + '" ><div class="'
            //     + (f.faceAttributes.gender.toLowerCase() == "male" ? "malelabelboxborder" : "femalelabelboxborder") + '"></div></div>');
        }
    };
    return ComputerVisionComponent;
}(__WEBPACK_IMPORTED_MODULE_4__vision_api_component__["a" /* VisionApiComponent */]));
ComputerVisionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'computer-vision',
        template: __webpack_require__(548),
        styles: [__webpack_require__(517)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_vision_data_service__["a" /* VisionDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_vision_data_service__["a" /* VisionDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_cognitive_api_service__["a" /* CognitiveApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cognitive_api_service__["a" /* CognitiveApiService */]) === "function" && _d || Object])
], ComputerVisionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=computer-vision.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiHeaderComponent = (function () {
    function ApiHeaderComponent() {
    }
    ApiHeaderComponent.prototype.ngOnInit = function () {
    };
    return ApiHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], ApiHeaderComponent.prototype, "apiTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], ApiHeaderComponent.prototype, "apiDescription", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], ApiHeaderComponent.prototype, "apiDescription2", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], ApiHeaderComponent.prototype, "rowStyleClass", void 0);
ApiHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'api-details-header',
        template: __webpack_require__(549),
        styles: [__webpack_require__(518)]
    }),
    __metadata("design:paramtypes", [])
], ApiHeaderComponent);

//# sourceMappingURL=api-details-header.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_data_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroBannerComponent = (function () {
    function HeroBannerComponent(contactDataService) {
        this.contactDataService = contactDataService;
        this.rightJustify = false;
        this.showContactButton = true;
        this.fullSize = true;
        this.showDevPortalActionButton = true;
        this.modalHeight = (window.innerHeight - 170).toString() + "px";
    }
    HeroBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorMessage = "";
        this.successMessage = "";
        this.submitted = false;
        this.contactUs = {
            firstName: '',
            lastName: '',
            email: '',
            organization: '',
            role: ''
        };
        window.onresize = function (ev) {
            _this.modalHeight = (window.innerHeight - 170).toString() + "px";
        };
    };
    HeroBannerComponent.prototype.showChildModal = function () {
        this.contactModal.show();
    };
    HeroBannerComponent.prototype.openDeveloperPortal = function () {
        window.open("https://cosmosai.portal.azure-api.net/", "_self");
    };
    HeroBannerComponent.prototype.submitForm = function () {
        var _this = this;
        this.submitted = true;
        this.contactDataService.post(this.contactUs).then(function () {
            _this.successMessage = "Thank you for contacting us.";
            setTimeout(function () {
                _this.contactModal.hide();
            }, 3000);
        })
            .catch(function (reason) {
            _this.errorMessage = "Error attempting to send contact request.";
        });
    };
    return HeroBannerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], HeroBannerComponent.prototype, "apiTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], HeroBannerComponent.prototype, "apiDescription", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], HeroBannerComponent.prototype, "apiBackgroundImage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], HeroBannerComponent.prototype, "apiReferenceUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Boolean)
], HeroBannerComponent.prototype, "lightBackground", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], HeroBannerComponent.prototype, "rightJustify", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], HeroBannerComponent.prototype, "showContactButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], HeroBannerComponent.prototype, "fullSize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Object)
], HeroBannerComponent.prototype, "showDevPortalActionButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('contactModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["d" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["d" /* ModalDirective */]) === "function" && _a || Object)
], HeroBannerComponent.prototype, "contactModal", void 0);
HeroBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'hero-banner',
        template: __webpack_require__(550),
        styles: [__webpack_require__(519)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_data_service__["a" /* ContactDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contact_data_service__["a" /* ContactDataService */]) === "function" && _b || Object])
], HeroBannerComponent);

var _a, _b;
//# sourceMappingURL=hero-banner.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputSectionComponent = (function () {
    function OutputSectionComponent() {
    }
    OutputSectionComponent.prototype.ngOnInit = function () {
    };
    OutputSectionComponent.prototype.toggleJSON = function (b) {
        this.showJSON = b;
    };
    return OutputSectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Boolean)
], OutputSectionComponent.prototype, "showButtons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], OutputSectionComponent.prototype, "buttonContextText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Boolean)
], OutputSectionComponent.prototype, "isApiResultLoading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", String)
], OutputSectionComponent.prototype, "jsonText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(),
    __metadata("design:type", Boolean)
], OutputSectionComponent.prototype, "showJSON", void 0);
OutputSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'output-section',
        template: __webpack_require__(551),
        styles: [__webpack_require__(520)]
    }),
    __metadata("design:paramtypes", [])
], OutputSectionComponent);

//# sourceMappingURL=output-section.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognitive_api_component__ = __webpack_require__(354);
/* unused harmony export ImageSelectedEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionApiComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageSelectedEvent = (function () {
    function ImageSelectedEvent() {
    }
    return ImageSelectedEvent;
}());

var VisionApiComponent = (function (_super) {
    __extends(VisionApiComponent, _super);
    function VisionApiComponent(sanitizer) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        _this.imageSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        _this.faceRectangles = [];
        _this.faceIds = [];
        return _this;
    }
    VisionApiComponent.prototype.clearFaces = function () {
        this.faceRectangles = [];
    };
    VisionApiComponent.prototype.onInternetUrlSelected = function () {
        this.selectedImageUrl = this.internetImageUrl;
        this.imageSelected.emit({ imagePath: this.internetImageUrl });
        this.refreshDetection();
    };
    VisionApiComponent.prototype.selectStockImage = function (imagePath) {
        if (!this.isLoading) {
            this.selectedImageUrl = imagePath;
            this.internetImageUrl = imagePath;
            this.imageSelected.emit({ imagePath: this.internetImageUrl });
            this.refreshDetection();
        }
    };
    VisionApiComponent.prototype.onFilesSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        this.selectedImageUrl = url;
        this.internetImageUrl = '';
        this.clearFaces();
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            _this.processFile(fileReader.result);
        };
        fileReader.readAsArrayBuffer(file);
        event.target.value = '';
    };
    VisionApiComponent.prototype.onFilesClicked = function (event) {
        event.target.value = "";
    };
    VisionApiComponent.prototype.selectedImageLoaded = function (event) {
        this.selectedImage = event.target;
        this.imagePosition = {
            container: this.selectedImage.parentElement,
            scale: this.selectedImage.width / this.selectedImage.naturalWidth
        };
    };
    VisionApiComponent.prototype.processFaceRectangle = function (faceRectangle) {
        var top = (faceRectangle.top * this.imagePosition.scale + this.selectedImage.offsetTop) / this.imagePosition.container.clientHeight * 100;
        var left = (faceRectangle.left * this.imagePosition.scale + this.selectedImage.offsetLeft) / this.imagePosition.container.clientWidth * 100;
        var width = (faceRectangle.width * this.imagePosition.scale) / this.imagePosition.container.clientWidth * 100;
        var height = (faceRectangle.height * this.imagePosition.scale) / this.imagePosition.container.clientHeight * 100;
        var faceRectangleStyle = {
            percentTop: top,
            percentLeft: left,
            percentWidth: width,
            percentHeight: height
        };
        return faceRectangleStyle;
    };
    return VisionApiComponent;
}(__WEBPACK_IMPORTED_MODULE_1__cognitive_api_component__["a" /* CognitiveApiComponent */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], VisionApiComponent.prototype, "imageSelected", void 0);
//# sourceMappingURL=vision-api.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    parametersUrl: "/api"
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "h2, h4 {\r\n    text-align: center;\r\n}\r\n.image-features {\r\n    background-color:rgba(255,255,255,0.4);\r\n    position:absolute;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    color: black;\r\n}\r\n.result-section table {\r\n    background-color:white;\r\n}\r\n.result-label {\r\n    width:50px;\r\n}\r\n.result-description {\r\n    width:70%;\r\n}\r\n.result-color-box {\r\n    width:20px;\r\n    height:20px;\r\n    border-style:solid;\r\n    border-color:black;\r\n}\r\n.filmstrip-row {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    text-align: center\r\n}\r\n\r\napi-details-header\r\n{\r\n    margin-bottom: 25px;\r\n    margin-top:5px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px; \r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".outer-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -20px;\r\n}\r\n.inner-container {\r\n    display: inline-block;\r\n    position: relative;\r\n    overflow: hidden;\r\n    width:100%;\r\n    background-color: black;\r\n}\r\n.inner-container-blue {\r\n    background-color: black;\r\n}\r\n.inner-container-fullsize {\r\n    max-height: 415px;\r\n}\r\n.inner-container-condensedsize {\r\n    max-height: 375px;\r\n}\r\n.right-justify-video {\r\n    position:relative;\r\n    clear:both;\r\n    right: 50px;\r\n}\r\n.right-justify-video > div {\r\n    float:right;\r\n    text-align:right;\r\n}\r\n.right-justify-video video {\r\n    border-radius: 12px 12px 0 0;\r\n    border: 6px solid #fff;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.hero-banner__content {\r\n    margin-top: 50px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n}\r\n.modal-dialog {\r\n    margin-top:50px;\r\n}\r\n.modal-body {\r\n    overflow-y: scroll;\r\n}\r\n.alert-danger {\r\n    height: 28px;\r\n    line-height: 0px;\r\n}\r\n.video-overlay {\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    /*height: 415px;*/\r\n    height:-webkit-fit-content;\r\n    height:-moz-fit-content;\r\n    height:fit-content;\r\n    background-position: center top;\r\n    background-repeat: no-repeat;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    /*margin-top: -20px;*/\r\n    margin-top:0px;\r\n    width: 100%;\r\n}\r\nvideo {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: 71px;\r\n}\r\n\r\n.fusion-button-wrapper {\r\n    margin-top: 35px;;\r\n}\r\n\r\n.button-large {\r\n    padding: 13px 29px;\r\n    line-height: 17px;\r\n    font-size: 14px;\r\n}\r\n\r\n.fusion-button-text, .fusion-button.button i {\r\n    color: #fff;\r\n}\r\n\r\n.fusion-button.button {\r\n    border-width: 0px;\r\n    border-color: #fff;\r\n    text-decoration: none;\r\n    color: #fff;\r\n}\r\n\r\n.fusion-button.button:hover .fusion-button-icon-divider, .fusion-button.button:hover .fusion-button-icon-divider, .fusion-button.button:active .fusion-button-icon-divider {\r\n    border-color: #fff;\r\n}\r\n\r\n.fusion-button.button {\r\n    background: #32b2e8;\r\n}\r\n\r\n.fusion-button.button:hover, .button:focus, .fusion-button.button:active {\r\n    background: #00a3e8;\r\n}\r\n\r\n.fusion-button.button {\r\n    width: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".output-section {\r\n    width:100%;\r\n    height: inherit;\r\n    background-color: lightgray;\r\n    \r\n}\r\n\r\n.output-section-formatted-content {\r\n    width:100%;\r\n    height: 208px;\r\n    border:  1px solid #ddd\r\n}\r\n\r\n.code-noButtons {\r\n    border: none;\r\n    background-color: #f5f5f5;\r\n    min-height:160px;\r\n    height: 100%;\r\n    width:100%;\r\n    overflow-x:scroll;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.code-withButtons {\r\n    border: none;\r\n    background-color: #f5f5f5;\r\n    min-height:160px;\r\n    height: 100%;\r\n    width:100%;\r\n    overflow-x:scroll;\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n.code-container-withButtons\r\n{\r\n    min-height:160px;\r\n    height: calc(100% - 34px);\r\n    top: 34px;\r\n    width:100%;\r\n}\r\n\r\n\r\n.code-container-noButtons\r\n{\r\n    min-height:160px;\r\n    height: inherit;\r\n    width:100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 159,
	"./af.js": 159,
	"./ar": 166,
	"./ar-dz": 160,
	"./ar-dz.js": 160,
	"./ar-kw": 161,
	"./ar-kw.js": 161,
	"./ar-ly": 162,
	"./ar-ly.js": 162,
	"./ar-ma": 163,
	"./ar-ma.js": 163,
	"./ar-sa": 164,
	"./ar-sa.js": 164,
	"./ar-tn": 165,
	"./ar-tn.js": 165,
	"./ar.js": 166,
	"./az": 167,
	"./az.js": 167,
	"./be": 168,
	"./be.js": 168,
	"./bg": 169,
	"./bg.js": 169,
	"./bn": 170,
	"./bn.js": 170,
	"./bo": 171,
	"./bo.js": 171,
	"./br": 172,
	"./br.js": 172,
	"./bs": 173,
	"./bs.js": 173,
	"./ca": 174,
	"./ca.js": 174,
	"./cs": 175,
	"./cs.js": 175,
	"./cv": 176,
	"./cv.js": 176,
	"./cy": 177,
	"./cy.js": 177,
	"./da": 178,
	"./da.js": 178,
	"./de": 181,
	"./de-at": 179,
	"./de-at.js": 179,
	"./de-ch": 180,
	"./de-ch.js": 180,
	"./de.js": 181,
	"./dv": 182,
	"./dv.js": 182,
	"./el": 183,
	"./el.js": 183,
	"./en-au": 184,
	"./en-au.js": 184,
	"./en-ca": 185,
	"./en-ca.js": 185,
	"./en-gb": 186,
	"./en-gb.js": 186,
	"./en-ie": 187,
	"./en-ie.js": 187,
	"./en-nz": 188,
	"./en-nz.js": 188,
	"./eo": 189,
	"./eo.js": 189,
	"./es": 191,
	"./es-do": 190,
	"./es-do.js": 190,
	"./es.js": 191,
	"./et": 192,
	"./et.js": 192,
	"./eu": 193,
	"./eu.js": 193,
	"./fa": 194,
	"./fa.js": 194,
	"./fi": 195,
	"./fi.js": 195,
	"./fo": 196,
	"./fo.js": 196,
	"./fr": 199,
	"./fr-ca": 197,
	"./fr-ca.js": 197,
	"./fr-ch": 198,
	"./fr-ch.js": 198,
	"./fr.js": 199,
	"./fy": 200,
	"./fy.js": 200,
	"./gd": 201,
	"./gd.js": 201,
	"./gl": 202,
	"./gl.js": 202,
	"./gom-latn": 203,
	"./gom-latn.js": 203,
	"./he": 204,
	"./he.js": 204,
	"./hi": 205,
	"./hi.js": 205,
	"./hr": 206,
	"./hr.js": 206,
	"./hu": 207,
	"./hu.js": 207,
	"./hy-am": 208,
	"./hy-am.js": 208,
	"./id": 209,
	"./id.js": 209,
	"./is": 210,
	"./is.js": 210,
	"./it": 211,
	"./it.js": 211,
	"./ja": 212,
	"./ja.js": 212,
	"./jv": 213,
	"./jv.js": 213,
	"./ka": 214,
	"./ka.js": 214,
	"./kk": 215,
	"./kk.js": 215,
	"./km": 216,
	"./km.js": 216,
	"./kn": 217,
	"./kn.js": 217,
	"./ko": 218,
	"./ko.js": 218,
	"./ky": 219,
	"./ky.js": 219,
	"./lb": 220,
	"./lb.js": 220,
	"./lo": 221,
	"./lo.js": 221,
	"./lt": 222,
	"./lt.js": 222,
	"./lv": 223,
	"./lv.js": 223,
	"./me": 224,
	"./me.js": 224,
	"./mi": 225,
	"./mi.js": 225,
	"./mk": 226,
	"./mk.js": 226,
	"./ml": 227,
	"./ml.js": 227,
	"./mr": 228,
	"./mr.js": 228,
	"./ms": 230,
	"./ms-my": 229,
	"./ms-my.js": 229,
	"./ms.js": 230,
	"./my": 231,
	"./my.js": 231,
	"./nb": 232,
	"./nb.js": 232,
	"./ne": 233,
	"./ne.js": 233,
	"./nl": 235,
	"./nl-be": 234,
	"./nl-be.js": 234,
	"./nl.js": 235,
	"./nn": 236,
	"./nn.js": 236,
	"./pa-in": 237,
	"./pa-in.js": 237,
	"./pl": 238,
	"./pl.js": 238,
	"./pt": 240,
	"./pt-br": 239,
	"./pt-br.js": 239,
	"./pt.js": 240,
	"./ro": 241,
	"./ro.js": 241,
	"./ru": 242,
	"./ru.js": 242,
	"./sd": 243,
	"./sd.js": 243,
	"./se": 244,
	"./se.js": 244,
	"./si": 245,
	"./si.js": 245,
	"./sk": 246,
	"./sk.js": 246,
	"./sl": 247,
	"./sl.js": 247,
	"./sq": 248,
	"./sq.js": 248,
	"./sr": 250,
	"./sr-cyrl": 249,
	"./sr-cyrl.js": 249,
	"./sr.js": 250,
	"./ss": 251,
	"./ss.js": 251,
	"./sv": 252,
	"./sv.js": 252,
	"./sw": 253,
	"./sw.js": 253,
	"./ta": 254,
	"./ta.js": 254,
	"./te": 255,
	"./te.js": 255,
	"./tet": 256,
	"./tet.js": 256,
	"./th": 257,
	"./th.js": 257,
	"./tl-ph": 258,
	"./tl-ph.js": 258,
	"./tlh": 259,
	"./tlh.js": 259,
	"./tr": 260,
	"./tr.js": 260,
	"./tzl": 261,
	"./tzl.js": 261,
	"./tzm": 263,
	"./tzm-latn": 262,
	"./tzm-latn.js": 262,
	"./tzm.js": 263,
	"./uk": 264,
	"./uk.js": 264,
	"./ur": 265,
	"./ur.js": 265,
	"./uz": 267,
	"./uz-latn": 266,
	"./uz-latn.js": 266,
	"./uz.js": 267,
	"./vi": 268,
	"./vi.js": 268,
	"./x-pseudo": 269,
	"./x-pseudo.js": 269,
	"./yo": 270,
	"./yo.js": 270,
	"./zh-cn": 271,
	"./zh-cn.js": 271,
	"./zh-hk": 272,
	"./zh-hk.js": 272,
	"./zh-tw": 273,
	"./zh-tw.js": 273
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 525;


/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<computer-vision></computer-vision>\r\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'\r\n             [apiBackgroundImage]='apiBackgroundImage' [apiReferenceUrl]='apiReferenceUrl'>\r\n</hero-banner>\r\n\r\n<div class=\"maindiv\">\r\n    \r\n    <api-details-header \r\n        apiTitle=\"Analyze an Image\"\r\n        apiDescription=\"The Creative Asset Analyzer API takes an input image and returns information about it, such as a brief description, identifiable faces, relevant tags, and more. You can also flag adult content, distinguish color schemes, and categorize images. The Creative Asset Analyzer API can even read handwritten text from an image.\"\r\n        rowStyleClass=\"tablerow1\"\r\n    >\r\n        <div api-content (window:resize)=\"onResize($event)\">\r\n            <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n        \r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                    <div class=\"img_container\">\r\n                        <img [src]=\"selectedImageUrl\" alt=\"Selected Image\" class=\"selected-image\" (load)=\"selectedImageLoaded($event)\" />\r\n                        <div *ngFor=\"let faceRectangle of faceRectangles\"\r\n                            [style.top]=\"faceRectangle.percentTop + '%'\"\r\n                            [style.left]=\"faceRectangle.percentLeft +'%'\"\r\n                            [style.width]=\"faceRectangle.percentWidth + '%'\"\r\n                            [style.height]=\"faceRectangle.percentHeight + '%'\"\r\n                            class=\"face-rectangle\">\r\n                        </div>\r\n                        <div *ngFor=\"let faceRectangle of faceRectangles; let i = index\"\r\n                            class=\"face-rectangle image-features\"\r\n                                [style.top]=\"(faceRectangle.percentTop + faceRectangle.percentHeight) + '%'\" \r\n                                [style.left]=\"faceRectangle.percentLeft +'%'\"\r\n                                [style.min-width]=\"faceRectangle.percentWidth + '%'\">\r\n                            <span *ngIf=\"imageFeatures.faces && imageFeatures.faces[i]\">{{imageFeatures.faces[i].gender}}, age:{{imageFeatures.faces[i].age}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" data-defaultValue=\"Image URL\" [(ngModel)]=\"internetImageUrl\" />\r\n\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\" (click)=\"onInternetUrlSelected()\">\r\n                                <span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>\r\n                            </button>\r\n                            <label class=\"btn btn-default\" type=\"button\">\r\n                                <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\" (click)=\"onFileDialogOpen($event)\"></span>\r\n                                <input type=\"file\" (change)=\"onFilesSelected($event)\" accept=\"image/bmp,image/jpeg,image/png,image/gif\">\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row filler\"></div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                    <output-section style=\"height:420px\"\r\n                        [showButtons]=\"showCodeButtons\" \r\n                        [isApiResultLoading]=\"isLoading\"\r\n                        buttonContextText=\"Results\" \r\n                        jsonText=\"{{ imageFeatures | json }}\"\r\n                    >\r\n                            <div formatted-output style=\"height: 390px;overflow-y: scroll\">\r\n                                <h4>Image Features</h4>\r\n                                <table class=\"table table-bordered\">\r\n                                    <tr *ngIf=\"imageFeatures && imageFeatures.description\">\r\n                                        <td class=\"result-label\">Description:</td>\r\n                                        <td>\r\n                                            <span class=\"result-description\">{{bestDescription().text}}</span>\r\n                                            <div class=\"progress\">\r\n                                                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" [style.width]=\"(bestDescription().confidence * 100).toString() + '%'\">{{bestDescription().confidence | percent:'1.0-0'}}</div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"imageFeatures && imageFeatures.color\">\r\n                                        <td class=\"result-label\">Dominant background:</td>\r\n                                        <td>\r\n                                            <div [style.background-color]=\"imageFeatures.color.dominantColorBackground\" class=\"result-color-box\"></div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"imageFeatures && imageFeatures.color\">\r\n                                        <td class=\"result-label\">Dominant foreground:</td>\r\n                                        <td>\r\n                                            <div [style.background-color]=\"imageFeatures.color.dominantColorForeground\"  class=\"result-color-box\"></div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"imageFeatures && imageFeatures.color\">\r\n                                        <td class=\"result-label\">Accent:</td>\r\n                                        <td>\r\n                                            <div [style.background-color]=\"'#'+imageFeatures.color.accentColor\"  class=\"result-color-box\"></div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"imageFeatures && imageFeatures.tags\">\r\n                                        <td class=\"result-label\">High confidence tags:</td>\r\n                                        <td>\r\n                                            <div>{{highConfidenceTags()}}</div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"imageFeatures && imageFeatures.tags\">\r\n                                        <td class=\"result-label\">Low confidence tags:</td>\r\n                                        <td>\r\n                                            <div>{{lowConfidenceTags()}}</div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                    </output-section>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row filmstrip-row bottom-padding container\">\r\n                <div *ngFor=\"let imagePath of imageList\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2 filmstrip\">\r\n                    <img [src]=\"imagePath\" (click)=\"selectStockImage(imagePath)\" [ngClass]=\"imagePath === internetImageUrl ? 'selected' : ''\" />\r\n                </div>\r\n            </div>        \r\n        </div>\r\n    </api-details-header>\r\n</div>\r\n\r\n<!--<computer-vision-celebrities></computer-vision-celebrities>\r\n<computer-vision-read-text></computer-vision-read-text>\r\n<computer-vision-thumbnail></computer-vision-thumbnail>-->\r\n\r\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"{{rowStyleClass}} clearfix\" style=\"margin-bottom: 25px;margin-top:5px;padding-top: 10px;padding-bottom:10px\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <h2>{{apiTitle}}</h2>\r\n        </div>\r\n\r\n        <div class=\"row api-description\">\r\n            {{apiDescription}}\r\n        </div>\r\n\r\n        <div class=\"row api-description\">\r\n            {{apiDescription2}}\r\n        </div>\r\n\r\n        <div class=\"container clearfix\">\r\n            <ng-content select=\"[api-content]\"></ng-content>\r\n        </div>\r\n\r\n        <div class=\"container clearfix\">\r\n            <ng-content select=\"[feature-info-group]\"></ng-content>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-container hidden-xs\">\r\n    <div class=\"inner-container\"\r\n        [ngClass]=\"{'inner-container-fullsize': fullSize, 'inner-container-condensedsize': !fullSize, 'inner-container-blue': rightJustify}\">\r\n        <video *ngIf=\"!rightJustify\" poster=\"{{apiBackgroundImage}}.jpg\" src=\"{{apiBackgroundImage}}.mp4\"\r\n                autoplay loop>\r\n            <source src\"{{apiBackgroundImage}}.mp4\" type=\"video/mp4\">\r\n        </video>\r\n        <div class=\"right-justify-video\" *ngIf=\"rightJustify\">\r\n            <div>\r\n                <video src=\"{{apiBackgroundImage}}.mp4\" autoplay loop></video>\r\n            </div>\r\n        </div>\r\n        <div class=\"video-overlay\" style=\"vertical-align: middle\">\r\n            <div class=\"hero-banner__content container\" style=\"vertical-align: middle\">\r\n                    <div class=\"col-sm-12\" style=\"vertical-align: middle\">\r\n                        <h1 [ngClass]=\"{'text--light text--lg text--white': !lightBackground, 'text--lg': lightBackground}\" style=\"color:white;\">{{apiTitle}}</h1>\r\n                        <p [ngClass]=\"{'text--semilight text--sm text--white': !lightBackground}\" class=\"hero-copy\" style=\"color:white;\">\r\n                            {{apiDescription}}\r\n                        <!--div *ngIf=\"showDevPortalActionButton\" class=\"fusion-button-wrapper fusion-alignright\">\r\n                            <a class=\"fusion-button button-flat button-square button-large button-custom button cursor-pointer\" (click)=\"openDeveloperPortal()\">\r\n                                Get Started Now\r\n                            </a>\r\n                        </div-->\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"hero-banner-container row visible-xs\" [style.background-image]=\"'url(' + apiBackgroundImage + '.jpg)'\">\r\n    <div class=\"hero-banner__content-container\">\r\n        <div class=\"hero-banner__content container col-sm-12 clearfix\">\r\n            <div style=\"vertical-align: middle\">\r\n            <h1 [ngClass]=\"{'text--light text--lg text--white': !lightBackground, 'text--lg': lightBackground}\">{{apiTitle}}</h1>\r\n            <p [ngClass]=\"{'text--semilight text--sm text--white': !lightBackground}\">\r\n                {{apiDescription}}\r\n            </p>\r\n\r\n                <!--div *ngIf=\"showDevPortalActionButton\" class=\"fusion-button-wrapper fusion-alignright\">\r\n                    <a class=\"fusion-button button-flat button-square button-large button-custom button cursor-pointer\" (click)=\"openDeveloperPortal()\">\r\n                        Get Started Now\r\n                    </a>\r\n                </div-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div bsModal #contactModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"contactModal\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"contactModal.hide()\" aria-label=\"Close\">\r\n                    <span>&times;</span>\r\n                </button>\r\n                <h2 class=\"modal-title\">Contact us</h2>\r\n            </div>\r\n            <div class=\"modal-body\" [style.max-height]=\"modalHeight\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n                <div class=\"alert alert-success\" *ngIf=\"successMessage\">{{successMessage}}</div>\r\n                <p>Get a free COSMOS\\u2122 demo and learn how to power your existing marketing technology with&nbsp;AI.</p>\r\n                <form (ngSubmit)=\"submitForm()\" #contactForm=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"firstName\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            required\r\n                            [(ngModel)]=\"contactUs.firstName\" name=\"firstName\"\r\n                            #contactFirstName=\"ngModel\" />\r\n                        <div [hidden]=\"contactFirstName.valid || contactFirstName.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            First name is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastName\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            required\r\n                            [(ngModel)]=\"contactUs.lastName\" name=\"lastName\"\r\n                            #contactLastName=\"ngModel\" >\r\n                        <div [hidden]=\"contactLastName.valid || contactLastName.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            Last name is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\"\r\n                            required\r\n                            [(ngModel)]=\"contactUs.email\" name=\"email\"\r\n                            #contactEmailAddress=\"ngModel\" >\r\n                        <div [hidden]=\"contactEmailAddress.valid || contactEmailAddress.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            Email is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"organization\">Organization</label>\r\n                        <input type=\"text\" class=\"form-control\"\r\n                            required\r\n                            [(ngModel)]=\"contactUs.organization\" name=\"organization\"\r\n                            #contactOrganization=\"ngModel\" >\r\n                        <div [hidden]=\"contactOrganization.valid || contactOrganization.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            Organization is required\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"role\">Role/Title</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"role\"\r\n                            required\r\n                            [(ngModel)]=\"contactUs.role\" name=\"role\"\r\n                            #contactRole=\"ngModel\" >\r\n                        <div [hidden]=\"contactRole.valid || contactRole.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            Role/Title is required\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!contactForm.form.valid || submitted\">Submit</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"contactModal.hide()\">Cancel</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div class=\"output-section\"  style=\"overflow: hidden;\">\r\n    <div style=\"height: inherit\">\r\n        <div *ngIf=\"!isApiResultLoading\" style=\"height: inherit\">\r\n            <div class=\"btn-group btn-group-justified\" role=\"group\" *ngIf=\"showButtons\">\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button class=\"btn btn-info\" [ngClass]=\"{'active': !showJSON }\" (click)=\"toggleJSON(false)\">{{buttonContextText}}</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <button class=\"btn btn-info\" [ngClass]=\"{'active': showJSON }\" (click)=\"toggleJSON(true)\">JSON</button>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"code-container-withButtons\" *ngIf=\"showButtons\"  [hidden]=\"!showJSON\">\r\n                <pre class=\"code-withButtons\" *ngIf=\"showButtons\" style=\"overflow: scroll;\">{{jsonText}}</pre>\r\n            </div>\r\n            <div class=\"code-container-noButtons\" *ngIf=\"!showButtons\"   [hidden]=\"!showJSON\">\r\n                <pre class=\"code-noButtons\" style=\"overflow: scroll;\">{{jsonText}}</pre>\r\n            </div>\r\n            <div [hidden]=\"showJSON\">\r\n                <ng-content select=\"[formatted-output]\"></ng-content>\r\n            </div>\r\n        </div>\r\n        <h1 class=\"text-info display-middle\" *ngIf=\"isApiResultLoading\"><i class=\"glyphicon glyphicon-refresh spinning\"></i></h1>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitiveApiService; });
/* unused harmony export ImagePair */
var CognitiveApiService = (function () {
    function CognitiveApiService() {
        this.subscriptionKeys = {
            // Add your own API keys here - only API keys used by this accelerator are needed
            //  emotion: 'xxxxxx',              
            //  textAnalytics: 'xxxxxx',              
            computerVision: '1954a26f8af24de1a0d399212ba91ef5',
        };
        this.faceImageUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection1.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection2.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection3.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection4.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection5.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection6.jpg'
            // 'https://cosmosstore.blob.core.windows.net/images/AlanWexler.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/ShannonDenton.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/EdFalconer.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/EllaChinitz.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/JacobWalker.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/KylePloessl.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/RayVelez.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/SamihFadli.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/ScottLair.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/SheldonMonteiro.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/TimAshby.jpg',
            // 'https://cosmosstore.blob.core.windows.net/images/MauriceLevy.jpg'
        ];
        this.faceImagePairs = [
            {
                image1: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification1.jpg',
                image2: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification2.jpg'
            },
            {
                image1: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification6.jpg',
                image2: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification4.jpg'
            },
            {
                image1: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification4.jpg',
                image2: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification5.jpg'
            }
        ];
        this.emotionImageUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize1.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize2.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize3.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize4.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize5.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize6.jpg'
        ];
        this.emotionVideoUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Video/Emotion-02022017.mp4'
            //'https://portalstoragewuprod.azureedge.net/media/Default/Media/EmotionAPI/framebyframe_demo_emotion1.mp4'
        ];
        this.emotionVideoPosters = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Video/Emotion-Poster-PlaybuttonOverlay-02032017.png'
            // 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/Emotion1_Thumb.png',
            // 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/Emotion2_Thumb.png',
            // 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/Emotion3_Thumb.png'
        ];
        this.objectImageUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 3/3a-AnalyzeImage.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 1/1a-AnalyzeImage.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 2/2a-AnalyzeImage.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 4/4a-AnalyzeImage.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 5/5a-AnalyzeImage.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 6/6a-AnalyzeImage.jpg'
        ];
        this.textImageUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 1/1a-TextImages.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 2/2a-TextImages.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 3/3a-TextImages.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 4/4a-TextImages.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 5/5a-TextImages.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 6/6a-TextImages.jpg'
        ];
        this.thumbnailImageUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 1/1a-Thumbnail.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 2/2a-Thumbnail.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 3/3a-Thumbnail.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 4/4a-Thumbnail.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 5/5a-Thumbnail.jpg',
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 6/6a-Thumbnail.jpg'
        ];
        this.videoUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Video/Detect and track faces/DetectAndTrack-Sidebyside-02012017.mp4'
            //'https://portalstoragewuprod2.azureedge.net/videos/video_demo_face1.mp4'
        ];
        this.videoPosters = [
            'https://cosmosstore.blob.core.windows.net/content/FaceDetectPoster1.jpg',
            'https://cosmosstore.blob.core.windows.net/content/FaceDetectPoster2.jpg',
            'https://cosmosstore.blob.core.windows.net/content/FaceDetectPoster3.jpg'
        ];
        this.analyzeVideoUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Analyze video in near real-time/Face-02022017.mp4'
            //'https://portalstoragewuprod.azureedge.net/media/Default/Media/Computer Vision/framebyframe_demo_tagging1.mp4'
        ];
        this.analyzeVideoPosters = [
            'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/CV1_Thumb.png',
            'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/CV2_Thumb.png',
            'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/CV3_Thumb.png'
        ];
        this.stabilizeShakyVideosUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Video/Stabilize shaky videos/Stabilize-Sidebyside-02012017.mp4'
        ];
        this.detectMotionUrls = [
            'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Video/Detect motion/MotionDetect-02022017.mp4'
        ];
        this.speakers = [
            {
                name: 'Barack Obama',
                imageUrl: 'https://cosmosstore.blob.core.windows.net/images/BarackObama.jpg',
                identificationProfileId: 'bf058f39-538d-4145-bf56-3bb9ec8fa662',
                audio: 'https://cosmosstore.blob.core.windows.net/content/Barack_Obama-Inaugural_Address-enrollment'
            },
            {
                name: 'George W Bush',
                imageUrl: 'https://cosmosstore.blob.core.windows.net/images/GeorgeWBush.jpg',
                identificationProfileId: 'f6af5ac0-1333-43f8-b0eb-307821567b2c',
                audio: 'https://cosmosstore.blob.core.windows.net/content/George_W_Bush-Inaugural_Address-enrollment'
            },
            {
                name: 'Bill Clinton',
                imageUrl: 'https://cosmosstore.blob.core.windows.net/images/BillClinton.jpg',
                identificationProfileId: 'a435a5dc-ed25-49ef-a2d2-ccd4b2e9d65b',
                audio: 'https://cosmosstore.blob.core.windows.net/content/William_J_Clinton-Inaugural_Address-enrollment'
            },
            {
                name: 'George H W Bush',
                imageUrl: 'https://cosmosstore.blob.core.windows.net/images/GeorgeHWBush.jpg',
                identificationProfileId: 'd6cdb1c5-6e1f-401e-a627-adc068fdc0a3',
                audio: 'https://cosmosstore.blob.core.windows.net/content/George_H_W_Bush-Inaugural_Address-enrollment'
            } /*,
            {
                name: 'Ronald Reagan',
                imageUrl: 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/spid/Picture5.jpg',
                identificationProfileId: 'b4421a6b-70e9-45c0-b300-81557a371925',
                audio: 'https://cosmosstore.blob.core.windows.net/content/Ronald_Reagan-Inaugural_Address-enrollment'
            }*/
        ];
    }
    return CognitiveApiService;
}());

var ImagePair = (function () {
    function ImagePair() {
    }
    return ImagePair;
}());

//# sourceMappingURL=cognitive-api.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment_prod__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    //protected cosmosApiServer = "http://localhost:5347/";
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.apiServer = "https://api.cosmos.ai/";
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment_prod__["a" /* environment */].parametersUrl;
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            var datakeys = data.env_variables;
            _this.storageUrl = datakeys.storageUrl;
            _this.localServer = datakeys.localServer;
            _this.textApiServer = datakeys.textApiServer;
            _this.bingApiServer = datakeys.bingApiServer;
            _this.cosmosApiServer = datakeys.cosmosApiServer;
        });
    }
    DataService.prototype.getAsPromise = function (url, key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", false, false);
            return _this.http.get(url, options).toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (reason) {
                var errMsg = _this.logError(reason);
                reject(errMsg);
            });
        });
        return promise;
    };
    DataService.prototype.getAsPromiseWithJWT = function (url) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setJWTHeader();
            return _this.http.get(url, options).toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (reason) {
                var errMsg = _this.logError(reason);
                reject(errMsg);
            });
        });
        return promise;
    };
    DataService.prototype.deleteAsPromiseWithJWT = function (url) {
        var options = this.setJWTHeader();
        return this.http.delete(url, options).toPromise();
    };
    DataService.prototype.getAsPromiseWithAuthorizationToken = function (url, token) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions("", token, false, false);
            return _this.http.get(url, options).toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (reason) {
                var errMsg = _this.logError(reason);
                reject(errMsg);
            });
        });
        return promise;
    };
    DataService.prototype.doPost = function (url, body, options, resolve, reject) {
        var _this = this;
        return this.http.post(url, body, options).toPromise()
            .then(function (response) {
            var contentType = response.headers.get('Content-Type');
            if (contentType.indexOf('json') > -1) {
                resolve(response.json());
            }
            else {
                var data = new Uint8Array(response.arrayBuffer());
                var blob = new Blob([data], { type: contentType });
                resolve(blob);
            }
        })
            .catch(function (reason) {
            var errMsg = _this.logError(reason);
            reject(errMsg);
        });
    };
    DataService.prototype.postTextData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, false, true, false, false, responseType);
            return _this.doPost(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postJSONData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, false, false, false, false, responseType);
            return _this.doPost(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postJSONDataWithJWT = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, false, false, false, false, responseType);
            var token = localStorage.getItem('AUTH');
            options.headers.append("Authorization", token);
            return _this.doPost(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postTextDataWithAuthorizationToken = function (url, body, key, token, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, false, true, false, false, responseType);
            options.headers.append("Authorization", token);
            return _this.doPost(url, body, options, resolve, reject);
        });
    };
    DataService.prototype.postFormData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, false, false, true, false, responseType);
            options.headers.append;
            return _this.doPost(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postBinaryData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, true, false, false, false, responseType);
            return _this.doPost(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postAsPromise = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, "", true, false, false, false, false, responseType);
            return _this.doPost(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postAsPromiseWithMore = function (url, body, key) {
        var _this = this;
        var options = this.setRequestOptions(key, "", true);
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(url, body, options).toPromise()
                .then(function (response) {
                if (response.status == 202) {
                    var operationLocation_1 = response.headers.get('Operation-Location');
                    if (!operationLocation_1) {
                        reject('No Operation-Location header found');
                    }
                    var interval_1 = setInterval(function () {
                        _this.http.get(operationLocation_1, options).toPromise()
                            .then(function (response) {
                            var operationResult = response.json();
                            if (operationResult.status == 'Succeeded') {
                                clearInterval(interval_1);
                                resolve(JSON.parse(operationResult.processingResult));
                            }
                        })
                            .catch(function (reason) {
                            var errMsg = _this.logError(reason);
                            clearInterval(interval_1);
                            reject(errMsg);
                        });
                    }, 5000);
                }
                else {
                    resolve(response.json());
                }
            })
                .catch(function (reason) {
                var errMsg = _this.logError(reason);
                reject(errMsg);
            });
        });
        return promise;
    };
    // getLocationFromHeader(response: Response, key: string) {
    //     var promise = new Promise<T>((resolve, reject) => {
    //         if (response.status == 202) {
    //             let options = this.setRequestOptions(key, true);
    //             let operationLocation = response.headers.get('Operation-Location');
    //             if (!operationLocation) {
    //                 reject('No Operation-Location header found');
    //             }
    //             let interval = setInterval(() => {
    //                 this.http.get(operationLocation, options).toPromise()
    //                     .then((response: Response) => {
    //                         let operationResult = <{ status: string, processingResult: any }>response.json();
    //                         if (operationResult.status == 'Succeeded') {
    //                             clearInterval(interval);
    //                             resolve(<T>JSON.parse(operationResult.processingResult));
    //                         }
    //                     })
    //                     .catch((reason: any) => {
    //                         this.handleError(reason);
    //                         clearInterval(interval);
    //                         reject(reason);
    //                     });
    //             }, 5000);
    //         }
    //         else {
    //             resolve(<T>response.json());
    //         }
    //     });
    //     return promise;
    // }
    // getAsObservable<T>(url: string, key: string) {
    //     let options = this.setRequestOptions(key, false);
    //     return this.http.get(url, options)
    //         .map((response: Response) => <T[]>response.json())
    //         .catch(this.handleError);
    // }
    // postAsObservable<T>(url: string, body: any, key: string) {
    //     let options = this.setRequestOptions(key, true);
    //     return this.http.post(url, JSON.stringify(body), options)
    //         .map((response: Response) => <T>response.json())
    //         .catch(this.handleError);
    // }
    DataService.prototype.getToken = function (subscriptionKey) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onloadend = function () {
                resolve(xhr.response);
            };
            xhr.open('POST', 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken', true);
            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
            xhr.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
            xhr.send(null);
        });
    };
    DataService.prototype.setRequestOptions = function (key, base64Authkey, post, binary, text, form, xml, responseType) {
        if (binary === void 0) { binary = false; }
        if (text === void 0) { text = false; }
        if (form === void 0) { form = false; }
        if (xml === void 0) { xml = false; }
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json; }
        var headersSet = false;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        if (post) {
            if (binary) {
                headers.append('Content-Type', 'application/octet-stream');
            }
            else if (text) {
                headers.append('Content-Type', 'text/plain');
            }
            else if (form) {
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
            }
            else {
                headers.append('Content-Type', 'application/json');
            }
            headersSet = true;
        }
        if (key) {
            headers.append('Ocp-Apim-Subscription-Key', key);
            headersSet = true;
        }
        if (base64Authkey) {
            headers.append('Authorization', 'Bearer ' + base64Authkey);
            headersSet = true;
        }
        return headersSet ? {
            responseType: responseType,
            headers: headers
        } : null;
    };
    DataService.prototype.setJWTHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        var responseType = 'application/json';
        var token = localStorage.getItem('AUTH');
        headers.append('Authorization', token);
        return {
            headers: headers
        };
    };
    // private handleError(error: any) {
    //     let errMsg = this.logError(error);
    //     return Observable.throw(errMsg);
    // }
    DataService.prototype.logError = function (error) {
        var errMsg = error.message ? error.message :
            error._body && error._body.code ? error._body.code + " - " + error._body.message :
                error._body && error._body.error ? error._body.error.code + " - " + error._body.error.message :
                    error.status ? error.status + " - " + error.statusText : 'Error calling API';
        console.log(error);
        return errMsg;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ })

},[607]);
//# sourceMappingURL=main.bundle.js.map