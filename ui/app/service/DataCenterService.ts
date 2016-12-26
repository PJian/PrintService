/**
 * Created by peijia on 11/2/2016.
 */
'use strict';
import {Order} from "../entity/Order";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Data} from "@angular/router";
import {retry} from "rxjs/operator/retry";
import {Good} from "../entity/Good";
@Injectable()
export class DataCenterService {
    /// <summary>
    /// 已付款
    /// </summary>
    private static API_1: string = "admin/api/index.php/order/getOrderLists?uid=2988&ucode=88616770341";
    /// <summary>
    /// 已送达
    /// </summary>
    private static API_2: string = "admin/api/index.php/order/getArrivedOrderLists?uid=2988&ucode=88616770341";
    /// <summary>
    /// 修改订单
    /// </summary>
    private static API_3: string = "admin/api/index.php/order/updateOrder?uid=2988&ucode=88616770341";
    /// <summary>
    /// 更改订单状态
    /// </summary>
    private static API_4: string = "admin/api/index.php/order/updatestatus/2?uid=2988&ucode=88616770341";
    /// <summary>
    /// 发送短信
    /// </summary>
    private static API_5: string = "admin/api/index.php/order/updatestatus/3?uid=2988&ucode=88616770341";

    /// <summary>
    /// 获取发送短信失败的订单
    /// </summary>
    private static API_6: string = "admin/api/index.php/order/getSMSfailedLists?uid=2988&ucode=88616770341";

    /// <summary>
    /// 获取上午订单
    /// </summary>
    private static API_7: string = "admin/api/index.php/order/getOrderLists?uid=2988&ucode=88616770341&times=am";
    /// <summary>
    /// 获取下午订单
    /// </summary>
    private static API_8: string = "admin/api/index.php/order/getOrderLists?uid=2988&ucode=88616770341&times=pm";
    /// <summary>
    /// 获取已取消订单
    /// </summary>
    private static API_9: string = "admin/api/index.php/order/getcanceledorders?uid=2988&ucode=88616770341";


    private static BASE_ADDRESS: string = "http://www.ejiashenghuo.com/";

    //private static BASE_ADDRESS_1:string = "http://www.ejiashenghuo.com/";

    constructor(private http: Http) {
    }


    private changeOrderState(order: Order, api: String): Promise<any> {
        if (order == null) return Promise.resolve();
        let param: String = "&ocode=" + order.ocode;
        return this.http.get(api + "" + param).toPromise().then(response=>response.json().ok()).catch(this.handleError);
    }

    public updateOrder(order:Order):Promise<any>{
        if(order==null||order.goods===null||order.goods.length===0) return Promise.resolve();
        let param=`&ocode=${order.ocode}`;
        let goods:Good[] = order.goods;
        for(let i=0;i<goods.length;i++){
            param+=`&gweight${i}=${goods[i].gpreweight}`;
        }
        return this.http.get(DataCenterService.BASE_ADDRESS + DataCenterService.API_3).toPromise().then(response=>response.ok).catch(this.handleError);
    }

    public getFinishedOrders(): Promise<Order[]> {
        return this.http.get(DataCenterService.BASE_ADDRESS + DataCenterService.API_2).toPromise().then(response=>response.json().data as Order[]).catch(this.handleError);
    }

    public getNSendTextMsgOrders(): Promise<Order[]> {
        return this.http.get(DataCenterService.BASE_ADDRESS + DataCenterService.API_6).toPromise().then(response=>response.json().data as Order[]).catch(this.handleError);
    }

    public sendTextMsg(order: Order): Promise<String> {
        return this.changeOrderState(order,DataCenterService.BASE_ADDRESS + DataCenterService.API_5);
    }

    public updateStatus2(order: Order): Promise<String> {
        return this.changeOrderState(order,DataCenterService.BASE_ADDRESS + DataCenterService.API_4);
    }

    public getPMOrder(): Promise<Order[]> {
        return this.http.get(DataCenterService.BASE_ADDRESS + DataCenterService.API_8).toPromise().then(response=>response.json().data as Order[]).catch(this.handleError);
    }

    public getAMOrder(): Promise<Order[]> {
        return this.http.get(DataCenterService.BASE_ADDRESS + DataCenterService.API_7).toPromise().then(response=>response.json().data as Order[]).catch(this.handleError);
    }

    public getCancelOrder(): Promise<Order[]> {
        return this.http.get(DataCenterService.BASE_ADDRESS + DataCenterService.API_9).toPromise().then(response=>response.json().data as Order[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error)
    }


}