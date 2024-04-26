"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["src_pages_food_food_component_ts"],{

/***/ 4370:
/*!*********************************!*\
  !*** ./src/model/Plan.model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Meal: () => (/* binding */ Meal),
/* harmony export */   Plan: () => (/* binding */ Plan)
/* harmony export */ });
class Plan {
  createFromForm(formGroup) {
    this.nome = formGroup.get("name")?.value ?? "";
    this.refeicoes = formGroup.get("meals")?.value ?? [];
    this.gatos = formGroup.get("cats")?.value ?? [];
  }
}
class Meal {}

/***/ }),

/***/ 3384:
/*!************************************************************************!*\
  !*** ./src/pages/food/components/create-plan/create-plan.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePlanComponent: () => (/* binding */ CreatePlanComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_model_Plan_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/Plan.model */ 4370);
/* harmony import */ var src_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/confirmation-modal/confirmation-modal.component */ 6933);
/* harmony import */ var src_services_cat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/cat.service */ 2187);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);










function CreatePlanComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanComponent__svg_svg_12_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CreatePlanComponent_div_17__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanComponent_div_17__svg_svg_3_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const meal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.removeMeal(meal_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CreatePlanComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreatePlanComponent_div_17__svg_svg_3_Template, 2, 0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meal_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](meal_r6.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isNew);
  }
}
function CreatePlanComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanComponent_div_18_Template__svg_svg_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.addMeal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CreatePlanComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CreatePlanComponent_div_22_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onChangeCat($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "i", cat_r14.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cat_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "i", cat_r14.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cat_r14.nome);
  }
}
class CreatePlanComponent {
  constructor(fb, catService, activeModal, modalService) {
    this.fb = fb;
    this.catService = catService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.isNew = true;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.editForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      meals: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      meal: '',
      cats: [[]]
    });
  }
  ngOnInit() {
    this.catService.get().subscribe(cats => {
      this.cats = cats.body;
    });
  }
  catchKeyPress(event) {
    event.preventDefault();
    this.addMeal();
  }
  addMeal() {
    const meal = new src_model_Plan_model__WEBPACK_IMPORTED_MODULE_0__.Meal();
    meal.nome = this.editForm.get('meal')?.value ?? undefined;
    if (!meal.nome) {
      return;
    }
    this.pushMeal(meal);
    this.editForm.patchValue({
      meal: ''
    });
  }
  onDelete() {
    const ref = this.modalService.open(src_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
      centered: true
    });
    ref.componentInstance.text = "Você tem certeza que quer excluir este Plano Alimentar?";
    ref.closed.subscribe(() => {
      this.delete.emit();
      this.dismiss();
    });
  }
  onChangeCat(event) {
    const input = event.target;
    if (input === null) {
      return;
    }
    const id = Number(input.value);
    const cat = this.getCatById(id);
    if (!cat) {
      return;
    }
    if (input.checked) {
      this.pushCat(cat);
    } else {
      this.removeCat(cat);
    }
  }
  onSubmit() {
    const plan = new src_model_Plan_model__WEBPACK_IMPORTED_MODULE_0__.Plan();
    plan.createFromForm(this.editForm);
    this.activeModal.close(plan);
  }
  dismiss() {
    this.activeModal.dismiss();
  }
  get meals() {
    const meals = this.editForm.get('meals')?.value;
    if (!Array.isArray(meals)) {
      throw new Error("meals is not array!");
    }
    return meals;
  }
  get formCats() {
    const cats = this.editForm.get('cats')?.value;
    if (!Array.isArray(cats)) {
      throw new Error("Cats is not an array!");
    }
    return cats;
  }
  getCatById(id) {
    return this.cats?.find(cat => cat.id === id);
  }
  pushMeal(meal) {
    const meals = this.meals;
    meals.push(meal);
    this.editForm.patchValue({
      meals
    });
  }
  removeMeal(meal) {
    const meals = this.meals;
    this.editForm.patchValue({
      meals: meals.filter(_meal => _meal !== meal)
    });
  }
  pushCat(cat) {
    const cats = this.formCats;
    cats.push(cat);
    this.editForm.patchValue({
      cats
    });
  }
  removeCat(cat) {
    const cats = this.formCats;
    this.editForm.patchValue({
      cats: cats.filter(_cat => _cat.id !== cat.id)
    });
  }
  checkOldCats(cats) {
    cats.forEach(cat => {
      this.checkOldcat(cat);
    });
  }
  checkOldcat(cat) {
    const input = document.querySelector(`#i${cat.id}`);
    if (!input) {
      setTimeout(() => this.checkOldcat(cat), 100);
      return;
    }
    input.checked = true;
  }
  static #_ = this.ɵfac = function CreatePlanComponent_Factory(t) {
    return new (t || CreatePlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_cat_service__WEBPACK_IMPORTED_MODULE_2__.CatService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CreatePlanComponent,
    selectors: [["create-plan"]],
    inputs: {
      isNew: "isNew"
    },
    outputs: {
      delete: "delete"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 7,
    consts: [[1, "p-3"], [1, "form-header"], [1, "form-title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512", 1, "form-icon", 3, "click"], ["d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"], [3, "formGroup", "ngSubmit", "keydown.enter"], ["for", "name", 1, "form-label"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click", 4, "ngIf"], ["for", "meal", 1, "form-label"], [1, "addup-area"], ["class", "addup-cell", 4, "ngFor", "ngForOf"], ["class", "addup-cell", 4, "ngIf"], ["for", "cats", 1, "form-label"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "form-buttom", 3, "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click"], ["d", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"], [1, "addup-cell"], ["d", "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"], ["type", "text", "name", "meal", "id", "meal", "formControlName", "meal", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1rem", "viewBox", "0 0 512 512", 3, "click"], ["d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "change"], [1, "mt-1", 3, "for"]],
    template: function CreatePlanComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatePlanComponent_Template__svg_svg_click_4_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CreatePlanComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        })("keydown.enter", function CreatePlanComponent_Template_form_keydown_enter_6_listener($event) {
          return ctx.catchKeyPress($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CreatePlanComponent__svg_svg_12_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div")(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Refei\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CreatePlanComponent_div_17_Template, 4, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CreatePlanComponent_div_18_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div")(20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "gatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CreatePlanComponent_div_22_Template, 4, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.isNew ? "Novo" : "", " Plano");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.meals);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cats);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    z-index: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background-color: #00000040;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n    background: white;\n    border-radius: 2rem;\n    padding: 2rem 1rem\n}\n\n.addup-area[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.2em;\n    margin: 0.2em 0;\n}\n\n.addup-cell[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9mb29kL2NvbXBvbmVudHMvY3JlYXRlLXBsYW4vY3JlYXRlLXBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA0MDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgcGFkZGluZzogMnJlbSAxcmVtXG59XG5cbi5hZGR1cC1hcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjJlbTtcbiAgICBtYXJnaW46IDAuMmVtIDA7XG59XG5cbi5hZGR1cC1jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4ycmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9947:
/*!******************************************!*\
  !*** ./src/pages/food/food.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodComponent: () => (/* binding */ FoodComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create-plan/create-plan.component */ 3384);
/* harmony import */ var src_model_Plan_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/Plan.model */ 4370);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_services_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/plan.service */ 2017);








const _c0 = ["carousel"];
function FoodComponent_9_ng_template_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FoodComponent_9_ng_template_0_div_6_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onServingMeal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const meal_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "meal", meal_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", meal_r7.foiServida)("value", meal_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "meal", meal_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](meal_r7.nome);
  }
}
function FoodComponent_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FoodComponent_9_ng_template_0_Template__svg_svg_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const plan_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.openModal(plan_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FoodComponent_9_ng_template_0_div_6_Template, 4, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r4 = ctx_r13.index;
    const plan_r3 = ctx_r13.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", plan_r3.refeicoes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbPopover", ctx_r5.getGats(plan_r3));
  }
}
function FoodComponent_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FoodComponent_9_ng_template_0_Template, 10, 4, "ng-template", 14);
  }
}
const _c1 = function (a0) {
  return {
    active: a0
  };
};
function FoodComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FoodComponent_ng_container_17_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.onBubbleClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const b_r15 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, b_r15 === ctx_r2.currentCard));
  }
}
class FoodComponent {
  constructor(planService, modalService) {
    this.planService = planService;
    this.modalService = modalService;
    this.plans = [];
    this._currentCard = 0;
    this.touchStartX = null;
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
  updateBubble(event) {
    this.currentCard = Number(event.current.split('-')[2]);
  }
  ngOnInit() {
    this.load();
  }
  openModal(plan) {
    const ref = this.modalService.open(_components_create_plan_create_plan_component__WEBPACK_IMPORTED_MODULE_0__.CreatePlanComponent, {
      centered: true
    });
    if (plan) {
      ref.componentInstance.isNew = false;
      ref.componentInstance.editForm.patchValue({
        name: plan.nome,
        cats: plan.gatos
      });
      ref.componentInstance.checkOldCats(plan.gatos);
      plan.refeicoes?.forEach(meal => {
        ref.componentInstance.pushMeal(meal);
      });
      ref.closed.subscribe(_plan => {
        _plan.id = plan.id;
        return this.planService.put(_plan).subscribe(() => this.load());
      });
      ref.componentInstance.delete.subscribe(() => {
        this.planService.delete(plan).subscribe(() => {
          this.load();
        });
      });
      return;
    }
    ref.closed.subscribe(_plan => {
      this.planService.post(_plan).subscribe(() => this.load());
    });
  }
  deletePlan(plan) {
    this.planService.delete(plan).subscribe();
    this.load();
  }
  onPreviousCard() {
    this.currentCard--;
    this.carousel.prev();
  }
  onNextCard() {
    this.currentCard++;
    this.carousel.next();
  }
  onBubbleClick() {
    this.carousel.select("slide-ngb-slide-" + this.currentCard);
  }
  onServingMeal(event) {
    const meal = new src_model_Plan_model__WEBPACK_IMPORTED_MODULE_1__.Meal();
    meal.id = Number(event.target.value);
    meal.foiServida = event.target?.checked;
    this.planService.serve(meal).subscribe();
  }
  getGats(plan) {
    if (!plan.gatos || plan.gatos.length === 0) {
      return 'sem gatos';
    }
    return plan.gatos?.map(cat => cat.nome).join(', ');
  }
  get currentCard() {
    return this._currentCard;
  }
  set currentCard(i) {
    if (i < 0 || i > this.plans.length - 1) {
      return;
    }
    this._currentCard = i;
  }
  load() {
    this.planService.fetch().subscribe(plans => {
      this.plans = plans;
    });
  }
  static #_ = this.ɵfac = function FoodComponent_Factory(t) {
    return new (t || FoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_plan_service__WEBPACK_IMPORTED_MODULE_2__.PlanService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FoodComponent,
    selectors: [["app-food"]],
    viewQuery: function FoodComponent_Query(rf, ctx) {
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
    decls: 18,
    vars: 5,
    consts: [[1, "food"], [1, "page-header"], [1, "page-title"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1rem", "viewBox", "0 0 512 512", 3, "click"], ["d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"], [3, "touchstart", "touchend"], [1, "mt-5", 3, "wrap", "showNavigationArrows", "interval", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "arrow-left", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 320 512"], ["d", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"], [1, "arrow-right", 3, "click"], [1, "bubbles"], ["ngbSlide", ""], [1, "card", "d-flex", "gap-3", "justify-content-evenly", 3, "id"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "card-title"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 512 512", 3, "click"], ["d", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"], ["class", "card-field", 4, "ngFor", "ngForOf"], [1, "align-self-end", "mt-3"], ["placement", "start", "height", "1.2rem", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 3, "ngbPopover"], ["d", "M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160 154.4c0-5.8 4.7-10.4 10.4-10.4h.2c3.4 0 6.5 1.6 8.5 4.3l40 53.3c3 4 7.8 6.4 12.8 6.4h48c5 0 9.8-2.4 12.8-6.4l40-53.3c2-2.7 5.2-4.3 8.5-4.3h.2c5.8 0 10.4 4.7 10.4 10.4V272c0 53-43 96-96 96s-96-43-96-96V154.4zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"], [1, "card-field"], ["type", "checkbox", 1, "card-checkbox", 3, "id", "checked", "value", "change"], [1, "card-checkbox-label", 3, "for"], [1, "bubble", 3, "ngClass", "click"]],
    template: function FoodComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Alimenta\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FoodComponent_Template__svg_svg_click_4_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("touchstart", function FoodComponent_Template_div_touchstart_6_listener($event) {
          return ctx.onTouchStart($event);
        })("touchend", function FoodComponent_Template_div_touchend_6_listener($event) {
          return ctx.onTouchEnd($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ngb-carousel", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("slide", function FoodComponent_Template_ngb_carousel_slide_7_listener($event) {
          return ctx.updateBubble($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FoodComponent_9_Template, 1, 0, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FoodComponent_Template_span_click_10_listener() {
          return ctx.onPreviousCard();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FoodComponent_Template_span_click_13_listener() {
          return ctx.onNextCard();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, FoodComponent_ng_container_17_Template, 2, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("wrap", false)("showNavigationArrows", false)("interval", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.plans);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.plans);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPopover, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarouselModule],
    styles: [".food[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    margin: 1rem 2rem;\n    min-height: 50%;\n    border: 1px solid black;\n    border-radius: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    text-align: center;\n}\n\n.card-field[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.card-checkbox[_ngcontent-%COMP%] {\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.card-checkbox-label[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n}\n.arrow-left[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 10px;\n    top: 42%;\n    transform: rotate(180deg);\n}\n\n.arrow-right[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 10px;\n    top: 42%;\n}\n\n.bubbles[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    margin: 1rem auto;\n}\n\n.bubble[_ngcontent-%COMP%] {\n    width: 5px;\n    height: 5px;\n    margin: 0 0.5rem;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n\n.active[_ngcontent-%COMP%] {\n    background: black\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9mb29kL2Zvb2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZCB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIG1hcmdpbjogMXJlbSAycmVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4ycmVtO1xufVxuXG4uY2FyZC1jaGVja2JveCB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbn1cblxuLmNhcmQtY2hlY2tib3gtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmFycm93LWxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogNDIlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5hcnJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNDIlO1xufVxuXG4uYnViYmxlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG4uYnViYmxlIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIG1hcmdpbjogMCAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2tcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_pages_food_food_component_ts.js.map