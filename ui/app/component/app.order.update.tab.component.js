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
const DataCenterService_1 = require("../service/DataCenterService");
const BlockUiService_1 = require("../service/BlockUiService");
let AppOrderUpdateTab = class AppOrderUpdateTab {
    constructor(dataCenterService, blockUiService) {
        this.dataCenterService = dataCenterService;
        this.blockUiService = blockUiService;
        this.selectionChanged = order => this.selectedOrder = order;
    }
    ngOnInit() {
        this.orders = [];
        this.selectedOrder = null;
    }
    getArrivedOrders() {
        this.blockUiService.blockUI();
        this.dataCenterService.getFinishedOrders().then(orders => {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }
    update() {
        if (this.selectedOrder != null) {
            this.updateStatus = false;
            this.blockUiService.blockUI();
            this.dataCenterService.updateOrder(this.selectedOrder).then(result => {
                this.updateStatus = true;
                this.blockUiService.unBlockUI();
            });
        }
    }
};
AppOrderUpdateTab = __decorate([
    core_1.Component({
        selector: 'tab-order-update',
        templateUrl: 'template/app.order.update.tab.tmpl.html',
        providers: [DataCenterService_1.DataCenterService]
    }), 
    __metadata('design:paramtypes', [DataCenterService_1.DataCenterService, BlockUiService_1.BlockUiService])
], AppOrderUpdateTab);
exports.AppOrderUpdateTab = AppOrderUpdateTab;
//# sourceMappingURL=app.order.update.tab.component.js.map