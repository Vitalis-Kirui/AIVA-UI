import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/Services/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  // Stock update form
  stockupdateform!: FormGroup;

  // Existing stock data
  existingstock: any = {};

  constructor(private fbservice:FormBuilder, private stockservice:StockService, private route:ActivatedRoute) { }

  ngOnInit() {

    // Form model
    this.stockupdateform = this.fbservice.group({
      productname: ['', [Validators.required]],
      description: [''],
      quantity: [, [Validators.required]],
      buyingprice: [, [Validators.required]],
      sellingprice: [, [Validators.required]]
    })

    // Fetching existing stock information

    let id = this.route.snapshot.paramMap.get('id');

    this.stockservice.getsinglestock(id)
      .subscribe(data => { 

        this.existingstock = data.stockdata;
        console.log(this.existingstock);

          // Patching values to update form
        this.stockupdateform.patchValue({
          productname: this.existingstock.productname,
          description: this.existingstock.description,
          quantity: this.existingstock.quantity,
          buyingprice: this.existingstock.buyingprice,
          sellingprice:this.existingstock.sellingprice
        })

      },
        error => {
        console.log(error);
        })

  }

  // update function
  updatestock() {

    console.log(this.stockupdateform.value)
    
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
