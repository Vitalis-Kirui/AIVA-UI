import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  // Success verification
  success: boolean = false;
  
  // Form variable
  verificationform!:FormGroup

  constructor(private router:Router, private fbservice:FormBuilder) { }

  // Verify function
  verifystaffnumber() {

    console.log(this.verificationform.value);
    this.success = true;
    this.router.navigate(['menu']);
    
  }

  ngOnInit() {

    this.verificationform = this.fbservice.group({
      staffnumber:['', [Validators.required, Validators.minLength(5)]]
    })

  }

  // Getter function
  get staffnumber() {
    return this.verificationform.get('staffnumber');
  }

}
