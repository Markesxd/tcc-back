"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);




const canActivate = () => {
  const token = localStorage.getItem('token');
  if (token != null && token != '') {
    return true;
  } else {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router).navigate(['/']);
    return false;
  }
};
const routes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/login/login.component */ 1744)).then(c => c.LoginComponent)
}, {
  path: 'my-page',
  canActivate: [canActivate],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_user-page_user-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/user-page/user-page.component */ 2006)).then(c => c.UserPageComponent)
}, {
  path: 'my-cats',
  canActivate: [canActivate],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_cats_cats_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/cats/cats.component */ 4551)).then(c => c.CatsPageComponent)
}, {
  path: 'food',
  canActivate: [canActivate],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_food_food_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/food/food.component */ 9947)).then(c => c.FoodComponent)
}, {
  path: 'health',
  canActivate: [canActivate],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_health_health_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/health/health.component */ 3044)).then(c => c.HealthComponent)
}, {
  path: 'sandbox',
  canActivate: [canActivate],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_sandboxes_sandboxes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/sandboxes/sandboxes.component */ 3556)).then(c => c.SandboxesComponent)
}, {
  path: 'register',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_pages_cadastro_cadastro_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/cadastro/cadastro.component */ 7434)).then(c => c.CadastroComponent)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/app-header/app-header.component */ 6899);
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/app-footer/app-footer.component */ 4269);




class AppComponent {
  constructor() {
    this.a = [1, 2, 5, 0, 14];
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "main-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_0__.AppHeaderComponent, _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_1__.AppFooterComponent],
    styles: [".main-content[_ngcontent-%COMP%] {\n    display: block;\n    height: 83vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogODN2aDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/app-header/app-header.component */ 6899);
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app-footer/app-footer.component */ 4269);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/interceptors/auth.interceptor */ 239);













class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.provideAnimations)(), src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
      useClass: src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.isDevMode)(),
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__.AppHeaderComponent, _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 4269:
/*!***********************************************************!*\
  !*** ./src/components/app-footer/app-footer.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppFooterComponent {
  static #_ = this.ɵfac = function AppFooterComponent_Factory(t) {
    return new (t || AppFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppFooterComponent,
    selectors: [["app-footer"]],
    decls: 11,
    vars: 0,
    consts: [[1, "app-footer"], ["routerLink", "/my-page", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "app-footer-icon"], ["d", "M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"], ["routerLink", "/sandbox", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "app-footer-icon"], ["d", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48h8V196.9c-1.9 1.4-3.8 2.9-5.6 4.4C10.9 214.5 0 232.9 0 256c0 46.9 14.3 84.1 37 112.5c14.2 17.7 31.1 31.3 48.5 41.8L65.6 469.9c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H352c10.3 0 19.9-4.9 26-13.3s7.7-19.1 4.4-28.8l-19.8-59.5c17.4-10.5 34.3-24.1 48.5-41.8c22.7-28.4 37-65.5 37-112.5c0-23.1-10.9-41.5-26.4-54.6c-1.8-1.5-3.7-3-5.6-4.4V48h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM384 256.3c0 1-.3 2.6-3.8 5.6c-4.8 4.1-14 9-29.3 13.4C320.5 284 276.1 288 224 288s-96.5-4-126.9-12.8c-15.3-4.4-24.5-9.3-29.3-13.4c-3.5-3-3.8-4.6-3.8-5.6l0-.3 0-.1c0-1 0-2.5 3.8-5.8c4.8-4.1 14-9 29.3-13.4C127.5 228 171.9 224 224 224s96.5 4 126.9 12.8c15.3 4.4 24.5 9.3 29.3 13.4c3.8 3.2 3.8 4.8 3.8 5.8l0 .1 0 .3zM328.2 384l-.2 .5 0-.5h.2zM112 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"], ["routerLink", "/food", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "app-footer-icon", "bigger"], ["d", "M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"], ["routerLink", "/health", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "app-footer-icon"], ["d", "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V320H176c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"], ["routerLink", "/my-cats", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "app-footer-icon"], ["d", "M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]],
    template: function AppFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".app-footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    border-top: 1px solid black;\n}\n\n.app-footer-icon[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    margin: 0.5rem;\n}\n\n.bigger[_ngcontent-%COMP%] {\n    width: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2FwcC1mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmFwcC1mb290ZXItaWNvbiB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbn1cblxuLmJpZ2dlciB7XG4gICAgd2lkdGg6IDIuNXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6899:
/*!***********************************************************!*\
  !*** ./src/components/app-header/app-header.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppHeaderComponent: () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AppHeaderComponent {
  static #_ = this.ɵfac = function AppHeaderComponent_Factory(t) {
    return new (t || AppHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppHeaderComponent,
    selectors: [["app-header"]],
    decls: 4,
    vars: 0,
    consts: [[1, "app-header"], ["src", "../../../assets/icon-simplified.webp", "alt", "home", 1, "app-header-icon"], [1, "app-header-title"]],
    template: function AppHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Meownager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".app-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n}\n\n.app-header-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    margin: 1rem;\n}\n\n.app-header-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-right: 1.5rem\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmFwcC1oZWFkZXItaWNvbiB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uYXBwLWhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiUrl: 'http://192.168.0.109:8000'
};

/***/ }),

/***/ 239:
/*!**********************************************!*\
  !*** ./src/interceptors/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/auth.service */ 8399);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);





class AuthInterceptor {
  constructor(router, authService, http) {
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.isBeingRefreshed = false;
    this.handleError = err => {
      if (err.status === 401 && !this.isBeingRefreshed) {
        this.isBeingRefreshed = true;
        this.authService.refresh().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
          this.isBeingRefreshed = false;
        })).subscribe();
      }
      throw err;
    };
  }
  intercept(request, next) {
    if (this.isBeingRefreshed) {
      return next.handle(request);
    }
    const token = localStorage.getItem('token');
    if (token === null || token === '') {
      this.router.navigate(['/']);
      return next.handle(request);
    }
    const req = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 8399:
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class AuthService {
  constructor(http) {
    this.http = http;
  }
  login(user) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/login', user, {
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
      localStorage.setItem('token', res.body?.token);
      localStorage.setItem('refresh', res.body?.refresh_token);
    }));
  }
  logout() {
    //todo: implement a logout route
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(localStorage.removeItem('token'));
  }
  singUp(user) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/register', user);
  }
  refresh() {
    const token = localStorage.getItem('refresh');
    if (!token) {
      throw new Error('No refresh token');
    }
    const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('refresh_token', token);
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/refresh', body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
      localStorage.setItem('token', res.body?.token);
      localStorage.setItem('refresh', res.body?.refresh_token);
    }));
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map