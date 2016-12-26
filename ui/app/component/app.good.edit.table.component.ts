/**
 * Created by peijia on 11/10/2016.
 */
import {Component, Input} from "@angular/core";
import {Good} from "../entity/Good";
@Component({
    selector:'good-edit-table',
    templateUrl:'template/app.good.edit.table.tmpl.html'
})
export class AppGoodEditTable{
    @Input()
    goods:Good[];
}