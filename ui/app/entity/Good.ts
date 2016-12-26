/**
 * Created by peijia on 11/2/2016.
 * gcode":"B1002",
 ///"gname":"膳博士肋排(无杂骨)",
 ///"gunitprice":"26",
 ///"gunit":"斤",
 ///"gpreweight":"1",
 ///"gpreprice":"26"
 */
export class Good{
    constructor(public gcode:String,
                public gname:String,
                public gunitprice:Number,
                public gunit:String,
                public gpreweight:Number,
                public gpreprice:Number
    ){}
}