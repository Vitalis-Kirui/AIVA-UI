import { HttpErrorResponse } from '@angular/common/http';
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

  // False verification
  wrongverification: boolean = false;
  
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

          if(data.staff[0]==null){

            this.wrongverification = true;

          }
          else{

            this.staffverified = data.staff[0].nationalid;

            localStorage.setItem('active staff', this.staffverified);

            this.router.navigate(['menu']);

            // Listen for the beforeunload event
            window.addEventListener('beforeunload', function(event) {
              // Remove the staff number from local storage
              localStorage.removeItem('active staff');
            });

          }

        },
        error =>{
          // Getting error response
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              console.log("User not found")
            }
            else {
              console.log(error);
              this.wrongverification = true;
            }
          }
        })
      
    }

  // Getter function
  get staffnumber() {
    return this.verificationform.get('staffnumber');
  }

}
