/**
 * Created by peijia on 11/3/2016.
 */
import {Component, Input} from "@angular/core";
import {Good} from "../entity/Good";
@Component({
    selector:'good-table',
    templateUrl:'template/app.good.table.tmpl.html'
})
export class AppGoodTable{
    @Input()
    goods:Good[];
}