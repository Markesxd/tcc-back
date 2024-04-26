"use strict";
(self["webpackChunktpwp"] = self["webpackChunktpwp"] || []).push([["src_pages_health_health_component_ts"],{

/***/ 8981:
/*!************************************************!*\
  !*** ./src/Pipes/FormatRepeatInterval.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatRepeatInterval: () => (/* binding */ FormatRepeatInterval)
/* harmony export */ });
/* harmony import */ var src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/healthEvent.model */ 2624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class FormatRepeatInterval {
  transform(value) {
    switch (value) {
      case src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_0__.ReapeatInterval.WEEKLY:
        return 'Semanal';
      case src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_0__.ReapeatInterval.DAILY:
        return 'Diario';
      case src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_0__.ReapeatInterval.MONTHLY:
        return 'Mensal';
      case src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_0__.ReapeatInterval.NO_REPEAT:
        return 'Único';
      case src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_0__.ReapeatInterval.YEARLY:
        return 'Anual';
    }
  }
  static #_ = this.ɵfac = function FormatRepeatInterval_Factory(t) {
    return new (t || FormatRepeatInterval)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "FormatRepeatInterval",
    type: FormatRepeatInterval,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 2624:
/*!****************************************!*\
  !*** ./src/model/healthEvent.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthEvent: () => (/* binding */ HealthEvent),
/* harmony export */   ReapeatInterval: () => (/* binding */ ReapeatInterval)
/* harmony export */ });
class HealthEvent {
  createFromForm(formGroup) {
    this.nome = formGroup.get('name')?.value;
    this.data = formGroup.get('date')?.value;
    this.gatos = formGroup.get('cats')?.value;
    this.intervaloDeRepeticao = Number(formGroup.get('repeatInterval')?.value);
  }
}
var ReapeatInterval;
(function (ReapeatInterval) {
  ReapeatInterval[ReapeatInterval["NO_REPEAT"] = 0] = "NO_REPEAT";
  ReapeatInterval[ReapeatInterval["DAILY"] = 1] = "DAILY";
  ReapeatInterval[ReapeatInterval["WEEKLY"] = 2] = "WEEKLY";
  ReapeatInterval[ReapeatInterval["MONTHLY"] = 3] = "MONTHLY";
  ReapeatInterval[ReapeatInterval["YEARLY"] = 4] = "YEARLY";
})(ReapeatInterval || (ReapeatInterval = {}));

/***/ }),

/***/ 313:
/*!******************************************************************************************!*\
  !*** ./src/pages/health/components/create-health-event/create-health-event.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateHealthEventComponent: () => (/* binding */ CreateHealthEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_Pipes_FormatRepeatInterval_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Pipes/FormatRepeatInterval.pipe */ 8981);
/* harmony import */ var src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/healthEvent.model */ 2624);
/* harmony import */ var src_util_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/util/date */ 8474);
/* harmony import */ var src_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/confirmation-modal/confirmation-modal.component */ 6933);
/* harmony import */ var src_services_cat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/cat.service */ 2187);
/* harmony import */ var src_services_healthEvent_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/healthEvent.service */ 3874);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);













function CreateHealthEventComponent__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateHealthEventComponent__svg_svg_12_Template__svg_svg_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CreateHealthEventComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "FormatRepeatInterval");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", value_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, value_r5));
  }
}
function CreateHealthEventComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CreateHealthEventComponent_div_25_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.onChangeCat($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "i", cat_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cat_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("for", "i", cat_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cat_r6.nome);
  }
}
class CreateHealthEventComponent {
  constructor(fb, catService, eventService, activeModal, modalService) {
    this.fb = fb;
    this.catService = catService;
    this.eventService = eventService;
    this.activeModal = activeModal;
    this.modalService = modalService;
    this.repeatIntervalValues = Object.values(src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_1__.ReapeatInterval).filter(o => !isNaN(o));
    this.isNew = true;
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.editForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      date: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      repeatInterval: src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_1__.ReapeatInterval.NO_REPEAT,
      cats: [[]]
    });
  }
  ngOnInit() {
    this.catService.get().subscribe(cats => {
      this.cats = cats.body;
    });
  }
  onChangeCat(event) {
    const input = event.target;
    if (input === null) {
      return;
    }
    const id = Number(input.value);
    if (input.checked) {
      const cat = this.getCatById(id);
      if (!cat) {
        return;
      }
      this.pushCat(cat);
    } else {
      this.removeCat(id);
    }
  }
  onSubmit() {
    const healthEvent = new src_model_healthEvent_model__WEBPACK_IMPORTED_MODULE_1__.HealthEvent();
    healthEvent.createFromForm(this.editForm);
    this.activeModal.close(healthEvent);
  }
  onDelete() {
    const ref = this.modalService.open(src_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModalComponent, {
      centered: true
    });
    ref.componentInstance.text = "Você tem certeza que deseja excluir este evento?";
    ref.closed.subscribe(() => {
      this.delete.emit();
      this.activeModal.dismiss();
    });
  }
  dismiss() {
    this.activeModal.dismiss();
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
  pushCat(cat) {
    const cats = this.formCats;
    cats.push(cat);
    this.editForm.patchValue({
      cats
    });
  }
  removeCat(id) {
    const cats = this.formCats;
    this.editForm.patchValue({
      cats: cats.filter(cat => cat.id !== id)
    });
  }
  firstTimeLoadCats(cats) {
    for (const cat of cats) {
      this.firstTimeLoadCat(cat);
    }
  }
  firstTimeLoadDate() {
    const input = document.querySelector('#date');
    const date = this.editForm.get('date')?.value ?? new Date();
    input.value = (0,src_util_date__WEBPACK_IMPORTED_MODULE_2__.convertFromDate)(date);
  }
  firstTimeLoadCat(cat) {
    const input = document.querySelector(`#i${cat.id}`);
    if (!input) {
      setTimeout(() => this.firstTimeLoadCat(cat), 100);
    } else {
      input.checked = true;
    }
  }
  static #_ = this.ɵfac = function CreateHealthEventComponent_Factory(t) {
    return new (t || CreateHealthEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_cat_service__WEBPACK_IMPORTED_MODULE_4__.CatService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_services_healthEvent_service__WEBPACK_IMPORTED_MODULE_5__.HealthEventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CreateHealthEventComponent,
    selectors: [["create-health-event"]],
    outputs: {
      delete: "delete"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 28,
    vars: 7,
    consts: [[1, "p-3"], [1, "form-header"], [1, "form-title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 384 512", 1, "form-icon", 3, "click"], ["d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"], [3, "formGroup", "ngSubmit"], ["for", "name", 1, "form-label"], [1, "d-flex", "align-items-center", "gap-2"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click", 4, "ngIf"], ["for", "date", 1, "form-label"], ["type", "date", "id", "date", "formControlName", "date", 1, "form-control"], ["for", "repeat", 1, "form-label"], ["formControlName", "repeatInterval", "id", "repeat", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-label"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "form-buttom", 3, "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 448 512", 3, "click"], ["d", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"], [3, "value"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "change"], [1, "mt-1", 3, "for"]],
    template: function CreateHealthEventComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CreateHealthEventComponent_Template__svg_svg_click_4_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CreateHealthEventComponent_Template_form_ngSubmit_6_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CreateHealthEventComponent__svg_svg_12_Template, 2, 0, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div")(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div")(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Intervalo de Repeti\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CreateHealthEventComponent_option_21_Template, 3, 4, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div")(23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "gatos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, CreateHealthEventComponent_div_25_Template, 4, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.isNew ? "Novo" : "", " Evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isNew);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.repeatIntervalValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cats);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isNew ? "Cadastrar" : "Salvar");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, src_Pipes_FormatRepeatInterval_pipe__WEBPACK_IMPORTED_MODULE_0__.FormatRepeatInterval],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3044:
/*!**********************************************!*\
  !*** ./src/pages/health/health.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthComponent: () => (/* binding */ HealthComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_create_health_event_create_health_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create-health-event/create-health-event.component */ 313);
/* harmony import */ var src_Pipes_FormatDate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/Pipes/FormatDate.pipe */ 4144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_services_healthEvent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/healthEvent.service */ 3874);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 8859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);









function HealthComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthComponent_tr_15_Template__svg_svg_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const event_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openModal(event_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r1.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, event_r1.data));
  }
}
class HealthComponent {
  constructor(healthEventService, cookieService, router, modalService) {
    this.healthEventService = healthEventService;
    this.cookieService = cookieService;
    this.router = router;
    this.modalService = modalService;
    this.showModal = false;
  }
  ngOnInit() {
    this.load();
  }
  openModal(event) {
    const ref = this.modalService.open(_components_create_health_event_create_health_event_component__WEBPACK_IMPORTED_MODULE_0__.CreateHealthEventComponent, {
      centered: true
    });
    if (event) {
      const data = new Date(event.data ?? '');
      ref.componentInstance.isNew = false;
      ref.componentInstance.editForm.patchValue({
        name: event.nome,
        date: data,
        repeatInterval: event.intervaloDeRepeticao
      });
      ref.componentInstance.firstTimeLoadCats(event.gatos);
      setTimeout(() => {
        ref.componentInstance.firstTimeLoadDate();
      }, 200);
      ref.componentInstance.delete.subscribe(() => this.deleteEvent(event));
    }
    ref.closed.subscribe(_event => {
      if (event !== undefined) {
        _event.id = event.id;
        this.healthEventService.put(_event).subscribe(() => {
          this.events = this.events?.filter(evt => evt.id !== event.id);
          this.events?.push(_event);
        });
      } else {
        this.healthEventService.post(_event).subscribe(res => {
          this.events?.push(res);
        });
      }
    });
  }
  deleteEvent(event) {
    if (!event.id) {
      throw new Error('Evento sem id');
    }
    this.healthEventService.delete(event.id).subscribe(() => {
      this.events = this.events?.filter(evt => evt !== event);
    });
  }
  load() {
    this.healthEventService.fetch().subscribe(res => {
      this.events = res;
    });
  }
  static #_ = this.ɵfac = function HealthComponent_Factory(t) {
    return new (t || HealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_healthEvent_service__WEBPACK_IMPORTED_MODULE_2__.HealthEventService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HealthComponent,
    selectors: [["app-health"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 1,
    consts: [[1, "page-header"], [1, "page-title"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1em", "viewBox", "0 0 512 512", 3, "click"], ["d", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"], [1, "health-content"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between"], ["d", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]],
    template: function HealthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sa\u00FAde");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthComponent_Template__svg_svg_click_3_listener() {
          return ctx.openModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 4)(6, "table", 5)(7, "thead")(8, "tr")(9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, HealthComponent_tr_15_Template, 10, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.events);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, src_Pipes_FormatDate_pipe__WEBPACK_IMPORTED_MODULE_1__.FormatDate],
    styles: [".health-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWx0aC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3874:
/*!*********************************************!*\
  !*** ./src/services/healthEvent.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthEventService: () => (/* binding */ HealthEventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class HealthEventService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/evento';
  }
  post(healthEvent) {
    return this.http.post(this.baseUrl, healthEvent, {
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.body));
  }
  fetch() {
    return this.http.get(this.baseUrl);
  }
  put(healthEvent) {
    return this.http.put(this.baseUrl, healthEvent, {
      observe: 'response'
    });
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      observe: 'response'
    });
  }
  static #_ = this.ɵfac = function HealthEventService_Factory(t) {
    return new (t || HealthEventService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: HealthEventService,
    factory: HealthEventService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8474:
/*!**************************!*\
  !*** ./src/util/date.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFromDate: () => (/* binding */ convertFromDate)
/* harmony export */ });
function convertFromDate(date) {
  return `${date.getFullYear()}-${getMonthLeadingZero(date.getMonth())}-${date.getDate()}`;
}
function getMonthLeadingZero(month) {
  return month < 10 ? `0${month}` : `${month}`;
}


/***/ })

}]);
//# sourceMappingURL=src_pages_health_health_component_ts.js.map