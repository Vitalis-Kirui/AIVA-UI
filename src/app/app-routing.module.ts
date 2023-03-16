import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingComponent } from './Components/adding/adding.component';
import { CyberFullComponent } from './Components/cyber-full/cyber-full.component';
import { CyberComponent } from './Components/cyber/cyber.component';
import { Error404Component } from './Components/error404/error404.component';
import { ExpensesFullComponent } from './Components/expenses-full/expenses-full.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SalesFullComponent } from './Components/sales-full/sales-full.component';
import { SalesComponent } from './Components/sales/sales.component';
import { StaffDetailsComponent } from './Components/staff-details/staff-details.component';
import { StaffsComponent } from './Components/staffs/staffs.component';
import { StockDetailsComponent } from './Components/stock-details/stock-details.component';
import { UpdateStaffComponent } from './Components/update-staff/update-staff.component';
import { UpdateStockComponent } from './Components/update-stock/update-stock.component';
import { VerificationComponent } from './Components/verification/verification.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'verify', component: VerificationComponent },
  { path: 'adding', component: AddingComponent },
  { path: 'cyber', component: CyberComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'staffs', component: StaffsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sales/full-report', component: SalesFullComponent },
  {path: 'expenses/full-report', component: ExpensesFullComponent},
  {path: 'cyber/full-report', component: CyberFullComponent},
  { path: 'staffs/staff/:id', component: StaffDetailsComponent },
  { path: 'adding/stocks/stock/:id', component: StockDetailsComponent },
  { path: 'adding/stocks/update-stock/:id', component: UpdateStockComponent },
  { path: 'staffs/update-staff/:id', component: UpdateStaffComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
