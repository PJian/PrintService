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
let AppOrderStatusTab = class AppOrderStatusTab {
    constructor(dataCenterService, blockUiService) {
        this.dataCenterService = dataCenterService;
        this.blockUiService = blockUiService;
        this.selectionChanged = order => this.selectedOrder = order;
        this.multiSelectionChanged = orders => this.selectedOrders = orders;
    }
    ngOnInit() {
        this.orders = [];
        this.selectedOrder = null;
    }
    getAMOrders() {
        this.blockUiService.blockUI();
        this.dataCenterService.getAMOrder().then(orders => {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }
    getPMOrders() {
        this.blockUiService.blockUI();
        this.dataCenterService.getPMOrder().then(orders => {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }
    getNSendTextMsgOrders() {
        this.blockUiService.blockUI();
        this.dataCenterService.getNSendTextMsgOrders().then(orders => {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }
    sendTextMsg() {
        if (this.selectedOrders === null || this.selectedOrders.length == 0)
            return;
        this.totalRecord = this.selectedOrders.length;
        this.blockUiService.blockUI();
        this.successRecord = 0;
        this.failedRecord = 0;
        for (let i = 0; i < this.totalRecord; i++) {
            this.dataCenterService.sendTextMsg(this.selectedOrder[i]).then(() => {
                this.successRecord++;
                if (this.successRecord + this.failedRecord >= this.totalRecord) {
                    this.blockUiService.unBlockUI();
                }
            }).catch(() => this.failedRecord++);
        }
    }
    updateOrderStatus2() {
        if (this.selectedOrders === null || this.selectedOrders.length == 0)
            return;
        this.totalRecord = this.selectedOrders.length;
        this.blockUiService.blockUI();
        this.successRecord = 0;
        this.failedRecord = 0;
        for (let i = 0; i < this.totalRecord; i++) {
            this.dataCenterService.updateStatus2(this.selectedOrder[i]).then(() => {
                this.successRecord++;
                if (this.successRecord + this.failedRecord >= this.totalRecord) {
                    this.blockUiService.unBlockUI();
                }
            }).catch(() => this.failedRecord++);
        }
        this.inProgress = false;
    }
};
AppOrderStatusTab = __decorate([
    core_1.Component({
        selector: 'tab-order-status',
        templateUrl: 'template/app.order.status.tab.tmpl.html',
        providers: [DataCenterService_1.DataCenterService]
    }), 
    __metadata('design:paramtypes', [DataCenterService_1.DataCenterService, BlockUiService_1.BlockUiService])
], AppOrderStatusTab);
exports.AppOrderStatusTab = AppOrderStatusTab;
//# sourceMappingURL=app.order.status.tab.component.js.map