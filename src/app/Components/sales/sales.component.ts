import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  // Forms variables
  clientdataform!: FormGroup;

  salesform!: FormGroup;

  // Display variables

  billingready: boolean = false;
  
  constructor(private fbservice : FormBuilder, private router : Router) { }

  // Submits functions
  registerclient() {
    this.billingready = true;
    console.log(this.clientdataform.value);
    this.clientdataform.reset();
  }

  // Add to billing report
  additem() {
    console.log(this.salesform.value);
    this.salesform.reset();
  }

  // Generate billing report
  generatereport() {
    
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

  ngOnInit() {

    // Client's form model
    this.clientdataform = this.fbservice.group({
      clientname: ['', [Validators.required, Validators.minLength(3)]]
    })

    // Sales form model
    this.salesform = this.fbservice.group({
      itemname: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      mpesa: [''],
      cash: [''],
      cheque: [''],
      code: ['']
    });

    // M-Pesa conditional validation
  this.salesform.get('mpesa')?.valueChanges
     .subscribe((checkedvalue) =>{

      // getting code field
      const code = this.code;

      if(checkedvalue){
        code?.setValidators([Validators.required]);
      }
      else{
        code?.clearValidators()
      }
      code?.updateValueAndValidity();
     }) 

  }

  // GETTER FUNCTIONS

  // clientsname
  get clientname() {
    return this.clientdataform.get('clientname');
  }

  // Items name
  get itemname() {
    return this.salesform.get('itemname');
  }

  // Quantity
  get quantity() {
    return this.salesform.get('quantity');
  }

  // M-pesa
  get mpesa() {
    return this.salesform.get('mpesa');
  }

  // cash
  get cash() {
    return this.salesform.get('cash');
  }

  // cheque
  get cheque() {
    return this.salesform.get('cheque');
  }

  // Code 
  get code() {
    return this.salesform.get('code');
  }

}
