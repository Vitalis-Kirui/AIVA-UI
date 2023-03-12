import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

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

  constructor(private router:Router, private fbservice:FormBuilder, private staffservice : StaffService) { }

  // Existing staff function
  existingstaffs() {
    
    this.seeexistingstaffs = true;
    this.addnewstaff = false;

  }

  // Staffs array
  allstaffs: any = [];

  // Add new staff function
  addstaff() {

    this.addnewstaff = true;
    this.seeexistingstaffs = false;
    
  }

  // Submit staff function
  submitstaff() {

    // Registering staff to backend
    this.staffservice.registernewstaff(this.newstaffform.value)
      .subscribe(success => {
          console.log(success);
      },
        error => {
        console.log(error);
      })

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
      id: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.minLength(9)]],
      age: ['', [Validators.required]],
      image: [''],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      workstation: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    })

    // Fetching all the staffs
    this.staffservice.getallstaffs()
      .subscribe(data => {
        this.allstaffs = data.staffs;
        console.log(this.allstaffs);          
      },
        error => {
        console.log(error);
      })

  }

  // GETTER FUNCTIONS

  // Firstname
  get firstname() {
    return this.newstaffform.get('firstname');
  }

  // Second name
  get secondname() {
    return this.newstaffform.get('secondname');
  }

  // id
  get id() {
    return this.newstaffform.get('id');
  }

  // Phone number
  get phonenumber() {
    return this.newstaffform.get('phonenumber');
  }

  // age
  get age() {
    return this.newstaffform.get('age');
  }

  // role
  get role() {
    return this.newstaffform.get('role');
  }

  // gender
  get gender() {
    return this.newstaffform.get('gender');
  }

  // Workstation
  get workstation() {
    return this.newstaffform.get('workstation');
  }

  // Salary
  get salary() {
    return this.newstaffform.get('salary');
  }

  // Tracking changes in the dropdowns

  // Role
  changerank(event: any) {
    this.role?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  // Gender
  changegender(event: any) {
    this.gender?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  // Station
  changestation(event: any) {
    this.workstation?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

}
