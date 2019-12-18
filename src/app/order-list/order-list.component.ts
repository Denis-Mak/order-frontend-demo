import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from "../order";
import { OrderMocks } from "../testing/order-mocks";
import { MatDialog } from "@angular/material/dialog";
import { OrderFormComponent } from "../order-form/order-form.component";
import { MatTable } from "@angular/material/table";

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
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.orders = OrderMocks.ORDERS;
  }

  createOrder(): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.orders.push({ id:100, product: result.product, customer: result.customer });
      this.table.renderRows();
    });
  }

}
