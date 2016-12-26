/**
 * Created by peijia on 11/1/2016.
 */
import {Component} from "@angular/core";
import {Order} from "../entity/Order";
import {DataCenterService} from "../service/DataCenterService";
import {responseInterceptor} from "angular-in-memory-web-api";
import {BlockUiService} from "../service/BlockUiService";
@Component({
    selector: 'tab-order-status',
    templateUrl: 'template/app.order.status.tab.tmpl.html',
    providers: [DataCenterService]
})
export class AppOrderStatusTab {
    orders: Order[];
    selectedOrder: Order;
    selectedOrders: Order[];
    totalRecord: number;
    successRecord: number;
    failedRecord: number;
    inProgress: boolean;

    constructor(private dataCenterService: DataCenterService,
                private  blockUiService: BlockUiService) {
    }

    ngOnInit() {
        this.orders = [];
        this.selectedOrder = null;
    }

    getAMOrders(): void {
        this.blockUiService.blockUI();
        this.dataCenterService.getAMOrder().then(orders=> {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }

    getPMOrders(): void {
        this.blockUiService.blockUI();
        this.dataCenterService.getPMOrder().then(orders=> {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }

    getNSendTextMsgOrders(): void {
        this.blockUiService.blockUI();
        this.dataCenterService.getNSendTextMsgOrders().then(orders=> {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }

    sendTextMsg(): void {
        if (this.selectedOrders === null || this.selectedOrders.length == 0)return;
        this.totalRecord = this.selectedOrders.length;
        this.blockUiService.blockUI();
        this.successRecord = 0;
        this.failedRecord = 0;
        for (let i = 0; i < this.totalRecord; i++) {
            this.dataCenterService.sendTextMsg(this.selectedOrder[i]).then(()=> {
                this.successRecord++;
                if (this.successRecord + this.failedRecord >= this.totalRecord) {
                    this.blockUiService.unBlockUI();
                }
            }).catch(()=>this.failedRecord++);
        }
    }

    updateOrderStatus2(): void {
        if (this.selectedOrders === null || this.selectedOrders.length == 0)return;
        this.totalRecord = this.selectedOrders.length;
        this.blockUiService.blockUI();
        this.successRecord = 0;
        this.failedRecord = 0;
        for (let i = 0; i < this.totalRecord; i++) {
            this.dataCenterService.updateStatus2(this.selectedOrder[i]).then(()=> {
                this.successRecord++;
                if (this.successRecord + this.failedRecord >= this.totalRecord) {
                    this.blockUiService.unBlockUI();
                }
            }).catch(()=>this.failedRecord++);
        }
        this.inProgress = false;
    }

    selectionChanged = order => this.selectedOrder = order;

    multiSelectionChanged = orders=>this.selectedOrders = orders;


}