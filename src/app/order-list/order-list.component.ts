import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../order';
import { MatDialog } from '@angular/material/dialog';
import { OrderFormComponent } from '../order-form/order-form.component';
import { MatTable } from '@angular/material/table';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  displayedColumns: string[] = ['id', 'product', 'customer'];

  constructor(
    public dialog: MatDialog,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  createOrder(): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.orderService.createOrder({product: result.product, customer: result.customer})
        .subscribe(order => {
          this.orders.push(order);
          this.table.renderRows();
        });
    });
  }

}
