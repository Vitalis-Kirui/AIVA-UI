import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  // Forms variables
  salesform!: FormGroup;

  // Display variables

  billingready: boolean = false;
  
  constructor(private fbservice : FormBuilder, private router : Router, private salesservice :SaleService) { }

  // Add to billing report
  additem() {

    this.salesservice.registernewsale(this.salesform.value)
      .subscribe(data => {
        console.log(data);
        this.salesform.reset();
      },
        error => {
        console.log(error);
      })
    
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

  ngOnInit() {
    // Sales form model
    this.salesform = this.fbservice.group({
      clientsname: ['', [Validators.required]],
      productname: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      payment: ['', [Validators.required]],
      transactioncode: ['']
    });

  }

 

  // GETTER FUNCTIONS

  // clientsname
  get clientname() {
    return this.salesform.get('clientsname');
  }

  // Items name
  get itemname() {
    return this.salesform.get('productname');
  }

  // Quantity
  get quantity() {
    return this.salesform.get('quantity');
  }

//  Payment
  get payment() {
    return this.salesform.get('payment');
  }

  // Code 
  get code() {
    return this.salesform.get('code');
  }

}
