import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  // Adding form variable
  stockadditionform!: FormGroup;

  constructor(private fbservice:FormBuilder, private router : Router) { }

  ngOnInit() {

    // Form model
    this.stockadditionform = this.fbservice.group({
      name: ['', [Validators.required]],
      description:[''],
      quantity: [1, [Validators.required]],
      buyingprice: [1, [Validators.required]],
      sellingprice: [1, [Validators.required]]
    })

  }

  // Getter functions

  // Name
  get name() {
    return this.stockadditionform.get('name');
  }

  // Quantity
  get quantity() {
    return this.stockadditionform.get('quantity');
  }

  // Buying price 
  get buyingprice() {
    return this.stockadditionform.get('buyingprice');
  }

  // Selling price
  get sellingprice() {
    return this.stockadditionform.get('sellingprice');
  }

  // Add Item function
  additem() {

    console.log(this.stockadditionform.value)
    this.stockadditionform.reset();

  }

  // Go back function
  goback() {

    this.router.navigate(['menu']);
    
  }

}
