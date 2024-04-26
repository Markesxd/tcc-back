"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["common"],{

/***/ 4144:
/*!**************************************!*\
  !*** ./src/Pipes/FormatDate.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatDate: () => (/* binding */ FormatDate)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FormatDate {
  transform(date) {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date ? `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` : '';
  }
  static #_ = this.ɵfac = function FormatDate_Factory(t) {
    return new (t || FormatDate)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "formatDate",
    type: FormatDate,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 6933:
/*!***************************************************************************!*\
  !*** ./src/components/confirmation-modal/confirmation-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationModalComponent: () => (/* binding */ ConfirmationModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);



class ConfirmationModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  dismiss() {
    this.modalService.dismiss();
  }
  close() {
    this.modalService.close();
  }
  static #_ = this.ɵfac = function ConfirmationModalComponent_Factory(t) {
    return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationModalComponent,
    selectors: [["app-confirmation-modal"]],
    inputs: {
      text: "text"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 1,
    consts: [[1, "p-2"], [1, "form-title", "mb-3", "text-center"], [1, "d-flex", "justify-content-evenly"], [1, "btn", "card", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
    template: function ConfirmationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_4_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_6_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9775:
/*!*********************************!*\
  !*** ./src/model/User.model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
class User {
  createFromForm(formGroup) {
    this.username = formGroup.get('name')?.value;
    this.email = formGroup.get('email')?.value;
    this.password = formGroup.get('password')?.value;
  }
}

/***/ }),

/***/ 2187:
/*!*************************************!*\
  !*** ./src/services/cat.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatService: () => (/* binding */ CatService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class CatService {
  constructor(http) {
    this.http = http;
    this.base = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/gato';
  }
  get(params) {
    return this.http.get(this.base, {
      observe: 'response',
      params
    });
  }
  post(body, params) {
    return this.http.post(this.base, body, {
      observe: 'response',
      params
    });
  }
  put(cat) {
    return this.http.put(`${this.base}/${cat.id}`, cat);
  }
  delete(cat) {
    return this.http.delete(`${this.base}/${cat.id}`);
  }
  static #_ = this.ɵfac = function CatService_Factory(t) {
    return new (t || CatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CatService,
    factory: CatService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2017:
/*!**************************************!*\
  !*** ./src/services/plan.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanService: () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class PlanService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/plano-alimentar';
  }
  post(plan) {
    return this.http.post(this.baseUrl, plan, {
      observe: 'response'
    });
  }
  fetch() {
    return this.http.get(this.baseUrl);
  }
  put(plan) {
    return this.http.put(`${this.baseUrl}/${plan.id}`, plan);
  }
  delete(plan) {
    return this.http.delete(`${this.baseUrl}/${plan.id}`);
  }
  serve(meal) {
    return this.http.put(`${this.baseUrl}/servir`, meal);
  }
  static #_ = this.ɵfac = function PlanService_Factory(t) {
    return new (t || PlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PlanService,
    factory: PlanService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8859:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/fesm2022/ngx-cookie-service.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieService: () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6575);




// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies
class CookieService {
  constructor(document,
  // Get the `PLATFORM_ID` so we can check if we're in a browser.
  platformId) {
    this.document = document;
    this.platformId = platformId;
    this.documentIsAccessible = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId);
  }
  /**
   * Get cookie Regular Expression
   *
   * @param name Cookie name
   * @returns property RegExp
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static getCookieRegExp(name) {
    const escapedName = name.replace(/([\[\]{}()|=;+?,.*^$])/gi, '\\$1');
    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
  }
  /**
   * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @param encodedURIComponent A value representing an encoded URI component.
   *
   * @returns The unencoded version of an encoded component of a Uniform Resource Identifier (URI).
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  static safeDecodeURIComponent(encodedURIComponent) {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      // probably it is not uri encoded. return as is
      return encodedURIComponent;
    }
  }
  /**
   * Return `true` if {@link Document} is accessible, otherwise return `false`
   *
   * @param name Cookie name
   * @returns boolean - whether cookie with specified name exists
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  check(name) {
    if (!this.documentIsAccessible) {
      return false;
    }
    name = encodeURIComponent(name);
    const regExp = CookieService.getCookieRegExp(name);
    return regExp.test(this.document.cookie);
  }
  /**
   * Get cookies by name
   *
   * @param name Cookie name
   * @returns property value
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  get(name) {
    if (this.documentIsAccessible && this.check(name)) {
      name = encodeURIComponent(name);
      const regExp = CookieService.getCookieRegExp(name);
      const result = regExp.exec(this.document.cookie);
      return result[1] ? CookieService.safeDecodeURIComponent(result[1]) : '';
    } else {
      return '';
    }
  }
  /**
   * Get all cookies in JSON format
   *
   * @returns all the cookies in json
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  getAll() {
    if (!this.documentIsAccessible) {
      return {};
    }
    const cookies = {};
    const document = this.document;
    if (document.cookie && document.cookie !== '') {
      document.cookie.split(';').forEach(currentCookie => {
        const [cookieName, cookieValue] = currentCookie.split('=');
        cookies[CookieService.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = CookieService.safeDecodeURIComponent(cookieValue);
      });
    }
    return cookies;
  }
  set(name, value, expiresOrOptions, path, domain, secure, sameSite) {
    if (!this.documentIsAccessible) {
      return;
    }
    if (typeof expiresOrOptions === 'number' || expiresOrOptions instanceof Date || path || domain || secure || sameSite) {
      const optionsBody = {
        expires: expiresOrOptions,
        path,
        domain,
        secure,
        sameSite: sameSite ? sameSite : 'Lax'
      };
      this.set(name, value, optionsBody);
      return;
    }
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
    const options = expiresOrOptions ? expiresOrOptions : {};
    if (options.expires) {
      if (typeof options.expires === 'number') {
        const dateExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
        cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      } else {
        cookieString += 'expires=' + options.expires.toUTCString() + ';';
      }
    }
    if (options.path) {
      cookieString += 'path=' + options.path + ';';
    }
    if (options.domain) {
      cookieString += 'domain=' + options.domain + ';';
    }
    if (options.secure === false && options.sameSite === 'None') {
      options.secure = true;
      console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` + `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
    }
    if (options.secure) {
      cookieString += 'secure;';
    }
    if (!options.sameSite) {
      options.sameSite = 'Lax';
    }
    cookieString += 'sameSite=' + options.sameSite + ';';
    this.document.cookie = cookieString;
  }
  /**
   * Delete cookie by name
   *
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Cookie secure flag
   * @param sameSite Cookie sameSite flag - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  delete(name, path, domain, secure, sameSite = 'Lax') {
    if (!this.documentIsAccessible) {
      return;
    }
    const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
    this.set(name, '', {
      expires: expiresDate,
      path,
      domain,
      secure,
      sameSite
    });
  }
  /**
   * Delete all cookies
   *
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Is the Cookie secure
   * @param sameSite Is the cookie same site
   *
   * @author: Stepan Suvorov
   * @since: 1.0.0
   */
  deleteAll(path, domain, secure, sameSite = 'Lax') {
    if (!this.documentIsAccessible) {
      return;
    }
    const cookies = this.getAll();
    for (const cookieName in cookies) {
      if (cookies.hasOwnProperty(cookieName)) {
        this.delete(cookieName, path, domain, secure, sameSite);
      }
    }
  }
  static #_ = this.ɵfac = function CookieService_Factory(t) {
    return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CookieService,
    factory: CookieService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CookieService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();

/*
 * Public API Surface of ngx-cookie-service
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=common.js.map