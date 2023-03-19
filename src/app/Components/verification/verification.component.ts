import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  // Success verification
  staffverified: any
  
  // Form variable
  verificationform!:FormGroup

  constructor(private router:Router, private fbservice:FormBuilder, private staffservice:StaffService) { }

  ngOnInit() {

    this.verificationform = this.fbservice.group({
      staffnumber:['', [Validators.required, Validators.minLength(5)]]
    })

  }

    // Verify function
    verifystaffnumber() {

      console.log(this.verificationform.value);
  
    // Checking staff existence

    const nationalid = this.verificationform.get('staffnumber')?.value;
    this.staffservice.startsession(nationalid)
        .subscribe(data => {
          console.log(data);

          this.staffverified = data.staff[0].nationalid;

          localStorage.setItem('activestaff', this.staffverified);

          this.router.navigate(['menu']);
        },
        error =>{
          console.log(error);
        })
      
    }

  // Getter function
  get staffnumber() {
    return this.verificationform.get('staffnumber');
  }

}
