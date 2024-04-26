"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["src_pages_cats_cats_component_ts"],{

/***/ 676:
/*!***********************************************************!*\
  !*** ./src/components/create-cat/create-cat.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateCatComponent: () => (/* binding */ CreateCatComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_model_Cat_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/Cat.model */ 3239);
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirmation-modal/confirmation-modal.component */ 6933);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);









function CreateCatComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateCatComponent__svg_svg_12_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class CreateCatComponent {
  constructor(fb, activeModal, modalService) {
    this.fb = fb;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.isNew = true;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.editForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      birthday: '',
      gender: 0
    });
  }
  onSubmit() {
    this.activeModal.close(this.createFromForm());
  }
  onDelete() {
    const ref = this.modalService.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
      centered: true
    });
    ref.componentInstance.text = "Você tem certeza que deseja excluir este gato?";
    ref.closed.subscribe(() => {
      this.delete.emit();
    });
    this.activeModal.dismiss();
  }
  createFromForm() {
    const cat = {};
    cat.nome = this.editForm.get('name')?.value ?? '';
    cat.aniversario = new Date(this.editForm.get('birthday')?.value ?? '');
    cat.sexo = Number(this.editForm.get('gender')?.value ?? 0);
    return cat;
  }
  dismiss() {
    this.activeModal.dismiss();
  }
  loadDate(date) {
    const input = document.querySelector("#birthday");
    setTimeout(() => {
      if (input) input.value = date.split('T')[0];
    }, 200);
  }
  loadGender(gender) {
    const _gender = gender === src_model_Cat_model__WEBPACK_IMPORTED_MODULE_0__.TypeSex.MALE ? 'M' : 'F';
    const input = document.querySelector(`#gender${_gender}`);
    setTimeout(() => {
      input.checked = true;
    }, 200);
  }
  static #_ = this.ɵfac = function CreateCatComponent_Factory(t) {
    return new (t || CreateCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CreateCatComponent,
    selectors: [["app-create-cat"]],
    outputs: {
      delete: "delete"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 30,
    vars: 5,
    consts: [[1, "p-3"], [1, "form-header"], [1, "form-title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512", 1, "form-icon", 3, "click"], ["d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"], [1, "d-flex", "flex-column", "gap-3", 3, "formGroup", "ngSubmit"], ["for", "name", 1, "form-label"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click", 4, "ngIf"], ["for", "birthday", 1, "form-label"], ["type", "date", "id", "birthday", "formControlName", "birthday", 1, "form-control"], [1, "form-label"], [1, "form-check"], ["type", "radio", "formControlName", "gender", "id", "genderM", "value", "1", 1, "form-check-input"], ["for", "genderM", 1, "form-check-label", "mt-1"], ["type", "radio", "formControlName", "gender", "id", "genderF", "value", "0", 1, "form-check-input"], ["for", "genderF", 1, "form-check-label", "mt-1"], ["type", "submit", 1, "form-buttom", 3, "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click"], ["d", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]],
    template: function CreateCatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateCatComponent_Template__svg_svg_click_4_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateCatComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CreateCatComponent__svg_svg_12_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div")(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Nascimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Macho");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "F\u00EAmea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.isNew ? "Novo" : "", " Gato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isNew ? "Cadastrar" : "Salvar");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3239:
/*!********************************!*\
  !*** ./src/model/Cat.model.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cat: () => (/* binding */ Cat),
/* harmony export */   TypeSex: () => (/* binding */ TypeSex)
/* harmony export */ });
var TypeSex;
(function (TypeSex) {
  TypeSex[TypeSex["FEMALE"] = 0] = "FEMALE";
  TypeSex[TypeSex["MALE"] = 1] = "MALE";
})(TypeSex || (TypeSex = {}));
class Cat {
  createFromForm(formGroup, owner) {
    this.nome = formGroup.get('name')?.value;
    this.aniversario = formGroup.get('birthday')?.value;
    this.sexo = formGroup.get('gender')?.value;
    this.dono = owner;
    return this;
  }
}

/***/ }),

/***/ 4551:
/*!******************************************!*\
  !*** ./src/pages/cats/cats.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatsPageComponent: () => (/* binding */ CatsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_components_create_cat_create_cat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/create-cat/create-cat.component */ 676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_services_cat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/cat.service */ 2187);
/* harmony import */ var src_services_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/plan.service */ 2017);








const _c0 = ["carousel"];
function CatsPageComponent_div_5_3_ng_template_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function CatsPageComponent_div_5_3_ng_template_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CatsPageComponent_div_5_3_ng_template_0_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CatsPageComponent_div_5_3_ng_template_0_button_17_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const plan_r13 = restoredCtx.$implicit;
      const pet_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.setPlan(plan_r13, pet_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r13.nome);
  }
}
function CatsPageComponent_div_5_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CatsPageComponent_div_5_3_ng_template_0_ng_container_7_Template, 3, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CatsPageComponent_div_5_3_ng_template_0_ng_template_8_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CatsPageComponent_div_5_3_ng_template_0_Template__svg_svg_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const pet_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.openModal(pet_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 24)(13, "div")(14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CatsPageComponent_div_5_3_ng_template_0_button_17_Template, 2, 1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const pet_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pet_r6.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.getCatAge(pet_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", pet_r6.sexo === 1)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = pet_r6.planoAlimentar == null ? null : pet_r6.planoAlimentar.nome) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.getOtherPlans(pet_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("alt", "foto de ", pet_r6.nome, "");
  }
}
function CatsPageComponent_div_5_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CatsPageComponent_div_5_3_ng_template_0_Template, 19, 7, "ng-template", 15);
  }
}
function CatsPageComponent_div_5_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CatsPageComponent_div_5_ng_container_11_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const b_r22 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.currentCard = b_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const b_r22 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bubble ", b_r22 === ctx_r5.currentCard ? "active" : "", "");
  }
}
function CatsPageComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("touchstart", function CatsPageComponent_div_5_Template_div_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.onTouchStart($event));
    })("touchend", function CatsPageComponent_div_5_Template_div_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.onTouchEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngb-carousel", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("slide", function CatsPageComponent_div_5_Template_ngb_carousel_slide_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.updateBubble($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CatsPageComponent_div_5_3_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CatsPageComponent_div_5_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.onPreviousCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CatsPageComponent_div_5_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.onNextCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CatsPageComponent_div_5_ng_container_11_Template, 2, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("wrap", false)("showNavigationArrows", false)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pets);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pets);
  }
}
function CatsPageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "h3", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "N\u00E3o H\u00E1 Gatos Cadastrados!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CatsPageComponent {
  constructor(catService, planService, modalService) {
    this.catService = catService;
    this.planService = planService;
    this.modalService = modalService;
    this.pets = [];
    this.plans = [];
    this.touchStartX = null;
    this._currentCard = 0;
  }
  ngOnInit() {
    this.load();
  }
  onTouchStart(event) {
    this.touchStartX = event.changedTouches[0].clientX;
  }
  onTouchEnd(event) {
    if (this.touchStartX === null) {
      return;
    }
    const delta = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(delta) < 10) {
      return;
    }
    delta < 0 ? this.onNextCard() : this.onPreviousCard();
  }
  onNextCard() {
    this.currentCard++;
    this.carousel.next();
  }
  onPreviousCard() {
    this.currentCard--;
    this.carousel.prev();
  }
  updateBubble(event) {
    this.currentCard = Number(event.current.split('-')[2]);
  }
  openModal(cat) {
    const ref = this.modalService.open(src_components_create_cat_create_cat_component__WEBPACK_IMPORTED_MODULE_0__.CreateCatComponent);
    if (cat) {
      ref.componentInstance.isNew = false;
      ref.componentInstance.editForm.patchValue({
        name: cat.nome,
        birthday: cat.aniversario
      });
      ref.componentInstance.loadDate(cat.aniversario);
      ref.componentInstance.loadGender(cat.sexo);
      ref.closed.subscribe(_cat => {
        _cat.id = cat.id;
        this.catService.put(_cat).subscribe(() => this.load());
      });
      ref.componentInstance.delete.subscribe(() => {
        this.catService.delete(cat).subscribe(() => this.load());
      });
      return;
    }
    ref.closed.subscribe(cat => {
      this.catService.post(cat).subscribe(res => {
        if (res.ok) {
          this.load();
        }
      });
    });
  }
  set currentCard(i) {
    if (i < 0 || i > this.pets.length - 1) {
      return;
    }
    this._currentCard = i;
  }
  get currentCard() {
    return this._currentCard;
  }
  get hasCats() {
    return this.pets.length !== 0;
  }
  getOtherPlans(cat) {
    if (!this.plans) {
      throw new Error();
    }
    return this.plans.filter(plan => plan.id !== cat.planoAlimentar?.id);
  }
  getCatAge(cat) {
    if (!cat.aniversario) {
      return '';
    }
    const today = new Date();
    const birthday = new Date(cat.aniversario);
    const dif = today.getTime() - birthday.getTime();
    const yearDif = Math.floor(dif / (1000 * 60 * 60 * 24 * 365));
    return `${yearDif} anos`;
  }
  setPlan(plan, cat) {
    if (!plan.gatos) {
      throw new Error('plan.gatos is undefined');
    }
    const _cat = plan.gatos.find(_cat => cat.id === _cat.id);
    if (!_cat) {
      plan.gatos.push(cat);
      this.planService.put(plan).subscribe(res => {
        cat.planoAlimentar = res;
      });
    }
  }
  load() {
    this.catService.get().subscribe(res => {
      this.pets = res.body;
    });
    this.planService.fetch().subscribe(res => {
      this.plans = res;
    });
  }
  static #_ = this.ɵfac = function CatsPageComponent_Factory(t) {
    return new (t || CatsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_cat_service__WEBPACK_IMPORTED_MODULE_1__.CatService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_plan_service__WEBPACK_IMPORTED_MODULE_2__.PlanService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CatsPageComponent,
    selectors: [["cats-page"]],
    viewQuery: function CatsPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "page-header"], [1, "page-title"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 512 512", 3, "click"], ["d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"], ["class", "cats-page-content", 3, "touchstart", "touchend", 4, "ngIf", "ngIfElse"], ["noCat", ""], [1, "cats-page-content", 3, "touchstart", "touchend"], [1, "cards", "mt-5", 3, "wrap", "showNavigationArrows", "interval", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "arrow-left", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 320 512"], ["d", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"], [1, "arrow-right", 3, "click"], [1, "bubbles"], ["ngbSlide", ""], [1, "card"], [1, "card--header", "mb-1"], [1, "d-flex", "gap-2"], [1, "card-title"], [1, "card-faded-text"], [4, "ngIf", "ngIfElse"], ["female", ""], ["d", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"], ["ngbDropdown", "", 1, "card-faded-text", "card-sub"], ["ngbDropdownToggle", ""], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["src", "", "onerror", "this.onerror=null; this.src='../../assets/cat-icon.svg' ", 1, "card-img", 3, "alt"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512"], ["d", "M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 384 512"], ["d", "M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"], ["ngbDropdownItem", "", 3, "click"], [3, "click"], [1, "cats-page-contet"], [1, "loose-title"]],
    template: function CatsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Meus Gatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CatsPageComponent_Template__svg_svg_click_3_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CatsPageComponent_div_5_Template, 12, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CatsPageComponent_ng_template_6_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasCats)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownItem],
    styles: [".cards[_ngcontent-%COMP%] {\n    overflow: hidden;\n}\n\n.card[_ngcontent-%COMP%] {\n    width: 70vw;\n    display: flex;\n    margin: 2rem auto;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid black;\n    border-radius: 1rem;\n}\n\n.card--header[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-top: 1rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n.card-sub[_ngcontent-%COMP%] {\n    width: 80%;\n    align-self: center;\n\n}\n\n.card-title[_ngcontent-%COMP%] {\n    display: inline;\n    margin: 0;\n    font-size: 1rem;\n}\n\n.card-faded-text[_ngcontent-%COMP%] {\n    color: #989898;\n    font-size: 0.9rem;\n}\n\n.card-img[_ngcontent-%COMP%] {\n    margin: 2rem;\n    width: 50%;\n}\n\n.cats-page-content[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n}\n\n.loose-title[_ngcontent-%COMP%] {\n    margin: 10rem 1rem;\n    text-align: center;\n    font-size: 2rem;\n}\n\n.arrow-left[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 10px;\n    top: 42%;\n    transform: rotate(180deg);\n}\n\n.arrow-right[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    top: 42%;\n}\n\n.bubbles[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    margin: 1rem auto;\n}\n\n.bubble[_ngcontent-%COMP%] {\n    width: 5px;\n    height: 5px;\n    margin: 0 0.5rem;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n.active[_ngcontent-%COMP%] {\n    background: black\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jYXRzL2NhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQge1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5jYXJkLS1oZWFkZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhcmQtc3ViIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jYXJkLWZhZGVkLXRleHQge1xuICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY2FyZC1pbWcge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uY2F0cy1wYWdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvb3NlLXRpdGxlIHtcbiAgICBtYXJnaW46IDEwcmVtIDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmFycm93LWxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogNDIlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5hcnJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNDIlO1xufVxuXG4uYnViYmxlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG4uYnViYmxlIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIG1hcmdpbjogMCAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2tcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_pages_cats_cats_component_ts.js.map