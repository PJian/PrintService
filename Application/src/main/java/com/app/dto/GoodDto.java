package com.app.dto;

/**
 * Created by peijia on 12/14/2016.
 */
public class GoodDto {
    private String gcode;
    private String gname;
    private double gunitprice;
    private String gunit;
    private double gpreprice;
    private double gpreweight;

    public String getGcode() {
        return gcode;
    }

    public void setGcode(String gcode) {
        this.gcode = gcode;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname;
    }

    public double getGunitprice() {
        return gunitprice;
    }

    public void setGunitprice(double gunitprice) {
        this.gunitprice = gunitprice;
    }

    public String getGunit() {
        return gunit;
    }

    public void setGunit(String gunit) {
        this.gunit = gunit;
    }

    public double getGpreprice() {
        return gpreprice;
    }

    public void setGpreprice(double gpreprice) {
        this.gpreprice = gpreprice;
    }

    public double getGpreweight() {
        return gpreweight;
    }

    public void setGpreweight(double gpreweight) {
        this.gpreweight = gpreweight;
    }
}
