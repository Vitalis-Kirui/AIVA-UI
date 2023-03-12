import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-sales-full',
  templateUrl: './sales-full.component.html',
  styleUrls: ['./sales-full.component.css']
})
export class SalesFullComponent implements OnInit {

  // Sales array
  sales : any = [];

  constructor(private router : Router, private salesservice : SaleService) { }

    // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }
  ngOnInit() {

    // All sales
    this.salesservice.getallsales()
      .subscribe(data => {
        this.sales = data.sales;
        console.log(this.sales);
      },
        error => {
          console.log(error);
        }
      )

  }

}
