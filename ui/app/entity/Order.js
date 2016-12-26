"use strict";
/**
 * Created by peijia on 11/2/2016.
 * /// 订单
 /// {
    ///"ocode":"1356079599100502",
    ///"uid":"25",
    ///"name":"李四",
    ///"phone":"13560795991",
    ///"addr":"上海市宝山区锦秋花园11栋12号",
    ///"shop":"东门罗森便利店",
    ///"totalpreprice":"31.7",
    ///"freight":"0",
    ///"delivery_way":"pickup",
    ///"time":"2016-03-22 19:51:00",
    ///"goods":[
    ///{
    ///"gcode":"B1002",
    ///"gname":"膳博士肋排(无杂骨)",
    ///"gunitprice":"26",
    ///"gunit":"斤",
    ///"gpreweight":"1",
    ///"gpreprice":"26"
    ///},
    ///]
    ///}
 */
class Order {
    constructor(ocode, uid, name, phone, addr, shop, totalpreprice, freight, delivery_way, time, goods) {
        this.ocode = ocode;
        this.uid = uid;
        this.name = name;
        this.phone = phone;
        this.addr = addr;
        this.shop = shop;
        this.totalpreprice = totalpreprice;
        this.freight = freight;
        this.delivery_way = delivery_way;
        this.time = time;
        this.goods = goods;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map