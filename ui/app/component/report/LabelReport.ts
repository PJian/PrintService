/**
 * Created by peijia on 11/3/2016.
 */
import {Component, Input} from "@angular/core";
import {Order} from "../../entity/Order";
import JsBarcode = require("jsbarcode/jsbarcode");
declare var pdfMake: any;
//declare let JsBarcode;
@Component({
    selector: "label-report",
    templateUrl: 'template/app.report.label.tmpl.html',
    styleUrls: ['template/css/print.label.css']

})
export class AppLabelReport {
    @Input()
    order: Order;
    totalPrice: Number;
    current_date: String;

    ngOnInit() {
        this.current_date = new Date().toDateString();
        if (this.order != null) {
            this.totalPrice = Number(this.order.freight) + Number(this.order.totalpreprice);

        }
    }

    ngAfterViewInit() {

        //显示条形码
        JsBarcode("#code128", this.order.ocode.toString(),
            {
                height: 40,
                displayValue: false
            }
        );
    }

    print(): void {
        window.print();
    }
}