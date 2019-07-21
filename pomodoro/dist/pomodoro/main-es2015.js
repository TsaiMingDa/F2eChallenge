(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <app-panel></app-panel>\n  <app-side></app-side>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/panel/panel.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/panel/panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel_wrap\">\n  <!-- new mession -->\n  <div class=\"new_mission_mission\">\n    <input #inputBox type=\"text\" class=\"new_mission\" placeholder=\"ADD A NEW MISSION...\" (keyup.enter)=\"newMission($event)\">\n    <div class=\"new_mission_mission_icon\" (click)=\"newMission()\" >+</div>\n  </div>\n  <!-- the first thing to do today -->\n  <div class=\"center_info\">\n    <div class=\"doing_item\">\n      <label>\n        <div class=\"btn\">\n          <input type=\"radio\" id=\"doing_thing\" data-index=\"0\" (click)=\"spliceTodoList($event)\">\n          <div class=\"out\">\n            <div class=\"in\">✔</div>\n          </div>\n        </div>\n        <div class=\"info\">\n          <div class=\"text\" >{{_todoList[0]}}</div>\n          <div class=\"doing_icon\">***</div>\n        </div>\n      </label>\n    </div>\n    <!-- time -->\n    <div class=\"counting\">\n      <div class=\"min\">{{min}}</div>\n      <div class=\"colon\">:</div>\n      <div class=\"sec\">{{sec}}</div>\n    </div>\n  </div>\n\n  <!-- todolist -->\n  <div class=\"todo_list\" cdkDropList  (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"radio_wrap\" cdkDrag *ngFor=\"let todo of _todoList | slice:1:4; let i = index\">\n      <label>\n        <input type=\"radio\"  [attr.data-index]=\"i+1\" (click)=\"spliceTodoList($event)\">\n        <div class=\"out\">\n          <div class=\"in\">✔</div>\n        </div>\n        <div class=\"text\">{{todo}}</div>\n      </label>\n      <div class=\"start_out\" [attr.data-index]=\"i+1\" (click)=\"changeMission($event)\">\n        <div class=\"start_in\" ></div>\n      </div>\n    </div>\n    <div class=\"more\">MORE</div>\n  </div>\n</div>\n<!-- timer -->\n<app-timer></app-timer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side/side.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side/side.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icon_wrap\">\n  <i class=\"material-icons home\">home</i>\n  <i class=\"material-icons\">list</i>\n  <i class=\"material-icons\">insert_chart</i>\n  <i class=\"material-icons\">library_music</i>\n  <div class=\"text\">POMODORO</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/timer/timer.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/timer/timer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"wrap_content\">\n      <div class=\"place animation_wrap_hind\" *ngIf=\"animationClass\">\n        <div class=\"animation\" [class.runing] = \"start\" [class.animation_runing] = \"start\"></div>\n      </div>\n      <div class=\"out place\"></div>\n      <div class=\"in place\" [class.start_white] = \"start\"></div>\n      <div class=\"start_o place\" [class.start_pink] = \"start\" (click)=\"startTime()\"></div>\n      <div class=\"start_in place\" [class.pause_btn] = \"start\" (click)=\"startTime()\"></div>\n  </div>\n  <div class=\"stop\" [class.start_pink] = \"start\" (click)=\"stopTime()\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  display: flex;\n}\n@media screen and (max-width: 960px) {\n  .wrap {\n    height: 100vh;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEQVxcRGVza3RvcFxcY2hhbGxlbmdlXFxGMmVDaGFsbGVuZ2VcXHBvbW9kb3JvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxEQVxcRGVza3RvcFxcY2hhbGxlbmdlXFxGMmVDaGFsbGVuZ2VcXHBvbW9kb3JvL3NyY1xcYXNzZXRzXFxzaGFyZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQ0RGO0FDcUJFO0VGckJGO0lBR0ksYUFBQTtJQUNBLHNCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2Fzc2V0cy9zaGFyZS5zY3NzJztcclxuXHJcbi53cmFwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgQGluY2x1ZGUgcndkKCkge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLndyYXAge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSIsIiRiYWNrZ3JvdW5kX2NvbG9yOiAjRkZFREY3O1xyXG4kbWFpbl9jb2xvcjogI2ZmNDM4NDtcclxuJHNpZGVfY29sb3I6ICMwMDMxNjQ7XHJcbiRmb250OiAxMnB4IDE2cHggMjRweCAzMHB4IDQ2cHggNDhweCAxMDBweCAxNzZweDtcclxuQG1peGluIG91dCgkdyl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAkdztcclxuICBoZWlnaHQ6ICR3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRzaWRlX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5AbWl4aW4gaW4oJHcsICRmKSB7XHJcbiAgd2lkdGg6ICR3O1xyXG4gIGhlaWdodDogJHc7XHJcbiAgbGluZS1oZWlnaHQ6ICR3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHNpZGVfY29sb3I7XHJcbiAgZm9udC1zaXplOiBudGgoJGZvbnQsICRmKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbkBtaXhpbiByd2QoKXtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pomodoro';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["PanelComponent"],
            _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__["TimerComponent"],
            _side_side_component__WEBPACK_IMPORTED_MODULE_9__["SideComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/panel/panel.component.scss":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #FFEDF7;\n  display: block;\n  flex-grow: 4;\n  position: relative;\n}\n@media screen and (max-width: 960px) {\n  :host {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n  }\n}\n.panel_wrap {\n  display: flex;\n  height: 100vh;\n  background-color: #FFEDF7;\n  flex-direction: column;\n  justify-content: space-around;\n  position: relative;\n  left: 10%;\n  max-width: 450px;\n}\n@media screen and (max-width: 960px) {\n  .panel_wrap {\n    left: auto;\n    width: 100%;\n    max-width: 100%;\n    justify-content: start;\n    height: auto;\n    align-items: center;\n  }\n}\n.radio_group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n.new_mission_mission {\n  position: relative;\n  height: 56px;\n}\n@media screen and (max-width: 960px) {\n  .new_mission_mission {\n    width: 100%;\n  }\n}\n.new_mission {\n  position: absolute;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border: #fff;\n  padding-left: 10px;\n  font-size: 24px;\n}\n.new_mission::-webkit-input-placeholder {\n  color: #ff4384;\n  font-size: 16px;\n  padding-left: 10px;\n}\n.new_mission::-moz-placeholder {\n  color: #ff4384;\n  font-size: 16px;\n  padding-left: 10px;\n}\n.new_mission::-ms-input-placeholder {\n  color: #ff4384;\n  font-size: 16px;\n  padding-left: 10px;\n}\n.new_mission::placeholder {\n  color: #ff4384;\n  font-size: 16px;\n  padding-left: 10px;\n}\n.new_mission_mission_icon {\n  position: absolute;\n  text-align: center;\n  right: 0;\n  height: 100%;\n  width: 35px;\n  line-height: 56px;\n  color: #ff4384;\n  font-size: 24px;\n  cursor: pointer;\n}\n.center_info {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 960px) {\n  .center_info {\n    align-items: center;\n  }\n}\n.doing_item {\n  z-index: 999;\n}\n.doing_item label {\n  display: flex;\n}\n.doing_item .out {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  border: 1px solid #003164;\n  border-radius: 50%;\n}\n@media screen and (max-width: 960px) {\n  .doing_item .out {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    border: 1px solid #003164;\n    border-radius: 50%;\n  }\n}\n.doing_item .in {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #003164;\n  font-size: 48px;\n  opacity: 0;\n}\n.doing_item .info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 24px;\n  padding-left: 15px;\n  color: #003164;\n}\n.doing_item .text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 98%;\n}\n@media screen and (max-width: 960px) {\n  .doing_item {\n    order: 2;\n    margin-bottom: 15px;\n  }\n}\n#doing_thing {\n  position: absolute;\n  opacity: 0;\n}\n:checked + .out .in {\n  opacity: 1;\n}\n.counting {\n  display: flex;\n  color: #ff4384;\n  font-size: 176px;\n  font-weight: 900;\n}\n@media screen and (max-width: 960px) {\n  .counting {\n    order: 1;\n    font-size: 100px;\n    justify-content: center;\n    margin: 30px;\n  }\n}\n.todo_list {\n  z-index: 999;\n  width: 80%;\n}\n.radio_wrap {\n  position: relative;\n  font-size: 16px;\n  color: #003164;\n  border-bottom: 2px solid #cbc7d9;\n  padding-bottom: 9px;\n  margin-bottom: 15px;\n}\n.radio_wrap label {\n  display: flex;\n}\n.radio_wrap label input {\n  position: absolute;\n  opacity: 0;\n}\n.radio_wrap .out {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #003164;\n  border-radius: 50%;\n}\n.radio_wrap .in {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  color: #003164;\n  font-size: 16px;\n  opacity: 0;\n}\n.radio_wrap .text {\n  padding-left: 10px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n}\n.start_out {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding-left: 3px;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #003164;\n  cursor: pointer;\n}\n.start_in {\n  width: 0px;\n  height: 0px;\n  border-left: 10px solid #003164;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n.more {\n  font-size: 16px;\n  color: #ff4384;\n  font-weight: 600;\n  float: right;\n}\n@media screen and (max-width: 960px) {\n  .more {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvQzpcXFVzZXJzXFxEQVxcRGVza3RvcFxcY2hhbGxlbmdlXFxGMmVDaGFsbGVuZ2VcXHBvbW9kb3JvL3NyY1xcYXBwXFxwYW5lbFxccGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhbmVsL0M6XFxVc2Vyc1xcREFcXERlc2t0b3BcXGNoYWxsZW5nZVxcRjJlQ2hhbGxlbmdlXFxwb21vZG9yby9zcmNcXGFzc2V0c1xcc2hhcmUuc2NzcyIsInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkNGaUI7RURHakIsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRUFGO0FEa0JFO0VEdEJGO0lBTUksWUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFRUVGO0FBQ0Y7QUZFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EseUJDakJpQjtFRGtCakIsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FFQ0Y7QURBRTtFRFRGO0lBVUksVUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUVHRjtBQUNGO0FGREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FFSUY7QUZGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBRUtGO0FEckJFO0VEY0Y7SUFJSSxXQUFBO0VFT0Y7QUFDRjtBRkxBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUVRRjtBRlBFO0VBQ0UsY0NyRFM7RURzRFQsZUFBQTtFQUNBLGtCQUFBO0FFU0o7QUZaRTtFQUNFLGNDckRTO0VEc0RULGVBQUE7RUFDQSxrQkFBQTtBRVNKO0FGWkU7RUFDRSxjQ3JEUztFRHNEVCxlQUFBO0VBQ0Esa0JBQUE7QUVTSjtBRlpFO0VBQ0UsY0NyRFM7RURzRFQsZUFBQTtFQUNBLGtCQUFBO0FFU0o7QUZOQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNDakVXO0VEa0VYLGVBQUE7RUFDQSxlQUFBO0FFU0Y7QUZOQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRVNGO0FEM0RFO0VEZ0RGO0lBSUksbUJBQUE7RUVXRjtBQUNGO0FGVEE7RUFDRSxZQUFBO0FFWUY7QUZYRTtFQUNFLGFBQUE7QUVhSjtBRlhFO0VDOUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0Q0RWU7RUMzRWYsWUQyRWU7RUMxRWYseUJBQUE7RUFDQSxrQkFBQTtBQzRGRjtBRGhGRTtFRDREQTtJQzlFQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdEOEVpQjtJQzdFakIsWUQ2RWlCO0lDNUVqQix5QkFBQTtJQUNBLGtCQUFBO0VDc0dBO0FBQ0Y7QUZ6QkU7RUMzRUEsV0Q0RWM7RUMzRWQsWUQyRWM7RUMxRWQsaUJEMEVjO0VDekVkLGtCQUFBO0VBQ0EsY0FoQlc7RUFpQlgsZUFBQTtFQUNBLFVBQUE7QUN1R0Y7QUYvQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2pHUztBQ2tJYjtBRi9CRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUVpQ0o7QURuSEU7RUR1REY7SUE4QkksUUFBQTtJQUNBLG1CQUFBO0VFa0NGO0FBQ0Y7QUZoQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUVtQ0Y7QUZqQ0E7RUFDRSxVQUFBO0FFb0NGO0FGakNBO0VBQ0UsYUFBQTtFQUNBLGNDekhXO0VEMEhYLGdCQUFBO0VBQ0EsZ0JBQUE7QUVvQ0Y7QUR6SUU7RURpR0Y7SUFNSSxRQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7RUVzQ0Y7QUFDRjtBRm5DQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FFc0NGO0FGcENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0MxSVc7RUQySVgsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FFdUNGO0FGdENFO0VBQ0UsYUFBQTtBRXdDSjtBRnZDSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBRXlDTjtBRnRDRTtFQ2xKQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdEZ0plO0VDL0lmLFlEK0llO0VDOUlmLHlCQUFBO0VBQ0Esa0JBQUE7QUMyTEY7QUY1Q0U7RUM1SUEsV0Q2SWM7RUM1SWQsWUQ0SWM7RUMzSWQsaUJEMkljO0VDMUlkLGtCQUFBO0VBQ0EsY0FoQlc7RUFpQlgsZUFBQTtFQUNBLFVBQUE7QUMyTEY7QUZsREU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRW9ESjtBRmpEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBRW9ERjtBRmxEQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FFcURGO0FGbkRBO0VBQ0UsZUFBQTtFQUNBLGNDM0xXO0VENExYLGdCQUFBO0VBQ0EsWUFBQTtBRXNERjtBRDdORTtFRG1LRjtJQU1JLGFBQUE7RUV3REY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3NoYXJlLnNjc3MnO1xyXG46aG9zdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRfY29sb3I7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleC1ncm93OiA0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAvLyBtYXgtd2lkdGg6IDQ0NXB4O1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxufVxyXG4ucGFuZWxfd3JhcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRfY29sb3I7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4ucmFkaW9fZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG4ubmV3X21pc3Npb25fbWlzc2lvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5uZXdfbWlzc2lvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAjZmZmO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IG50aCgkZm9udCwzKTtcclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgICBmb250LXNpemU6IG50aCgkZm9udCwgMik7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7O1xyXG4gIH1cclxufVxyXG4ubmV3X21pc3Npb25fbWlzc2lvbl9pY29ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gIGNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICBmb250LXNpemU6IG50aCgkZm9udCwgMyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8vICB0aGUgZmlyc3QgdGhpbmcgdG8gZG8gdG9kYXlcclxuLmNlbnRlcl9pbmZve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi5kb2luZ19pdGVte1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5vdXR7XHJcbiAgICBAaW5jbHVkZSBvdXQoNDhweCk7XHJcbiAgICBAaW5jbHVkZSByd2QoKXtcclxuICAgICAgQGluY2x1ZGUgb3V0KDQwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW57XHJcbiAgICBAaW5jbHVkZSBpbig0MHB4LCA2KTtcclxuICB9XHJcbiAgLmluZm97XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogbnRoKCRmb250LCAzKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGNvbG9yOiAkc2lkZV9jb2xvcjtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBvdmVyZmxvdyA6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3cgOiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlIDogbm93cmFwO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICB9XHJcbiAgQGluY2x1ZGUgcndkKCl7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcbiNkb2luZ190aGluZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG46Y2hlY2tlZCArLm91dCAuaW57XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4vLyBjb3VudGluZ1xyXG4uY291bnRpbmd7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgZm9udC1zaXplOiBudGgoJGZvbnQgLCA4KTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgICBmb250LXNpemU6IG50aCgkZm9udCAsIDcpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG59XHJcbi8vIHRvZG9saXN0XHJcbi50b2RvX2xpc3R7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLnJhZGlvX3dyYXB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogbnRoKCRmb250LCAyKTtcclxuICBjb2xvcjogJHNpZGVfY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjYmM3ZDk7XHJcbiAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGxhYmVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGlucHV0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vdXR7XHJcbiAgICBAaW5jbHVkZSBvdXQoMjRweCk7XHJcbiAgfVxyXG4gIC5pbntcclxuICAgIEBpbmNsdWRlIGluKDIwcHgsIDIpO1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogbnRoKCRmb250LCAyKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuLnN0YXJ0X291dHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRzaWRlX2NvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3RhcnRfaW57XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkc2lkZV9jb2xvcjtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5tb3Jle1xyXG4gIGZvbnQtc2l6ZTogbnRoKCRmb250LCAyKTtcclxuICBjb2xvcjogJG1haW5fY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgQGluY2x1ZGUgcndkKCl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIkYmFja2dyb3VuZF9jb2xvcjogI0ZGRURGNztcclxuJG1haW5fY29sb3I6ICNmZjQzODQ7XHJcbiRzaWRlX2NvbG9yOiAjMDAzMTY0O1xyXG4kZm9udDogMTJweCAxNnB4IDI0cHggMzBweCA0NnB4IDQ4cHggMTAwcHggMTc2cHg7XHJcbkBtaXhpbiBvdXQoJHcpe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogJHc7XHJcbiAgaGVpZ2h0OiAkdztcclxuICBib3JkZXI6IDFweCBzb2xpZCAkc2lkZV9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuQG1peGluIGluKCR3LCAkZikge1xyXG4gIHdpZHRoOiAkdztcclxuICBoZWlnaHQ6ICR3O1xyXG4gIGxpbmUtaGVpZ2h0OiAkdztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRzaWRlX2NvbG9yO1xyXG4gIGZvbnQtc2l6ZTogbnRoKCRmb250LCAkZik7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5AbWl4aW4gcndkKCl7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCl7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFREY3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1ncm93OiA0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICA6aG9zdCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4ucGFuZWxfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkVERjc7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5wYW5lbF93cmFwIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5yYWRpb19ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4ubmV3X21pc3Npb25fbWlzc2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm5ld19taXNzaW9uX21pc3Npb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5uZXdfbWlzc2lvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubmV3X21pc3Npb246OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZjQzODQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubmV3X21pc3Npb25fbWlzc2lvbl9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgY29sb3I6ICNmZjQzODQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyX2luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNlbnRlcl9pbmZvIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5kb2luZ19pdGVtIHtcbiAgei1pbmRleDogOTk5O1xufVxuLmRvaW5nX2l0ZW0gbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRvaW5nX2l0ZW0gLm91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzMTY0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZG9pbmdfaXRlbSAub3V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDMxNjQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59XG4uZG9pbmdfaXRlbSAuaW4ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMzE2NDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBvcGFjaXR5OiAwO1xufVxuLmRvaW5nX2l0ZW0gLmluZm8ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiAjMDAzMTY0O1xufVxuLmRvaW5nX2l0ZW0gLnRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDk4JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5kb2luZ19pdGVtIHtcbiAgICBvcmRlcjogMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbiNkb2luZ190aGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuOmNoZWNrZWQgKyAub3V0IC5pbiB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb3VudGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjZmY0Mzg0O1xuICBmb250LXNpemU6IDE3NnB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNvdW50aW5nIHtcbiAgICBvcmRlcjogMTtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMzBweDtcbiAgfVxufVxuXG4udG9kb19saXN0IHtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogODAlO1xufVxuXG4ucmFkaW9fd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMzE2NDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjYmM3ZDk7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ucmFkaW9fd3JhcCBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmFkaW9fd3JhcCBsYWJlbCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cbi5yYWRpb193cmFwIC5vdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMzE2NDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJhZGlvX3dyYXAgLmluIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDMxNjQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogMDtcbn1cbi5yYWRpb193cmFwIC50ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdGFydF9vdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzMTY0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGFydF9pbiB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjMDAzMTY0O1xuICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm1vcmUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmY0Mzg0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAubW9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer.service */ "./src/app/timer.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");




let PanelComponent = class PanelComponent {
    constructor(timeService) {
        this.timeService = timeService;
        this.todoList = ['1', '2', '3', '4'];
    }
    ngOnInit() {
    }
    get sec() {
        return this.timeService.secTxt;
    }
    get min() {
        return this.timeService.minTxt;
    }
    get _todoList() {
        return this.todoList.length > 0 ? this.todoList : ['The first thing to do today'];
    }
    newMission(e) {
        const inputValue = this.input.nativeElement.value;
        this.todoList.push(inputValue);
    }
    spliceTodoList(e) {
        e.stopPropagation();
        const index = e.srcElement.dataset.index;
        this.todoList.splice(index, 1);
        console.log(this.todoList);
    }
    changeMission(e) {
        const index = e.currentTarget.getAttribute('data-index');
        const item = this.todoList[index];
        console.log(item);
        this.todoList.splice(index, 1);
        this.todoList.splice(0, 0, item);
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.todoList, event.previousIndex, event.currentIndex);
    }
};
PanelComponent.ctorParameters = () => [
    { type: _timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputBox', { static: false })
], PanelComponent.prototype, "input", void 0);
PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel',
        template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/panel/panel.component.html"),
        styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/panel/panel.component.scss")]
    })
], PanelComponent);



/***/ }),

/***/ "./src/app/side/side.component.scss":
/*!******************************************!*\
  !*** ./src/app/side/side.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #003164;\n  flex-grow: 4;\n}\n@media screen and (max-width: 960px) {\n  :host {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n  }\n}\ni {\n  color: #fff;\n  width: 36px;\n  height: 36px;\n  font-size: 36px;\n  margin-top: 50px;\n}\n@media screen and (max-width: 960px) {\n  i {\n    margin: auto;\n  }\n}\n.icon_wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-right: 70px;\n  height: 100%;\n}\n@media screen and (max-width: 960px) {\n  .icon_wrap {\n    flex-direction: row;\n    margin-right: auto;\n    height: 55px;\n  }\n}\n.home {\n  display: none;\n}\n@media screen and (max-width: 960px) {\n  .home {\n    display: block;\n  }\n}\n.text {\n  color: #fff;\n  font-size: 24px;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  margin-top: auto;\n  padding-bottom: 33px;\n}\n@media screen and (max-width: 960px) {\n  .text {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS9DOlxcVXNlcnNcXERBXFxEZXNrdG9wXFxjaGFsbGVuZ2VcXEYyZUNoYWxsZW5nZVxccG9tb2Rvcm8vc3JjXFxhcHBcXHNpZGVcXHNpZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGUvc2lkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZS9DOlxcVXNlcnNcXERBXFxEZXNrdG9wXFxjaGFsbGVuZ2VcXEYyZUNoYWxsZW5nZVxccG9tb2Rvcm8vc3JjXFxhc3NldHNcXHNoYXJlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNBRjtBQ29CRTtFRnRCRjtJQUtJLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQ0NGO0FBQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGO0FDS0U7RUZaRjtJQU9JLFlBQUE7RUNJRjtBQUNGO0FERkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0tGO0FDUkU7RUZGRjtJQU9JLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDT0Y7QUFDRjtBRExBO0VBQ0UsYUFBQTtBQ1FGO0FDbkJFO0VGVUY7SUFHSSxjQUFBO0VDVUY7QUFDRjtBRFJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDV0Y7QUNoQ0U7RUZnQkY7SUFPSSxhQUFBO0VDYUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGUvc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zaGFyZS5zY3NzJztcclxuOmhvc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGVfY29sb3I7XHJcbiAgZmxleC1ncm93OiA0O1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgLy8gZmxleC1ncm93OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbml7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG4uaWNvbl93cmFwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgfVxyXG59XHJcbi5ob21le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgQGluY2x1ZGUgcndkKCl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLnRleHR7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiBudGgoJGZvbnQsIDMpO1xyXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMzNweDtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzE2NDtcbiAgZmxleC1ncm93OiA0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuaSB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICBpIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLmljb25fd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuaWNvbl93cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbn1cblxuLmhvbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmhvbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDMzcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAudGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIiRiYWNrZ3JvdW5kX2NvbG9yOiAjRkZFREY3O1xyXG4kbWFpbl9jb2xvcjogI2ZmNDM4NDtcclxuJHNpZGVfY29sb3I6ICMwMDMxNjQ7XHJcbiRmb250OiAxMnB4IDE2cHggMjRweCAzMHB4IDQ2cHggNDhweCAxMDBweCAxNzZweDtcclxuQG1peGluIG91dCgkdyl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAkdztcclxuICBoZWlnaHQ6ICR3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRzaWRlX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5AbWl4aW4gaW4oJHcsICRmKSB7XHJcbiAgd2lkdGg6ICR3O1xyXG4gIGhlaWdodDogJHc7XHJcbiAgbGluZS1oZWlnaHQ6ICR3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHNpZGVfY29sb3I7XHJcbiAgZm9udC1zaXplOiBudGgoJGZvbnQsICRmKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbkBtaXhpbiByd2QoKXtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk2MHB4KXtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideComponent = class SideComponent {
    constructor() { }
    ngOnInit() {
    }
};
SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side',
        template: __webpack_require__(/*! raw-loader!./side.component.html */ "./node_modules/raw-loader/index.js!./src/app/side/side.component.html"),
        styles: [__webpack_require__(/*! ./side.component.scss */ "./src/app/side/side.component.scss")]
    })
], SideComponent);



/***/ }),

/***/ "./src/app/timer.service.ts":
/*!**********************************!*\
  !*** ./src/app/timer.service.ts ***!
  \**********************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimerService = class TimerService {
    constructor() {
        this.min = 25;
        this.minTxt = '25';
        this.sec = 0;
        this.secTxt = '00';
    }
    timeStart() {
        if (!this.timer) {
            this.timer = setInterval(() => {
                this.timeSet();
            }, 1000);
        }
        else {
            this.cancelTimer();
        }
    }
    cancelTimer() {
        clearInterval(this.timer);
        this.timer = false;
    }
    timeSet() {
        if (this.sec === 0 && this.min > 0) {
            this.min = this.min - 1;
        }
        this.minTxt = this.min < 10 ? `0${this.min}` : this.min.toString();
        this.sec = this.sec === 0 ? this.sec = 59 : this.sec - 1;
        this.secTxt = this.sec === 0 ? '00' : this.sec < 0 ? '59' : this.sec < 10 ? `0${this.sec}` : this.sec.toString();
    }
    timeReset(type) {
        if (type === 'rest') {
            this.sec = 0;
            this.secTxt = '00';
            this.min = 5;
            this.minTxt = '05';
            return;
        }
        if (type === 'doing') {
            this.sec = 0;
            this.secTxt = '00';
            this.min = 25;
            this.minTxt = '25';
        }
    }
    timerStop(type) {
        this.cancelTimer();
        this.timeReset(type);
    }
};
TimerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TimerService);



/***/ }),

/***/ "./src/app/timer/timer.component.scss":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 960px) {\n  :host {\n    margin-top: auto;\n    padding: 10px;\n    margin-bottom: 70px;\n  }\n}\n\n.wrap {\n  height: 540px;\n  width: 540px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n\n@media screen and (max-width: 1100px) {\n  .wrap {\n    height: 340px;\n    width: 340px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .wrap {\n    position: static;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    width: 100%;\n    height: auto;\n  }\n}\n\n.wrap_content {\n  position: relative;\n  width: 540px;\n  height: 540px;\n  left: 50%;\n}\n\n@media screen and (max-width: 1100px) {\n  .wrap_content {\n    height: 340px;\n    width: 340px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .wrap_content {\n    left: auto;\n    width: auto;\n    height: auto;\n  }\n}\n\n.out {\n  width: 540px;\n  height: 540px;\n  border: 4px solid #ff4384;\n  border-radius: 50%;\n}\n\n@media screen and (max-width: 1100px) {\n  .out {\n    height: 340px;\n    width: 340px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .out {\n    display: none;\n  }\n}\n\n.place {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n\n.in {\n  width: 500px;\n  height: 500px;\n  background-color: #ff4384;\n  border-radius: 50%;\n}\n\n@media screen and (max-width: 1100px) {\n  .in {\n    height: 310px;\n    width: 310px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .in {\n    display: none;\n  }\n}\n\n.start_o {\n  width: 96px;\n  height: 96px;\n  background-color: #fff;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 960px) {\n  .start_o {\n    display: none;\n  }\n}\n\n.start_in {\n  width: 0px;\n  height: 0px;\n  border-top: 25px solid transparent;\n  border-left: 30px solid #ff4384;\n  border-bottom: 25px solid transparent;\n  left: 10px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 960px) {\n  .start_in {\n    position: static;\n  }\n}\n\n.stop {\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  position: absolute;\n  bottom: 204px;\n  right: -85px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 1100px) {\n  .stop {\n    bottom: 115px;\n    right: -80px;\n    width: 20px;\n    height: 20px;\n  }\n}\n\n@media screen and (max-width: 960px) {\n  .stop {\n    position: static;\n    height: 40px;\n    width: 40px;\n    background-color: #9e9999;\n  }\n}\n\n.animation {\n  z-index: 0;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  border-radius: 0 50% 50% 0;\n  margin-left: 50%;\n  overflow: hidden;\n  -webkit-animation: animationW 1500s 1 linear;\n          animation: animationW 1500s 1 linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n@media screen and (max-width: 960px) {\n  .animation {\n    display: none;\n  }\n}\n\n.animation:before, .animation:after {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 540px;\n  height: 270px;\n  background-color: #ff4384;\n  border-radius: 270px 270px 0 0;\n  -webkit-transform-origin: 270px 270px;\n          transform-origin: 270px 270px;\n}\n\n@media screen and (max-width: 1100px) {\n  .animation:before, .animation:after {\n    height: 170px;\n    width: 340px;\n    border-radius: 170px 170px 0 0;\n    -webkit-transform-origin: 170px 170px;\n            transform-origin: 170px 170px;\n  }\n}\n\n.animation:before {\n  z-index: 1;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-animation: roll 1500s 1 linear;\n          animation: roll 1500s 1 linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n.animation:after {\n  z-index: 2;\n  opacity: 0;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-animation: op 1500s 1 linear;\n          animation: op 1500s 1 linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n@-webkit-keyframes roll {\n  0% {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  100% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n}\n\n@keyframes roll {\n  0% {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n  }\n  100% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n}\n\n@-webkit-keyframes op {\n  0% {\n    opacity: 0;\n  }\n  49.99% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes op {\n  0% {\n    opacity: 0;\n  }\n  49.99% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes animationW {\n  0% {\n    width: 50%;\n    margin-left: 50%;\n    border-radius: 0 50% 50% 0;\n  }\n  49.99% {\n    width: 50%;\n    margin-left: 50%;\n    border-radius: 0 50% 50% 0;\n  }\n  50% {\n    width: 100%;\n    margin-left: 0;\n    border-radius: 0;\n  }\n  100% {\n    width: 100%;\n    margin-left: 0;\n    border-radius: 0;\n  }\n}\n\n@keyframes animationW {\n  0% {\n    width: 50%;\n    margin-left: 50%;\n    border-radius: 0 50% 50% 0;\n  }\n  49.99% {\n    width: 50%;\n    margin-left: 50%;\n    border-radius: 0 50% 50% 0;\n  }\n  50% {\n    width: 100%;\n    margin-left: 0;\n    border-radius: 0;\n  }\n  100% {\n    width: 100%;\n    margin-left: 0;\n    border-radius: 0;\n  }\n}\n\n.start_white {\n  border: 4px solid #ff4384;\n  background-color: #fff;\n}\n\n.start_pink {\n  background-color: #ff4384;\n}\n\n.pause_btn {\n  width: 30px;\n  height: 35px;\n  background-color: transparent;\n  left: 0;\n  border-top: 0px solid transparent;\n  border-left: 10px solid #fff;\n  border-right: 10px solid #fff;\n  border-bottom: 0px solid transparent;\n}\n\n@media screen and (max-width: 960px) {\n  .pause_btn {\n    border-left: 10px solid #003164;\n    border-right: 10px solid #003164;\n  }\n}\n\n.animation.runing:after, .animation.runing:before {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n.animation_runing {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n@media screen and (max-width: 960px) {\n  .animation_wrap_hind {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXIvQzpcXFVzZXJzXFxEQVxcRGVza3RvcFxcY2hhbGxlbmdlXFxGMmVDaGFsbGVuZ2VcXHBvbW9kb3JvL3NyY1xcYXBwXFx0aW1lclxcdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVyL0M6XFxVc2Vyc1xcREFcXERlc2t0b3BcXGNoYWxsZW5nZVxcRjJlQ2hhbGxlbmdlXFxwb21vZG9yby9zdGRpbiIsInNyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJFO0VDZkY7SUFFSSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQ1BGO0FBQ0Y7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRGRFO0VBYUY7SUFaSSxhQWVtQjtJQWRuQixZQWN5QjtFQ0czQjtBQUNGOztBRkNFO0VDUkY7SUFVSSxnQkFBQTtJQUNBLGFBQUE7SUFDQSw2QkFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNDRjtBQUNGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFNBQUE7QUNERjs7QURyQ0U7RUFpQ0Y7SUFoQ0ksYUFvQ21CO0lBbkNuQixZQW1DeUI7RUNLM0I7QUFDRjs7QUZ0QkU7RUNZRjtJQU9JLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ09GO0FBQ0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QUR6REU7RUE2Q0Y7SUE1Q0ksYUErQ21CO0lBOUNuQixZQThDeUI7RUNjM0I7QUFDRjs7QUYxQ0U7RUN3QkY7SUFXSSxhQUFBO0VDV0Y7QUFDRjs7QURUQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNZRjs7QURWQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEseUJEeEVXO0VDeUVYLGtCQUFBO0FDWUY7O0FEcEZFO0VBbUVGO0lBbEVJLGFBcUVtQjtJQXBFbkIsWUFvRXlCO0VDbUIzQjtBQUNGOztBRnJFRTtFQzhDRjtJQU9JLGFBQUE7RUNvQkY7QUFDRjs7QURsQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDcUJGOztBRmxGRTtFQ3dERjtJQU9JLGFBQUE7RUN1QkY7QUFDRjs7QURyQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDd0JGOztBRmpHRTtFQ2tFRjtJQVNJLGdCQUFBO0VDMEJGO0FBQ0Y7O0FEeEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDMkJGOztBRDFCRTtFQVJGO0lBU0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQzZCRjtBQUNGOztBRnhIRTtFQzhFRjtJQWVJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtFQytCRjtBQUNGOztBRDdCQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNnQ0Y7O0FGNUlFO0VDbUdGO0lBWUksYUFBQTtFQ2lDRjtBQUNGOztBRC9CQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRGhKVztFQ2lKWCw4QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNrQ0Y7O0FEbkxFO0VBdUlGO0lBdElJLGFBaUptQjtJQWhKbkIsWUFnSjBCO0lBQzFCLDhCQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ3NDRjtBQUNGOztBRG5DQTtFQUNFLFVBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNzQ0Y7O0FEcENBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUN1Q0Y7O0FEckNBO0VBQ0U7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDd0NGO0VEdENBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ3dDRjtBQUNGOztBRDlDQTtFQUNFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ3dDRjtFRHRDQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUN3Q0Y7QUFDRjs7QUR0Q0E7RUFDRTtJQUNFLFVBQUE7RUN3Q0Y7RUR0Q0E7SUFDRSxVQUFBO0VDd0NGO0VEdENBO0lBQ0UsVUFBQTtFQ3dDRjtFRHRDQTtJQUNFLFVBQUE7RUN3Q0Y7QUFDRjs7QURwREE7RUFDRTtJQUNFLFVBQUE7RUN3Q0Y7RUR0Q0E7SUFDRSxVQUFBO0VDd0NGO0VEdENBO0lBQ0UsVUFBQTtFQ3dDRjtFRHRDQTtJQUNFLFVBQUE7RUN3Q0Y7QUFDRjs7QUR0Q0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtJQUNBLDBCQUFBO0VDd0NGO0VEdENBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUN3Q0Y7RUR0Q0E7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDd0NGO0VEdENBO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ3dDRjtBQUNGOztBRDVEQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUN3Q0Y7RUR0Q0E7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSwwQkFBQTtFQ3dDRjtFRHRDQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUN3Q0Y7RUR0Q0E7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDd0NGO0FBQ0Y7O0FEckNBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQ3VDRjs7QURyQ0E7RUFDRSx5QkR4Tlc7QUVnUWI7O0FEdENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLE9BQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ3lDRjs7QUZyUEU7RUNvTUY7SUFVSSwrQkFBQTtJQUNBLGdDQUFBO0VDMkNGO0FBQ0Y7O0FEekNBO0VBQ0UscUNBQUE7VUFBQSw2QkFBQTtBQzRDRjs7QUQxQ0E7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0FDNkNGOztBRm5RRTtFQ3dORjtJQUVJLGFBQUE7RUM4Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhY2tncm91bmRfY29sb3I6ICNGRkVERjc7XHJcbiRtYWluX2NvbG9yOiAjZmY0Mzg0O1xyXG4kc2lkZV9jb2xvcjogIzAwMzE2NDtcclxuJGZvbnQ6IDEycHggMTZweCAyNHB4IDMwcHggNDZweCA0OHB4IDEwMHB4IDE3NnB4O1xyXG5AbWl4aW4gb3V0KCR3KXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6ICR3O1xyXG4gIGhlaWdodDogJHc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHNpZGVfY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbkBtaXhpbiBpbigkdywgJGYpIHtcclxuICB3aWR0aDogJHc7XHJcbiAgaGVpZ2h0OiAkdztcclxuICBsaW5lLWhlaWdodDogJHc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkc2lkZV9jb2xvcjtcclxuICBmb250LXNpemU6IG50aCgkZm9udCwgJGYpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuQG1peGluIHJ3ZCgpe1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTYwcHgpe1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zaGFyZS5zY3NzJztcclxuQG1peGluIHNtYWxsQ2lyY2xlKCRoLCR3KSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBoZWlnaHQ6ICRoO1xyXG4gICAgd2lkdGg6ICR3O1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59O1xyXG46aG9zdHtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICB9XHJcbn1cclxuLndyYXB7XHJcbiAgaGVpZ2h0OiA1NDBweDtcclxuICB3aWR0aDogNTQwcHg7XHJcbiAgQGluY2x1ZGUgc21hbGxDaXJjbGUoMzQwcHgsMzQwcHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcblxyXG4gIH1cclxufVxyXG4ud3JhcF9jb250ZW50e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTQwcHg7XHJcbiAgaGVpZ2h0OiA1NDBweDtcclxuICBAaW5jbHVkZSBzbWFsbENpcmNsZSgzNDBweCwzNDBweCk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG4ub3V0e1xyXG4gIHdpZHRoOiA1NDBweDtcclxuICBoZWlnaHQ6IDU0MHB4O1xyXG4gIEBpbmNsdWRlIHNtYWxsQ2lyY2xlKDM0MHB4LDM0MHB4KTtcclxuICBib3JkZXI6IDRweCBzb2xpZCAkbWFpbl9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGxlZnQ6IDUwJTtcclxuICBAaW5jbHVkZSByd2QoKXtcclxuICAgIC8vIHdpZHRoOiAxMjBweDtcclxuICAgIC8vIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4ucGxhY2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmlue1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIEBpbmNsdWRlIHNtYWxsQ2lyY2xlKDMxMHB4LDMxMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbl9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgQGluY2x1ZGUgcndkKCl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uc3RhcnRfb3tcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuLnN0YXJ0X2lue1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAkbWFpbl9jb2xvcjtcclxuICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIEBpbmNsdWRlIHJ3ZCgpe1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcbn1cclxuLnN0b3B7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjA0cHg7XHJcbiAgcmlnaHQ6IC04NXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIGJvdHRvbTogMTE1cHg7XHJcbiAgICByaWdodDogLTgwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgcndkKCl7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5OTk5O1xyXG4gIH1cclxufVxyXG4uYW5pbWF0aW9ue1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNTAlIDUwJSAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IGFuaW1hdGlvblcgMTUwMHMgMSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuXHJcbiAgQGluY2x1ZGUgcndkKCl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uYW5pbWF0aW9uOmJlZm9yZSwuYW5pbWF0aW9uOmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiA1NDBweDtcclxuICBoZWlnaHQ6IDI3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI3MHB4IDI3MHB4IDAgMDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAyNzBweCAyNzBweDtcclxuICBAaW5jbHVkZSBzbWFsbENpcmNsZSgxNzBweCwgMzQwcHgpe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTcwcHggMTcwcHggMCAwO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTcwcHggMTcwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4uYW5pbWF0aW9uOmJlZm9yZXtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgYW5pbWF0aW9uOiByb2xsIDE1MDBzIDEgbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuLmFuaW1hdGlvbjphZnRlcntcclxuICB6LWluZGV4OiAyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIGFuaW1hdGlvbjogb3AgMTUwMHMgMSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvbGx7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgb3B7XHJcbiAgMCV7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0OS45OSV7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRpb25Xe1xyXG4gIDAle1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjAgNTAlIDUwJSAwO1xyXG4gIH1cclxuICA0OS45OSV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MCA1MCUgNTAlIDA7XHJcbiAgfVxyXG4gIDUwJXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOjAgO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6MDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGFydF93aGl0ZXtcclxuICBib3JkZXI6IDRweCBzb2xpZCAkbWFpbl9jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5zdGFydF9waW5re1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xyXG59XHJcbi5wYXVzZV9idG57XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIEBpbmNsdWRlIHJ3ZCAoKXtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRzaWRlX2NvbG9yO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICRzaWRlX2NvbG9yO1xyXG4gIH1cclxufVxyXG4uYW5pbWF0aW9uLnJ1bmluZzphZnRlciwuYW5pbWF0aW9uLnJ1bmluZzpiZWZvcmV7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbn1cclxuLmFuaW1hdGlvbl9ydW5pbmd7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbn1cclxuLmFuaW1hdGlvbl93cmFwX2hpbmR7XHJcbiAgQGluY2x1ZGUgcndkICgpe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICB9XG59XG5cbi53cmFwIHtcbiAgaGVpZ2h0OiA1NDBweDtcbiAgd2lkdGg6IDU0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC53cmFwIHtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIHdpZHRoOiAzNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLndyYXAge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi53cmFwX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1NDBweDtcbiAgaGVpZ2h0OiA1NDBweDtcbiAgbGVmdDogNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC53cmFwX2NvbnRlbnQge1xuICAgIGhlaWdodDogMzQwcHg7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAud3JhcF9jb250ZW50IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4ub3V0IHtcbiAgd2lkdGg6IDU0MHB4O1xuICBoZWlnaHQ6IDU0MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmY0Mzg0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLm91dCB7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICB3aWR0aDogMzQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5vdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnBsYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmluIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0Mzg0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmluIHtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICAgIHdpZHRoOiAzMTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmluIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zdGFydF9vIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuc3RhcnRfbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc3RhcnRfaW4ge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgI2ZmNDM4NDtcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLnN0YXJ0X2luIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbi5zdG9wIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwNHB4O1xuICByaWdodDogLTg1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuc3RvcCB7XG4gICAgYm90dG9tOiAxMTVweDtcbiAgICByaWdodDogLTgwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuc3RvcCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllOTk5OTtcbiAgfVxufVxuXG4uYW5pbWF0aW9uIHtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgNTAlIDUwJSAwO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IGFuaW1hdGlvblcgMTUwMHMgMSBsaW5lYXI7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuYW5pbWF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5hbmltYXRpb246YmVmb3JlLCAuYW5pbWF0aW9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTQwcHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQzODQ7XG4gIGJvcmRlci1yYWRpdXM6IDI3MHB4IDI3MHB4IDAgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjcwcHggMjcwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmFuaW1hdGlvbjpiZWZvcmUsIC5hbmltYXRpb246YWZ0ZXIge1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE3MHB4IDE3MHB4IDAgMDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxNzBweCAxNzBweDtcbiAgfVxufVxuXG4uYW5pbWF0aW9uOmJlZm9yZSB7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIGFuaW1hdGlvbjogcm9sbCAxNTAwcyAxIGxpbmVhcjtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuLmFuaW1hdGlvbjphZnRlciB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgYW5pbWF0aW9uOiBvcCAxNTAwcyAxIGxpbmVhcjtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuQGtleWZyYW1lcyByb2xsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBvcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ5Ljk5JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltYXRpb25XIHtcbiAgMCUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwJSA1MCUgMDtcbiAgfVxuICA0OS45OSUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwJSA1MCUgMDtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLnN0YXJ0X3doaXRlIHtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmNDM4NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnN0YXJ0X3Bpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0Mzg0O1xufVxuXG4ucGF1c2VfYnRuIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5wYXVzZV9idG4ge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMwMDMxNjQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMwMDMxNjQ7XG4gIH1cbn1cblxuLmFuaW1hdGlvbi5ydW5pbmc6YWZ0ZXIsIC5hbmltYXRpb24ucnVuaW5nOmJlZm9yZSB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuXG4uYW5pbWF0aW9uX3J1bmluZyB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuYW5pbWF0aW9uX3dyYXBfaGluZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer.service */ "./src/app/timer.service.ts");



let TimerComponent = class TimerComponent {
    constructor(timeService) {
        this.timeService = timeService;
        this.start = false;
        this.animationClass = true;
        this.status = 'doing';
        this.rest = false;
    }
    ngOnInit() {
    }
    startTime() {
        this.start = !this.start;
        this.timeService.timeStart();
    }
    stopTime() {
        if (!this.start) {
            return;
        }
        if (this.status === 'doing') {
            this.status = 'rest';
            this.timeService.timerStop('rest');
        }
        else if (this.status === 'rest') {
            this.status = 'doing';
            this.timeService.timerStop('doing');
        }
        this.start = !this.start;
        this.animationClass = false;
        setTimeout(() => {
            this.animationClass = true;
        });
    }
};
TimerComponent.ctorParameters = () => [
    { type: _timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"] }
];
TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer',
        template: __webpack_require__(/*! raw-loader!./timer.component.html */ "./node_modules/raw-loader/index.js!./src/app/timer/timer.component.html"),
        styles: [__webpack_require__(/*! ./timer.component.scss */ "./src/app/timer/timer.component.scss")]
    })
], TimerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DA\Desktop\challenge\F2eChallenge\pomodoro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map