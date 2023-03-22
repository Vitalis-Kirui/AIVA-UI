import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Date variables
  dateForm!:FormGroup;

  constructor(private fbservice:FormBuilder) { }

  ngOnInit() {

    this.dateForm = this.fbservice.group({
      date:['',[Validators.required]]
    })

  }

  // Date getter function
  get date() {
    return this.dateForm.get('date');
  }

  // Date search
  datesearch(){

  }

}
