import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  // Form variable
  newstaffform!: FormGroup;

  // Work stations
  stations: any = ['All', 'Chebunyo', 'Kaboson']

  // Gender
  genders: any = ['Male', 'Female']

  // Roles
  roles: any = ['CEO', 'Management', 'Supervisor', 'Attendant']

  // Display variables
  seeexistingstaffs: boolean = false;
  addnewstaff: boolean = false;

  constructor(private router:Router, private fbservice:FormBuilder) { }

  // Existing staff function
  existingstaffs() {
    
    this.seeexistingstaffs = true;
    this.addnewstaff = false;

  }

  // Add new staff function
  addstaff() {

    this.addnewstaff = true;
    this.seeexistingstaffs = false;
    
  }

  // Submit staff function
  submitstaff() {

    console.log(this.newstaffform.value);
    this.newstaffform.reset();
    
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

  ngOnInit() {

    // Form model
    this.newstaffform = this.fbservice.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      secondname: ['', [Validators.required, Validators.minLength(3)]],
      id: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      age: ['', [Validators.required]],
      image: [''],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      workstation: ['', [Validators.required]]


    })

  }

}
