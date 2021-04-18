(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marta\Desktop\cag-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "4d/M":
/*!************************************************************!*\
  !*** ./src/app/directives/choosen-filled-box.directive.ts ***!
  \************************************************************/
/*! exports provided: ChoosenFilledBoxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosenFilledBoxDirective", function() { return ChoosenFilledBoxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sevices_grid_grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sevices/grid/grid.service */ "jf2I");


class ChoosenFilledBoxDirective {
    constructor(gridSerivce) {
        this.gridSerivce = gridSerivce;
    }
    clicked() {
        this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElementAndCount(this.element);
    }
    Enter() {
        this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElementAndCount(this.element);
    }
    mouseover() {
        this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElement(this.element);
    }
    mouseleave() {
        this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElement(this.element);
    }
}
ChoosenFilledBoxDirective.ɵfac = function ChoosenFilledBoxDirective_Factory(t) { return new (t || ChoosenFilledBoxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sevices_grid_grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"])); };
ChoosenFilledBoxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChoosenFilledBoxDirective, selectors: [["", "appChoosenFilledBox", ""]], hostBindings: function ChoosenFilledBoxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoosenFilledBoxDirective_click_HostBindingHandler() { return ctx.clicked(); })("keyup.Space", function ChoosenFilledBoxDirective_keyup_Space_HostBindingHandler() { return ctx.Enter(); })("mouseover", function ChoosenFilledBoxDirective_mouseover_HostBindingHandler() { return ctx.mouseover(); })("mouseleave", function ChoosenFilledBoxDirective_mouseleave_HostBindingHandler() { return ctx.mouseleave(); });
    } }, inputs: { element: ["appChoosenFilledBox", "element"] } });


/***/ }),

/***/ "5igc":
/*!**********************************!*\
  !*** ./src/app/GridGenerator.ts ***!
  \**********************************/
/*! exports provided: GridGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridGenerator", function() { return GridGenerator; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "Afm0");

class GridGenerator {
    constructor() {
        this.generate = (n) => {
            return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createTwoDimenensionalArray"])(n);
        };
    }
}


/***/ }),

/***/ "Afm0":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: createTwoDimenensionalArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTwoDimenensionalArray", function() { return createTwoDimenensionalArray; });
const createTwoDimenensionalArray = (size) => {
    const result = [];
    for (let i = 0; i < size; i++) {
        result[i] = [];
        for (let j = 0; j < size; j++) {
            result[i][j] = { value: Math.floor(Math.random() * 2), isCurrentlyNeighbourToHoveredElement: false };
        }
    }
    return result;
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CAXE":
/*!***********************************************************************!*\
  !*** ./src/app/components/controls-panel/controls-panel.component.ts ***!
  \***********************************************************************/
/*! exports provided: ControlsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsPanelComponent", function() { return ControlsPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _controls_panel_item_wrapper_controls_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls-panel-item-wrapper/controls-panel-item-wrapper.component */ "X49x");
/* harmony import */ var _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../range-slider/range-slider.component */ "QCoA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ControlsPanelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ControlsPanelComponent_div_12_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const colorPicker_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.emitChangedColor(colorPicker_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colorPicker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", colorPicker_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", colorPicker_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", colorPicker_r1.defaultColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", colorPicker_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colorPicker_r1.label);
} }
class ControlsPanelComponent {
    constructor() {
        this.emitRangeSliderValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitColorPickerValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    emitChangedColor(colorPicker, $event) {
        this.emitColorPickerValue.emit({
            label: colorPicker.label,
            defaultColor: $event.target.value
        });
    }
    emitRegenerateGrid($event) {
        this.emitRangeSliderValue.emit($event);
    }
}
ControlsPanelComponent.ɵfac = function ControlsPanelComponent_Factory(t) { return new (t || ControlsPanelComponent)(); };
ControlsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlsPanelComponent, selectors: [["app-controls-panel"]], inputs: { colorPickers: "colorPickers" }, outputs: { emitRangeSliderValue: "emitRangeSliderValue", emitColorPickerValue: "emitColorPickerValue" }, decls: 13, vars: 4, consts: [[1, "cag-controls-panel"], [3, "isClickable"], ["item-wrapper-body", ""], [1, "cag-controls-panel__demo-controls--title"], ["item-wrapper-body", "", 3, "emitRangeSliderValue"], [1, "cag-controls-panel__demo-controls--subtitle"], [1, "col-1-1"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["type", "color", 1, "pointer", 3, "id", "name", "value", "input"], [3, "for"]], template: function ControlsPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-controls-panel-item-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Customizable Accessible Grid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-controls-panel-item-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-range-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitRangeSliderValue", function ControlsPanelComponent_Template_app_range_slider_emitRangeSliderValue_6_listener($event) { return ctx.emitRegenerateGrid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-controls-panel-item-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Grid Colors: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ControlsPanelComponent_div_12_Template, 4, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClickable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClickable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClickable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorPickers);
    } }, directives: [_controls_panel_item_wrapper_controls_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ControlsPanelItemWrapperComponent"], _range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_2__["RangeSliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".cag-controls-panel[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n.cag-controls-panel__demo-controls--title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1em;\n  font-weight: 700;\n  color: #000000;\n}\n.cag-controls-panel__demo-controls--subtitle[_ngcontent-%COMP%] {\n  padding: 0.2em 0;\n}\n\ninput[type=color][_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250cm9scy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQSxrQkFBQTtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJjb250cm9scy1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRyb2wgUGFuZWwgKi9cclxuLmNhZy1jb250cm9scy1wYW5lbCB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG4uY2FnLWNvbnRyb2xzLXBhbmVsX19kZW1vLWNvbnRyb2xzLS10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uY2FnLWNvbnRyb2xzLXBhbmVsX19kZW1vLWNvbnRyb2xzLS1zdWJ0aXRsZSB7XHJcbiAgcGFkZGluZzogMC4yZW0gMDtcclxufVxyXG5cclxuLyogQ29sb3IgUGlja2VycyAqL1xyXG5pbnB1dFt0eXBlPWNvbG9yXSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Fw0C":
/*!*******************************************************************!*\
  !*** ./src/app/components/primary-link/primary-link.component.ts ***!
  \*******************************************************************/
/*! exports provided: PrimaryLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryLinkComponent", function() { return PrimaryLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PrimaryLinkComponent {
    constructor() {
        this.href = '';
        this.text = '';
    }
}
PrimaryLinkComponent.ɵfac = function PrimaryLinkComponent_Factory(t) { return new (t || PrimaryLinkComponent)(); };
PrimaryLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryLinkComponent, selectors: [["app-primary-link"]], inputs: { href: "href", text: "text" }, decls: 2, vars: 2, consts: [[1, "btn-large-blue-outline", 3, "href"]], template: function PrimaryLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: [".btn-large-blue-outline[_ngcontent-%COMP%] {\n  padding: 1em 2em;\n  margin: 1em 0;\n  border-radius: 25px;\n  color: #2095f3;\n  box-shadow: inset 0 0 0 2px #2095f3;\n  text-decoration: none;\n  display: block;\n  outline: none;\n  animation: normal;\n  transition: all 1s;\n}\n.btn-large-blue-outline[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.btn-large-blue-outline[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 2px #2095f3, 0 0 0 2px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmltYXJ5LWxpbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQUE7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrRUFBa0U7QUFDcEUiLCJmaWxlIjoicHJpbWFyeS1saW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGluaywgYnV0dG9uIGNsYXNzZXMgKi9cclxuLmJ0bi1sYXJnZS1ibHVlLW91dGxpbmUge1xyXG4gIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGNvbG9yOiAjMjA5NWYzO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMjA5NWYzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGFuaW1hdGlvbjogbm9ybWFsO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxufVxyXG5cclxuLmJ0bi1sYXJnZS1ibHVlLW91dGxpbmU6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYnRuLWxhcmdlLWJsdWUtb3V0bGluZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMyMDk1ZjMsIDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "QCoA":
/*!*******************************************************************!*\
  !*** ./src/app/components/range-slider/range-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: RangeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSliderComponent", function() { return RangeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RangeSliderComponent {
    constructor() {
        this.currentSizeValue = 10;
        this.emitRangeSliderValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onChange(changeRangeEvent) {
        this.currentSizeValue = changeRangeEvent.target.value;
        this.emitRangeSliderValue.emit(this.currentSizeValue);
    }
}
RangeSliderComponent.ɵfac = function RangeSliderComponent_Factory(t) { return new (t || RangeSliderComponent)(); };
RangeSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangeSliderComponent, selectors: [["app-range-slider"]], outputs: { emitRangeSliderValue: "emitRangeSliderValue" }, decls: 6, vars: 1, consts: [["item-wrapper-body", "", 1, "col-1-1"], [1, "cag-controls-panel__demo-controls--subtitle"], ["id", "currentSizeValue"], ["type", "range", "min", "4", "max", "10", "value", "10", "id", "sizeRange", 1, "slider", "pointer", 3, "input"]], template: function RangeSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RangeSliderComponent_Template_input_input_5_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentSizeValue);
    } }, styles: [".slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  max-height: 25px;\n  background: #d3d3d3;\n  outline: none;\n  transition: opacity 0.2s;\n  border-radius: 25px;\n  padding: 0.1em;\n  width: 100%;\n  display: flex;\n}\n.slider[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 1pt rgba(0, 0, 0, 0.85);\n}\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #2095f3;\n}\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #2095f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYW5nZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsaUJBQUE7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUViLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0FBQWY7QUFHQTtFQUNFLHlDQUF5QztBQUEzQztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFBckI7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUFyQiIsImZpbGUiOiJyYW5nZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogUmFuZ2UgU2xpZGVyICovXHJcbi5zbGlkZXIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIG1heC1oZWlnaHQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwYWRkaW5nOiAwLjFlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2xpZGVyOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHQgcmdiYSgwLCAwLCAwLCAwLjg1KTtcclxufVxyXG5cclxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzIwOTVmMztcclxufVxyXG5cclxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjA5NWYzO1xyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sevices_grid_grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sevices/grid/grid.service */ "jf2I");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/controls-panel/controls-panel.component */ "CAXE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_choosen_filled_box_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/choosen-filled-box.directive */ "4d/M");








const _c0 = ["sidenav"];
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
const _c2 = function (a0) { return { pointer: a0 }; };
function AppComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_div_14_div_1_Template_div_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const boxElement_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return boxElement_r5.value ? ctx_r7.getSpaceInputEvent($event) : ""; })("click", function AppComponent_div_14_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const boxElement_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return boxElement_r5.value ? ctx_r9.getAndDisplayCountedVerticallyAndHortizontallyAlignedBoxesToElement($event) : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boxElement_r5 = ctx.$implicit;
    const boxIndex_r6 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r4.applyBackgroundColor(boxElement_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appChoosenFilledBox", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c1, boxElement_r5, i_r3, boxIndex_r6))("tabindex", boxElement_r5.value === 1 ? 0 : -1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, boxElement_r5.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", boxElement_r5.value, " ");
} }
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_14_div_1_Template, 2, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
class AppComponent {
    constructor(gridService) {
        this.gridService = gridService;
        this.opened = true;
        this.currentGridState = this.gridService.currentGridValue;
        this.colorPickers = [
            { label: 'Box Color', target: 'colorPickerForBoxes', defaultColor: '#EDDEDE' },
            { label: 'Filled Box Color', target: 'colorPickerForFilledBoxes', defaultColor: '#E1E1DF' },
            { label: 'Hover Box Color', target: 'colorPickerForHoveredAndNeigbouringBoxes', defaultColor: '#FFFFFF' }
        ];
        this.codeLink = 'https://github.com/frenchvargulf/cag-frontend';
        this.codeLinkText = 'View Code';
        this.reason = '';
    }
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
    regenerateGrid($event) {
        this.gridService.generateGrid($event);
        this.currentGridState = this.gridService.currentGridValue;
    }
    changeColor($event) {
        const newColorPickers = [...this.colorPickers];
        newColorPickers.forEach(colorPicker => {
            if (colorPicker.label === $event.label) {
                colorPicker.defaultColor = $event.defaultColor;
                return colorPicker;
            }
            return colorPicker;
        });
        this.colorPickers = newColorPickers;
    }
    applyBackgroundColor(boxElement) {
        return boxElement.value === 1 ?
            (boxElement.isCurrentlyNeighbourToHoveredElement ? this.colorPickers[2].defaultColor : this.colorPickers[1].defaultColor) :
            this.colorPickers[0].defaultColor;
    }
    getSpaceInputEvent(keybordInputEvent) {
        if (keybordInputEvent.keyCode === 32) {
            this.getAndDisplayCountedVerticallyAndHortizontallyAlignedBoxesToElement(keybordInputEvent);
        }
    }
    getAndDisplayCountedVerticallyAndHortizontallyAlignedBoxesToElement(clickedBox) {
        const count = this.gridService.getVerticallyAndHorizontallyAlignedBoxesToElementCount();
        clickedBox.target.innerText = count;
        if (this.previouslyClickedElement) {
            this.previouslyClickedElement.innerText = 1;
        }
        this.previouslyClickedElement = clickedBox.target;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sevices_grid_grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 15, vars: 2, consts: [[1, "cag-demo-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["sidenav", ""], ["mat-button", "", 3, "click"], [1, "cag-demo-container__box"], [1, "cag-controls-panel", 3, "colorPickers", "emitColorPickerValue", "emitRangeSliderValue"], [1, "col-1-1"], [1, "cag-grid", "shadow"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "box_element", 3, "appChoosenFilledBox", "tabindex", "ngClass", "backgroundColor", "keyup", "click", 4, "ngFor", "ngForOf"], [1, "box_element", 3, "appChoosenFilledBox", "tabindex", "ngClass", "keyup", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function AppComponent_Template_mat_sidenav_container_backdropClick_0_listener() { return ctx.close("backdrop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function AppComponent_Template_mat_sidenav_keydown_escape_1_listener() { return ctx.close("escape"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.close("toggle button"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-controls-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitColorPickerValue", function AppComponent_Template_app_controls_panel_emitColorPickerValue_7_listener($event) { return ctx.changeColor($event); })("emitRangeSliderValue", function AppComponent_Template_app_controls_panel_emitRangeSliderValue_7_listener($event) { return ctx.regenerateGrid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Customize Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPickers", ctx.colorPickers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentGridState);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _components_controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_5__["ControlsPanelComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _directives_choosen_filled_box_directive__WEBPACK_IMPORTED_MODULE_7__["ChoosenFilledBoxDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".box_element[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #000000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box_element--filled[_ngcontent-%COMP%] {\n  transition: all 1s;\n  cursor: pointer;\n}\n.box_element--filled[_ngcontent-%COMP%]:hover, .box_element--filled[_ngcontent-%COMP%]:focus {\n  font-size: 1.2em;\n}\n.cag-demo-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUVaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUFyQjtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFBakI7QUFHQTtFQUNFLGdCQUFnQjtBQUFsQjtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFBViIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCb3ggRWxlbWVudCAqL1xyXG4uYm94X2VsZW1lbnQge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3hfZWxlbWVudC0tZmlsbGVkIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94X2VsZW1lbnQtLWZpbGxlZDpob3ZlciwgLmJveF9lbGVtZW50LS1maWxsZWQ6Zm9jdXMge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5jYWctZGVtby1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "X49x":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/controls-panel-item-wrapper/controls-panel-item-wrapper.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ControlsPanelItemWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsPanelItemWrapperComponent", function() { return ControlsPanelItemWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = [[["", "item-wrapper-body", ""]]];
const _c1 = ["[item-wrapper-body]"];
class ControlsPanelItemWrapperComponent {
    constructor() {
        this.isClickable = false;
    }
}
ControlsPanelItemWrapperComponent.ɵfac = function ControlsPanelItemWrapperComponent_Factory(t) { return new (t || ControlsPanelItemWrapperComponent)(); };
ControlsPanelItemWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlsPanelItemWrapperComponent, selectors: [["app-controls-panel-item-wrapper"]], inputs: { isClickable: "isClickable" }, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[1, "cag-controls-panel__demo-controls", 3, "ngClass"]], template: function ControlsPanelItemWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isClickable ? "pointer" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".cag-controls-panel__demo-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  border: 1px solid #dfdfdf;\n  background-color: #ffffff;\n  justify-content: space-around;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250cm9scy1wYW5lbC1pdGVtLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZCIsImZpbGUiOiJjb250cm9scy1wYW5lbC1pdGVtLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FnLWNvbnRyb2xzLXBhbmVsX19kZW1vLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controls-panel/controls-panel.component */ "CAXE");
/* harmony import */ var _components_controls_panel_item_wrapper_controls_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controls-panel-item-wrapper/controls-panel-item-wrapper.component */ "X49x");
/* harmony import */ var _components_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/range-slider/range-slider.component */ "QCoA");
/* harmony import */ var _directives_choosen_filled_box_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/choosen-filled-box.directive */ "4d/M");
/* harmony import */ var _components_primary_link_primary_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/primary-link/primary-link.component */ "Fw0C");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_controls_panel_controls_panel_component__WEBPACK_IMPORTED_MODULE_2__["ControlsPanelComponent"],
        _components_controls_panel_item_wrapper_controls_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ControlsPanelItemWrapperComponent"],
        _directives_choosen_filled_box_directive__WEBPACK_IMPORTED_MODULE_5__["ChoosenFilledBoxDirective"],
        _components_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_4__["RangeSliderComponent"],
        _components_primary_link_primary_link_component__WEBPACK_IMPORTED_MODULE_6__["PrimaryLinkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"]] }); })();


/***/ }),

/***/ "jf2I":
/*!**********************************************!*\
  !*** ./src/app/sevices/grid/grid.service.ts ***!
  \**********************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _GridGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GridGenerator */ "5igc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GridService {
    constructor() {
        this.defaultGridRange = 10;
        this.gridGenerator = new _GridGenerator__WEBPACK_IMPORTED_MODULE_1__["GridGenerator"]();
        this.verticallyAndHorizontallyAlignedBoxesToElementState = {};
        this.verticallyAndHorizontallyAlignedBoxesToElementCount = 0;
        this.currentGridSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.gridGenerator.generate(10));
        this.currentGrid = this.currentGridSubject.asObservable();
    }
    get currentGridValue() {
        return this.currentGridSubject.value;
    }
    generateGrid(n) {
        this.currentGridSubject.next(this.gridGenerator.generate(n));
        return this.gridGenerator.generate(n);
    }
    findVerticallyAndHorizontallyAlignedBoxesToElement(value) {
        this.currentElementState = value;
        const possiblePositions = [
            [value[1] - 1, value[2]],
            [value[1] + 1, value[2]],
            [value[1], value[2] - 1],
            [value[1], value[2] + 1]
        ];
        const currentGridState = this.currentGridValue;
        if (currentGridState[value[1]][value[2]]) {
            currentGridState[value[1]][value[2]].isCurrentlyNeighbourToHoveredElement =
                !currentGridState[value[1]][value[2]].isCurrentlyNeighbourToHoveredElement;
        }
        for (const possiblePosition of possiblePositions) {
            if (currentGridState[possiblePosition[0]] && currentGridState[possiblePosition[0]][possiblePosition[1]]) {
                currentGridState[possiblePosition[0]][possiblePosition[1]].isCurrentlyNeighbourToHoveredElement =
                    !currentGridState[possiblePosition[0]][possiblePosition[1]].isCurrentlyNeighbourToHoveredElement;
            }
        }
    }
    findVerticallyAndHorizontallyAlignedBoxesToElementAndCount(value) {
        const possiblePositions = [
            [value[1] - 1, value[2]],
            [value[1] + 1, value[2]],
            [value[1], value[2] - 1],
            [value[1], value[2] + 1]
        ];
        const currentGridState = this.currentGridValue;
        const neighbours = [];
        let count = 0;
        for (const possiblePosition of possiblePositions) {
            if (currentGridState[possiblePosition[0]] && currentGridState[possiblePosition[0]][possiblePosition[1]]) {
                neighbours.push(currentGridState[possiblePosition[0]][possiblePosition[1]]);
                count += currentGridState[possiblePosition[0]][possiblePosition[1]].value;
            }
        }
        this.verticallyAndHorizontallyAlignedBoxesToElementCount = count;
        return { neighbours, count };
    }
    getVerticallyAndHorizontallyAlignedBoxesToElementCount() {
        return this.verticallyAndHorizontallyAlignedBoxesToElementCount;
    }
}
GridService.ɵfac = function GridService_Factory(t) { return new (t || GridService)(); };
GridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GridService, factory: GridService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map