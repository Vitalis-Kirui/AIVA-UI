import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private router: Router) { }
  
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

  ngOnInit(): void {
  }

}
