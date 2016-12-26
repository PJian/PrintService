package com.app.POJO;

import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

/**
 * Created by peijia on 12/5/2016.
 */
public class Order {
    private String ocode;
    private String uid;
    private String phone;
    private String addr;
    private String totalpreprice;
    private double freight;
    private String delivery_way;
    private String deliverydate;
    private String deliverytime;
    private String time;
    private String name;
    private String shop;
    private String pickup;

    private JRBeanCollectionDataSource goods;

    public String getOcode() {
        return ocode;
    }

    public void setOcode(String ocode) {
        this.ocode = ocode;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getTotalpreprice() {
        return totalpreprice;
    }

    public void setTotalpreprice(String totalpreprice) {
        this.totalpreprice = totalpreprice;
    }

    public double getFreight() {
        return freight;
    }

    public void setFreight(double freight) {
        this.freight = freight;
    }

    public String getDelivery_way() {
        return delivery_way;
    }

    public void setDelivery_way(String delivery_way) {
        this.delivery_way = delivery_way;
    }

    public String getDeliverydate() {
        return deliverydate;
    }

    public void setDeliverydate(String deliverydate) {
        this.deliverydate = deliverydate;
    }

    public String getDeliverytime() {
        return deliverytime;
    }

    public void setDeliverytime(String deliverytime) {
        this.deliverytime = deliverytime;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShop() {
        return shop;
    }

    public void setShop(String shop) {
        this.shop = shop;
    }

    public String getPickup() {
        return pickup;
    }

    public void setPickup(String pickup) {
        this.pickup = pickup;
    }

    public JRBeanCollectionDataSource getGoods() {
        return goods;
    }

    public void setGoods(JRBeanCollectionDataSource goods) {
        this.goods = goods;
    }
}
