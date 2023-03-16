import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  // Stock update form
  stockupdateform!: FormGroup;

  constructor(private fbservice:FormBuilder) { }

  ngOnInit() {

    // Form model
    this.stockupdateform = this.fbservice.group({
      productname: ['', [Validators.required]],
      description: [''],
      quantity: [1, [Validators.required]],
      buyingprice: [1, [Validators.required]],
      sellingprice: [1, [Validators.required]]
    })

  }

  // update function
  updatestock() {
    
  }


  // Getter functions

  // Name
  get name() {
      return this.stockupdateform.get('productname');
    }

  // Quantity
  get quantity() {
      return this.stockupdateform.get('quantity');
    }

  // Buying price 
  get buyingprice() {
      return this.stockupdateform.get('buyingprice');
    }

  // Selling price
  get sellingprice() {
      return this.stockupdateform.get('sellingprice');
    }

  }
