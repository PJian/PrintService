/**
 * Created by peijia on 11/1/2016.
 */
import {Component} from "@angular/core";
import {Order} from "../entity/Order";
import {DataCenterService} from "../service/DataCenterService";
import {BlockUiService} from "../service/BlockUiService";
@Component({
    selector: 'tab-order-update',
    templateUrl: 'template/app.order.update.tab.tmpl.html',
    providers: [DataCenterService]
})
export class AppOrderUpdateTab {
    orders: Order[];
    selectedOrder: Order;
    updateStatus: boolean;

    constructor(private dataCenterService: DataCenterService,
                private  blockUiService: BlockUiService) {
    }


    ngOnInit(): void {
        this.orders = [];
        this.selectedOrder = null;
    }

    getArrivedOrders(): void {
        this.blockUiService.blockUI();
        this.dataCenterService.getFinishedOrders().then(orders=> {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }

    update(): void {
        if (this.selectedOrder != null) {
            this.updateStatus = false;
            this.blockUiService.blockUI();
            this.dataCenterService.updateOrder(this.selectedOrder).then(result=>{
                this.updateStatus = true;
                this.blockUiService.unBlockUI();
            });
        }
    }
    selectionChanged = order => this.selectedOrder = order;
}