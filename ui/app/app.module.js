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
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
const app_tab_component_1 = require("./component/app.tab.component");
const app_order_print_tab_component_1 = require("./component/app.order.print.tab.component");
const app_order_status_tab_component_1 = require("./component/app.order.status.tab.component");
const app_order_update_tab_component_1 = require("./component/app.order.update.tab.component");
const angular2_polymer_1 = require("@vaadin/angular2-polymer");
const app_order_table_component_1 = require("./component/app.order.table.component");
const http_1 = require("@angular/http");
const app_good_table_component_1 = require("./component/app.good.table.component");
const OrderReport_1 = require("./component/report/OrderReport");
const LabelReport_1 = require("./component/report/LabelReport");
const datatable_1 = require("primeng/components/datatable/datatable");
const app_good_edit_table_component_1 = require("./component/app.good.edit.table.component");
const fieldset_1 = require("primeng/components/fieldset/fieldset");
const blockui_1 = require("primeng/components/blockui/blockui");
const DataCenterService_1 = require("./service/DataCenterService");
const BlockUiService_1 = require("./service/BlockUiService");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            http_1.HttpModule,
            datatable_1.DataTableModule,
            fieldset_1.FieldsetModule,
            blockui_1.BlockUIModule
        ],
        declarations: [
            app_component_1.AppComponent,
            angular2_polymer_1.PolymerElement('vaadin-grid'),
            app_tab_component_1.AppTabComponent,
            app_order_print_tab_component_1.AppOrderPrintTab,
            app_order_status_tab_component_1.AppOrderStatusTab,
            app_order_update_tab_component_1.AppOrderUpdateTab,
            app_order_table_component_1.AppOrderTable,
            app_good_table_component_1.AppGoodTable,
            OrderReport_1.AppOrderReport,
            LabelReport_1.AppLabelReport,
            app_good_edit_table_component_1.AppGoodEditTable
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        providers: [
            DataCenterService_1.DataCenterService,
            BlockUiService_1.BlockUiService
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map