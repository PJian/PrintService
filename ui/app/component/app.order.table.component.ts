/**
 * Created by peijia on 11/1/2016.
 */
import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Order} from "../entity/Order";
import {forEach} from "@angular/router/src/utils/collection";
@Component({
    selector: 'order-table',
    templateUrl: 'template/app.component.order.table.html'
})
export class AppOrderTable {
    @Input()
    orders:Order[];
    @Output()
    selectionChanged = new EventEmitter<Order>();
    @Output()
    multiSelectionChanged = new EventEmitter<Order[]>();

    @Input()
    mode:String;
    onSelectedItemsChanged(event: any) {
        let selectedIndex: number = event.target.selection.selected()[event.target.selection.selected().length-1];
        let selectedOrders:Order[] =[];
        for(let index in event.target.selection.selected()){
            selectedOrders.push(this.orders[index]);
        }
        this.multiSelectionChanged.emit(selectedOrders);
        if (selectedIndex !== undefined) {
            this.selectionChanged.emit(this.orders[selectedIndex]);
        }
    }



}