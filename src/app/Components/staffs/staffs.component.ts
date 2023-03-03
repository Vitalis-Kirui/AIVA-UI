import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  // Display variables
  seeexistingstaffs: boolean = false;
  addnewstaff: boolean = false;

  constructor() { }

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

  ngOnInit(): void {
  }

}
