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
 * Created by peijia on 11/10/2016.
 */
const core_1 = require("@angular/core");
let AppGoodEditTable = class AppGoodEditTable {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], AppGoodEditTable.prototype, "goods", void 0);
AppGoodEditTable = __decorate([
    core_1.Component({
        selector: 'good-edit-table',
        templateUrl: 'template/app.good.edit.table.tmpl.html'
    }), 
    __metadata('design:paramtypes', [])
], AppGoodEditTable);
exports.AppGoodEditTable = AppGoodEditTable;
//# sourceMappingURL=app.good.edit.table.component.js.map