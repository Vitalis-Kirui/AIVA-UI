import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  // Work stations
  stations: any = ['All', 'Chebunyo', 'Kaboson']

  // Gender
  genders: any = ['Male', 'Female']

  // Roles
  roles: any = ['CEO', 'Management', 'Supervisor', 'Attendant']

  // Display variables
  seeexistingstaffs: boolean = false;
  addnewstaff: boolean = false;

  constructor(private router:Router) { }

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

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

  ngOnInit(): void {
  }

}
