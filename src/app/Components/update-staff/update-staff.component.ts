import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

   // Form variable
  newstaffform!: FormGroup;

  // Work stations
  stations: any = ['All', 'Chebunyo', 'Kaboson']

  // Gender
  genders: any = ['Male', 'Female']

  // Roles
  roles: any = ['CEO', 'Management', 'Supervisor', 'Attendant']

  // Staff object
  existingdata: any = {};

  constructor(private fbservice: FormBuilder, private staffservice: StaffService, private route: ActivatedRoute) { }


  ngOnInit() {

    // Form model
    this.newstaffform = this.fbservice.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      secondname: ['', [Validators.required, Validators.minLength(3)]],
      nationalid: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.minLength(9)]],
      age: ['', [Validators.required]],
      image: [''],
      role: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      workstation: ['', [Validators.required]],
      monthlysalary: ['', [Validators.required]]
    })

    // Fetching existing data
    // Staff id
    let staffid = this.route.snapshot.paramMap.get('id');
    
    this.staffservice.getsinglestaff(staffid)
      .subscribe((data) => {
        
        this.existingdata = data.staffdata;

        console.log(this.existingdata);
      },
        error => {
        console.log(error);
      })

  }

  // Update staff function
  updatestaff() {
    
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
    return this.newstaffform.get('nationalid');
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
    return this.newstaffform.get('monthlysalary');
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