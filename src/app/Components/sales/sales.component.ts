import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  
  constructor() { }

  // Submits functions
  registerclient() {
    this.billingready = true;
    this.clientdataform.reset();
  }

  // Generate billing report
  generatereport() {
    
  }

  ngOnInit(): void {
  }

}
