import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  // Form variables
  expenseform!: FormGroup;

  constructor(private fbservice:FormBuilder, private router:Router) { }

  ngOnInit() {

    // Expense form model
    this.expenseform = this.fbservice.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      totalcost: ['', Validators.required]
    })
  }

  // Getter functions
  get name() {
    return this.expenseform.get('name');
  }

  get description() {
    return this.expenseform.get('description');
  }

  get totalcost() {
    return this.expenseform.get('totalcost');
  }

   // Submit expense function
  submitexpense() {
    console.log(this.expenseform.value);
  }

}
