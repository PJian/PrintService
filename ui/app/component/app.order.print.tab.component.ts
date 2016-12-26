/**
 * Created by peijia on 11/1/2016.
 */
import {Component, Input} from "@angular/core";
import {DataCenterService} from "../service/DataCenterService";
import {Order} from "../entity/Order";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {BlockUiService} from "../service/BlockUiService";
@Component({
    selector: 'tab-order-print',
    templateUrl: 'template/app.order.print.tab.component.html',
    providers: [DataCenterService, BlockUiService]
})
export class AppOrderPrintTab {
    orders: Order[];
    selectedOrder: Order;
    closeResult: String;
    isOrderPreview: boolean;

    constructor(private  dataCenterService: DataCenterService,
                private  blockUiService: BlockUiService,
                private  modalService: NgbModal) {
    }

    getAMOrders(): void {
        this.blockUiService.blockUI();
        this.dataCenterService.getAMOrder().then(orders => {
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

    getCancelOrders(): void {
        this.blockUiService.blockUI();
        this.dataCenterService.getCancelOrder().then(orders=> {
            this.orders = orders;
            this.blockUiService.unBlockUI();
        });
    }

    ngOnInit(): void {
        this.orders = [];
        this.selectedOrder = null;
    }

    selectionChanged = order => this.selectedOrder = order;

    getDismissReason(reason: any): String {
        if (reason === ModalDismissReasons.ESC) {
            return "by pressing ESC";
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        } else {
            return `with:${reason}`;
        }
    }

    previewReport(content): void {
        this.modalService.open(content).result.then(result=> {
            this.closeResult = `Closed with: ${result}`;
        }, reason=> {
            this.closeResult = `Dimissed ${this.getDismissReason(reason)}`;
        });
    }


    previewLable(content): void {
        if (this.selectedOrder == null) return;
        this.isOrderPreview = false;
        this.previewReport(content);
    }

    previewOrder(content): void {
        if (this.selectedOrder == null) return;
        this.isOrderPreview = true;
        this.previewReport(content);
    }

}