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
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const BlockUiService_1 = require("../service/BlockUiService");
let AppOrderPrintTab = class AppOrderPrintTab {
    constructor(dataCenterService, blockUiService, modalService) {
        this.dataCenterService = dataCenterService;
        this.blockUiService = blockUiService;
        this.modalService = modalService;
        this.selectionChanged = order => this.selectedOrder = order;
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
    getCancelOrders() {
        this.blockUiService.blockUI();
        this.dataCenterService.getCancelOrder().then(orders => {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }
    ngOnInit() {
        this.orders = [];
        this.selectedOrder = null;
    }
    getDismissReason(reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return "by pressing ESC";
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return `with:${reason}`;
        }
    }
    previewReport(content) {
        this.modalService.open(content).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dimissed ${this.getDismissReason(reason)}`;
        });
    }
    previewLable(content) {
        if (this.selectedOrder == null)
            return;
        this.isOrderPreview = false;
        this.previewReport(content);
    }
    previewOrder(content) {
        if (this.selectedOrder == null)
            return;
        this.isOrderPreview = true;
        this.previewReport(content);
    }
};
AppOrderPrintTab = __decorate([
    core_1.Component({
        selector: 'tab-order-print',
        templateUrl: 'template/app.order.print.tab.component.html',
        providers: [DataCenterService_1.DataCenterService, BlockUiService_1.BlockUiService]
    }), 
    __metadata('design:paramtypes', [DataCenterService_1.DataCenterService, BlockUiService_1.BlockUiService, ng_bootstrap_1.NgbModal])
], AppOrderPrintTab);
exports.AppOrderPrintTab = AppOrderPrintTab;
//# sourceMappingURL=app.order.print.tab.component.js.map