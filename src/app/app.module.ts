import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CyberComponent } from './Components/cyber/cyber.component';
import { SalesComponent } from './Components/sales/sales.component';
import { AddingComponent } from './Components/adding/adding.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { StaffsComponent } from './Components/staffs/staffs.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { VerificationComponent } from './Components/verification/verification.component';
import { Error404Component } from './Components/error404/error404.component';
import { MenuComponent } from './Components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CyberComponent,
    SalesComponent,
    AddingComponent,
    ExpensesComponent,
    StaffsComponent,
    ReportsComponent,
    VerificationComponent,
    Error404Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
