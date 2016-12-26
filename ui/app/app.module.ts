/**
 * Created by peijia on 11/1/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppTabComponent} from "./component/app.tab.component";
import {AppOrderPrintTab} from "./component/app.order.print.tab.component";
import {AppOrderStatusTab} from "./component/app.order.status.tab.component";
import {AppOrderUpdateTab} from "./component/app.order.update.tab.component";
import {PolymerElement} from "@vaadin/angular2-polymer";
import {AppOrderTable} from "./component/app.order.table.component";
import {HttpModule} from "@angular/http";
import {AppGoodTable} from "./component/app.good.table.component";
import {AppOrderReport} from "./component/report/OrderReport";
import {AppLabelReport} from "./component/report/LabelReport";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {AppGoodEditTable} from "./component/app.good.edit.table.component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {BlockUIModule} from "primeng/components/blockui/blockui";
import {DataCenterService} from "./service/DataCenterService";
import {BlockUiService} from "./service/BlockUiService";
@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        HttpModule,
        DataTableModule,
        FieldsetModule,
        BlockUIModule
    ],
    declarations: [
        AppComponent,
        PolymerElement('vaadin-grid'),
        AppTabComponent,
        AppOrderPrintTab,
        AppOrderStatusTab,
        AppOrderUpdateTab,
        AppOrderTable,
        AppGoodTable,
        AppOrderReport,
        AppLabelReport,
        AppGoodEditTable
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        DataCenterService,
        BlockUiService
    ]
})
export class AppModule {
}