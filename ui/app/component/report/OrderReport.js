"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by peijia on 11/3/2016.
 */
const core_1 = require("@angular/core");
const Order_1 = require("../../entity/Order");
let AppOrderReport = class AppOrderReport {
    print() {
        window.print();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Order_1.Order)
], AppOrderReport.prototype, "order", void 0);
AppOrderReport = __decorate([
    core_1.Component({
        selector: "order-report",
        templateUrl: "template/app.report.order.tmpl.html",
        styleUrls: ["template/css/print.order.css"]
    }), 
    __metadata('design:paramtypes', [])
], AppOrderReport);
exports.AppOrderReport = AppOrderReport;
//# sourceMappingURL=OrderReport.js.map