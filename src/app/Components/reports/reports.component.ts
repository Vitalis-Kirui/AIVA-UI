import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CyberService } from 'src/app/Services/cyber.service';
import { ExpenseService } from 'src/app/Services/expense.service';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  // Cyber services array
  cyberservices: any = [];
  
  // Sales array
  sales: any = [];

  // expenses array
  expenses: any = [];

  constructor(private router: Router, private cyberservice: CyberService,
    private salesservice: SaleService, private expenseservice: ExpenseService) { }
  
  // sales full report
  salesfullreport() {
    this.router.navigate(['sales/full-report']);
  }

  // Expenses full report
  expensesfullreport() {
    this.router.navigate(['expenses/full-report']);
  }

  // Cyber full report
  cyberfullreport() {
    this.router.navigate(['cyber/full-report']);
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

  ngOnInit() {

    // Today's cyber services
    this.cyberservice.gettodaycyberservices()
      .subscribe(data => { 
        this.cyberservices = data.cyberservices;
        console.log(this.cyberservices);
      },
        error => {
          console.log(error);
        }
    )
    
    // Today sales
    this.salesservice.gettodaysales()
      .subscribe(data => {
        this.sales = data.sales;
        console.log(this.sales);
      },
        error => {
          console.log(error);
        }
    )
    
    // Today's expenses
    this.expenseservice.gettodayexpenses()
      .subscribe(data => {
        this.expenses = data.expenses;
        console.log(this.expenses);
      },
        error => {
          console.log(error);
        }
      )

  }

}
