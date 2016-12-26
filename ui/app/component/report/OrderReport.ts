/**
 * Created by peijia on 11/3/2016.
 */
import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Order} from "../../entity/Order";
@Component({
    selector:"order-report",
    templateUrl:"template/app.report.order.tmpl.html",
    styleUrls:["template/css/print.order.css"]
})

export class AppOrderReport{
    @Input()
    order:Order;

    print(): void {
        window.print();
    }


}