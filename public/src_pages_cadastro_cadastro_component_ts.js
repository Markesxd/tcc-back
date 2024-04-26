"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["src_pages_cadastro_cadastro_component_ts"],{

/***/ 7434:
/*!**************************************************!*\
  !*** ./src/pages/cadastro/cadastro.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroComponent: () => (/* binding */ CadastroComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_model_User_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/User.model */ 9775);
/* harmony import */ var src_validators_matchingPasswordValidator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/validators/matchingPasswordValidator.directive */ 68);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ 8399);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);









function CadastroComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Preecha o Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CadastroComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Preecha o email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CadastroComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email incorreto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CadastroComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Preecha a Senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CadastroComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Senhas devem coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class CadastroComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.editForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      repeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    }, {
      validators: [src_validators_matchingPasswordValidator_directive__WEBPACK_IMPORTED_MODULE_1__.matchingPasswordValidator]
    });
  }
  get nameControl() {
    return this.editForm.get('name');
  }
  get emailControl() {
    return this.editForm.get('email');
  }
  get passwordControl() {
    return this.editForm.get('password');
  }
  get repeatControl() {
    return this.editForm.get('repeat');
  }
  onSubmit() {
    const user = new src_model_User_model__WEBPACK_IMPORTED_MODULE_0__.User();
    user.createFromForm(this.editForm);
    this.authService.singUp(user).subscribe(() => {
      user.username = user.email;
      this.authService.login(user).subscribe(() => {
        this.router.navigate(['my-page']);
      });
    });
  }
  navigateBack() {
    this.router.navigate(['/']);
  }
  static #_ = this.ɵfac = function CadastroComponent_Factory(t) {
    return new (t || CadastroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CadastroComponent,
    selectors: [["cadastro"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 30,
    vars: 7,
    consts: [[1, "register-wrapper"], [1, "register-body", 3, "formGroup", "ngSubmit"], [1, "register-title"], ["for", "name"], ["class", "register-error", 4, "ngIf"], ["type", "text", "id", "name", "name", "name", "formControlName", "name"], ["for", "email"], ["type", "email", "id", "Email", "name", "email", "formControlName", "email"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "formControlName", "password"], ["for", "repeat"], ["type", "password", "id", "repeat", "name", "repeat", "formControlName", "repeat"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "register-button", "secondary", 3, "click"], ["type", "submit", 1, "register-button", 3, "disabled"], [1, "register-error"]],
    template: function CadastroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CadastroComponent_Template_form_ngSubmit_1_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cadastro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CadastroComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CadastroComponent_span_12_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CadastroComponent_span_13_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CadastroComponent_span_18_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div")(21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Repitir senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CadastroComponent_span_23_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12)(26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CadastroComponent_Template_button_click_26_listener() {
          return ctx.navigateBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.nameControl == null ? null : ctx.nameControl.dirty) && !(ctx.nameControl == null ? null : ctx.nameControl.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.emailControl == null ? null : ctx.emailControl.dirty) && (ctx.emailControl == null ? null : ctx.emailControl.errors == null ? null : ctx.emailControl.errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.emailControl == null ? null : ctx.emailControl.dirty) && (ctx.emailControl == null ? null : ctx.emailControl.errors == null ? null : ctx.emailControl.errors["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.passwordControl == null ? null : ctx.passwordControl.dirty) && !(ctx.passwordControl == null ? null : ctx.passwordControl.valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.repeatControl == null ? null : ctx.repeatControl.dirty) && (ctx.editForm.errors == null ? null : ctx.editForm.errors["missMatchPassword"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".register-wrapper[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 1000;\n    background: #f1f1f1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.register-title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    border-bottom: 1px solid black;\n    margin-bottom: 2rem;\n}\n\n.register-body[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border-radius: 0.5rem;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.register-body[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    margin-bottom: 1rem;\n}\n\n.register-error[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    color: red;\n    float: right;\n}\n\n.register-fail[_ngcontent-%COMP%] {\n    color: red;\n    text-align: center;\n    padding: 0.5rem;\n    margin: 0.5rem 0;\n    border: 1px solid red;\n    border-radius: 8px;\n}\n\n.register-anchor[_ngcontent-%COMP%] {\n    color: #000000aa;\n    align-self: center;\n    margin-top: 0.5rem;\n}\n\n.register-button[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    border: 1px solid white;\n    border-radius: 0.5rem;\n    background: var(--primary-color);\n    color: black;\n    transition: 0.3s;\n}\n\n.secondary[_ngcontent-%COMP%] {\n    background: var(--secondary-color);\n}\n\n.register-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\n    background: var(--secondary-color);\n}\n\n.register-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled {\n    background: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5yZWdpc3Rlci1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJlZ2lzdGVyLWJvZHkgPiBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5yZWdpc3Rlci1lcnJvciB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6IHJlZDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZWdpc3Rlci1mYWlsIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucmVnaXN0ZXItYW5jaG9yIHtcbiAgICBjb2xvcjogIzAwMDAwMGFhO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5yZWdpc3Rlci1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5yZWdpc3Rlci1idXR0b24gOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiA6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68:
/*!***************************************************************!*\
  !*** ./src/validators/matchingPasswordValidator.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchingPasswordValidator: () => (/* binding */ matchingPasswordValidator)
/* harmony export */ });
const matchingPasswordValidator = control => {
  const password = control.get('password')?.value;
  const repeat = control.get('repeat')?.value;
  return password !== repeat ? {
    missMatchPassword: true
  } : null;
};

/***/ })

}]);
//# sourceMappingURL=src_pages_cadastro_cadastro_component_ts.js.map