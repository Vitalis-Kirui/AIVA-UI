import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  // Adding form variable
  stockadditionform!: FormGroup;

  constructor(private fbservice:FormBuilder) { }

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

}
