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
 * Created by peijia on 11/1/2016.
 */
const core_1 = require("@angular/core");
let AppOrderTable = class AppOrderTable {
    constructor() {
        this.selectionChanged = new core_1.EventEmitter();
        this.multiSelectionChanged = new core_1.EventEmitter();
    }
    onSelectedItemsChanged(event) {
        let selectedIndex = event.target.selection.selected()[event.target.selection.selected().length - 1];
        let selectedOrders = [];
        for (let index in event.target.selection.selected()) {
            selectedOrders.push(this.orders[index]);
        }
        this.multiSelectionChanged.emit(selectedOrders);
        if (selectedIndex !== undefined) {
            this.selectionChanged.emit(this.orders[selectedIndex]);
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], AppOrderTable.prototype, "orders", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], AppOrderTable.prototype, "selectionChanged", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], AppOrderTable.prototype, "multiSelectionChanged", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], AppOrderTable.prototype, "mode", void 0);
AppOrderTable = __decorate([
    core_1.Component({
        selector: 'order-table',
        templateUrl: 'template/app.component.order.table.html'
    }), 
    __metadata('design:paramtypes', [])
], AppOrderTable);
exports.AppOrderTable = AppOrderTable;
//# sourceMappingURL=app.order.table.component.js.map