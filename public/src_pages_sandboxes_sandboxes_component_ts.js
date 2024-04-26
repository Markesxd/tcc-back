"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["src_pages_sandboxes_sandboxes_component_ts"],{

/***/ 7096:
/*!**********************************************************************!*\
  !*** ./src/pages/sandboxes/modal-sandbox/modal-sandbox.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalSandboxComponent: () => (/* binding */ ModalSandboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);






class ModalSandboxComponent {
  constructor(activeModal, fb) {
    this.activeModal = activeModal;
    this.fb = fb;
    this.form = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
    });
  }
  save() {
    this.activeModal.close(this.createFromForm());
  }
  createFromForm() {
    const sandbox = {};
    sandbox.nome = this.form.get('name')?.value ?? '';
    sandbox.limpoEm = new Date();
    return sandbox;
  }
  dismiss() {
    this.activeModal.dismiss();
  }
  static #_ = this.ɵfac = function ModalSandboxComponent_Factory(t) {
    return new (t || ModalSandboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ModalSandboxComponent,
    selectors: [["app-modal-sandbox"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 2,
    consts: [[1, "p-3"], [1, "form-header"], [1, "form-title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512", 1, "form-icon", 3, "click"], ["d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"], [3, "formGroup"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["type", "button", 1, "form-buttom", 3, "disabled", "click"]],
    template: function ModalSandboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nova Caixa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSandboxComponent_Template__svg_svg_click_4_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSandboxComponent_Template_button_click_10_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3556:
/*!****************************************************!*\
  !*** ./src/pages/sandboxes/sandboxes.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SandboxesComponent: () => (/* binding */ SandboxesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_Pipes_FormatDate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Pipes/FormatDate.pipe */ 4144);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _modal_sandbox_modal_sandbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-sandbox/modal-sandbox.component */ 7096);
/* harmony import */ var src_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/confirmation-modal/confirmation-modal.component */ 6933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_services_sandbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/sandbox.service */ 7277);









function SandboxesComponent_div_7_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SandboxesComponent_div_7_ng_template_6_Template__svg_svg_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const box_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.deleteBox(box_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SandboxesComponent_div_7_ng_template_6_Template__svg_svg_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const box_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.cleanBox(box_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const box_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, box_r1.limpoEm), " ");
  }
}
function SandboxesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "h2", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9)(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SandboxesComponent_div_7_ng_template_6_Template, 8, 3, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const box_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](box_r1.nome);
  }
}
class SandboxesComponent {
  constructor(modalService, sandboxService) {
    this.modalService = modalService;
    this.sandboxService = sandboxService;
  }
  ngOnInit() {
    this.load();
  }
  openModal() {
    const ref = this.modalService.open(_modal_sandbox_modal_sandbox_component__WEBPACK_IMPORTED_MODULE_1__.ModalSandboxComponent, {
      centered: true
    });
    ref.closed.subscribe(sandbox => {
      this.sandboxService.create(sandbox).subscribe(() => this.load());
    });
  }
  cleanBox(sandbox) {
    sandbox.limpoEm = new Date();
    this.sandboxService.patch(sandbox).subscribe(() => {
      sandbox.limpoEm = new Date();
    });
  }
  deleteBox(sandbox) {
    const ref = this.modalService.open(src_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationModalComponent, {
      centered: true
    });
    ref.componentInstance.text = "Você tem certeza que deseja excluir essa caixa de areia?";
    ref.closed.subscribe(() => {
      if (!sandbox.id) {
        throw new Error("Sandbox missing id");
      }
      this.sandboxService.delete(sandbox.id).subscribe(() => this.load());
    });
  }
  load() {
    this.sandboxService.fetch().subscribe(_sandboxes => {
      this.sandboxes = _sandboxes;
    });
  }
  static #_ = this.ɵfac = function SandboxesComponent_Factory(t) {
    return new (t || SandboxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_services_sandbox_service__WEBPACK_IMPORTED_MODULE_3__.SandboxService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SandboxesComponent,
    selectors: [["app-sandboxes"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "page-header"], [1, "page-title"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 512 512", 3, "click"], ["d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"], ["ngbAccordion", "", 3, "closeOthers"], ["ngbAccordionItem", "", 4, "ngFor", "ngForOf"], ["ngbAccordionItem", ""], ["ngbAccordionHeader", ""], ["ngbAccordionButton", ""], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], [1, "d-flex", "justify-content-between"], [1, "d-flex", "gap-3"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click"], ["d", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"], ["d", "M128 32v96H256V96h60.1c4.2 0 8.3 1.7 11.3 4.7l33.9 33.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L372.7 55.4c-15-15-35.4-23.4-56.6-23.4H256c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32zM117.4 160c-33.3 0-61 25.5-63.8 58.7L35 442.7C31.9 480 61.3 512 98.8 512H285.2c37.4 0 66.9-32 63.8-69.3l-18.7-224c-2.8-33.2-30.5-58.7-63.8-58.7H117.4zM256 360c0 35.3-28.7 56-64 56s-64-20.7-64-56c0-32.5 37-80.9 50.9-97.9c3.2-3.9 8.1-6.1 13.1-6.1s9.9 2.2 13.1 6.1C219 279.1 256 327.5 256 360z"]],
    template: function SandboxesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Caixas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SandboxesComponent_Template__svg_svg_click_4_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SandboxesComponent_div_7_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sandboxes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, src_Pipes_FormatDate_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatDate, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionBody, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordionCollapse],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7277:
/*!*****************************************!*\
  !*** ./src/services/sandbox.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SandboxService: () => (/* binding */ SandboxService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class SandboxService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/caixa-de-areia';
  }
  create(sandbox) {
    return this.http.post(this.baseUrl, sandbox);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  patch(sandbox) {
    return this.http.put(`${this.baseUrl}/${sandbox.id}`, sandbox);
  }
  fetch() {
    return this.http.get(this.baseUrl);
  }
  static #_ = this.ɵfac = function SandboxService_Factory(t) {
    return new (t || SandboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SandboxService,
    factory: SandboxService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_pages_sandboxes_sandboxes_component_ts.js.map