/**
 * Created by peijia on 11/2/2016.
 */
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
let DataCenterService_1;
let DataCenterService = DataCenterService_1 = class DataCenterService {
    //private static BASE_ADDRESS_1:string = "http://www.ejiashenghuo.com/";
    constructor(http) {
        this.http = http;
    }
    changeOrderState(order, api) {
        if (order == null)
            return Promise.resolve();
        let param = "&ocode=" + order.ocode;
        return this.http.get(api + "" + param).toPromise().then(response => response.json().ok()).catch(this.handleError);
    }
    updateOrder(order) {
        if (order == null || order.goods === null || order.goods.length === 0)
            return Promise.resolve();
        let param = `&ocode=${order.ocode}`;
        let goods = order.goods;
        for (let i = 0; i < goods.length; i++) {
            param += `&gweight${i}=${goods[i].gpreweight}`;
        }
        return this.http.get(DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_3).toPromise().then(response => response.ok).catch(this.handleError);
    }
    getFinishedOrders() {
        return this.http.get(DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_2).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    getNSendTextMsgOrders() {
        return this.http.get(DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_6).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    sendTextMsg(order) {
        return this.changeOrderState(order, DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_5);
    }
    updateStatus2(order) {
        return this.changeOrderState(order, DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_4);
    }
    getPMOrder() {
        return this.http.get(DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_8).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    getAMOrder() {
        return this.http.get(DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_7).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    getCancelOrder() {
        return this.http.get(DataCenterService_1.BASE_ADDRESS + DataCenterService_1.API_9).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
/// <summary>
/// 已付款
/// </summary>
DataCenterService.API_1 = "admin/api/index.php/order/getOrderLists?uid=2988&ucode=88616770341";
/// <summary>
/// 已送达
/// </summary>
DataCenterService.API_2 = "admin/api/index.php/order/getArrivedOrderLists?uid=2988&ucode=88616770341";
/// <summary>
/// 修改订单
/// </summary>
DataCenterService.API_3 = "admin/api/index.php/order/updateOrder?uid=2988&ucode=88616770341";
/// <summary>
/// 更改订单状态
/// </summary>
DataCenterService.API_4 = "admin/api/index.php/order/updatestatus/2?uid=2988&ucode=88616770341";
/// <summary>
/// 发送短信
/// </summary>
DataCenterService.API_5 = "admin/api/index.php/order/updatestatus/3?uid=2988&ucode=88616770341";
/// <summary>
/// 获取发送短信失败的订单
/// </summary>
DataCenterService.API_6 = "admin/api/index.php/order/getSMSfailedLists?uid=2988&ucode=88616770341";
/// <summary>
/// 获取上午订单
/// </summary>
DataCenterService.API_7 = "admin/api/index.php/order/getOrderLists?uid=2988&ucode=88616770341&times=am";
/// <summary>
/// 获取下午订单
/// </summary>
DataCenterService.API_8 = "admin/api/index.php/order/getOrderLists?uid=2988&ucode=88616770341&times=pm";
/// <summary>
/// 获取已取消订单
/// </summary>
DataCenterService.API_9 = "admin/api/index.php/order/getcanceledorders?uid=2988&ucode=88616770341";
DataCenterService.BASE_ADDRESS = "http://www.ejiashenghuo.com/";
DataCenterService = DataCenterService_1 = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], DataCenterService);
exports.DataCenterService = DataCenterService;
//# sourceMappingURL=DataCenterService.js.map