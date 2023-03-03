import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  
  constructor(private fbservice : FormBuilder) { }

  // Submits functions
  registerclient() {
    this.billingready = true;
    console.log(this.clientdataform.value);
    this.clientdataform.reset();
  }

  // Generate billing report
  generatereport() {
    
  }

  ngOnInit() {

    // Client's form model
    this.clientdataform = this.fbservice.group({
      clientname: ['', [Validators.required, Validators.minLength(3)]]
    })

  }

  // GETTER FUNCTIONS

  // clientsname
  get clientname() {
    return this.clientdataform.get('clientname');
  }

}
