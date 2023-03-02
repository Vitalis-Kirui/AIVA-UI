import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingComponent } from './Components/adding/adding.component';
import { CyberComponent } from './Components/cyber/cyber.component';
import { Error404Component } from './Components/error404/error404.component';
import { ExpensesComponent } from './Components/expenses/expenses.component';
import { HomeComponent } from './Components/home/home.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SalesComponent } from './Components/sales/sales.component';
import { StaffsComponent } from './Components/staffs/staffs.component';
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
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
