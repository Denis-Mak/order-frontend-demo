import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { OrderFormComponent } from './order-form/order-form.component';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { A11yModule } from "@angular/cdk/a11y";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    A11yModule,
    MatInputModule
  ],
  providers: [],
  entryComponents:[
    OrderFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
