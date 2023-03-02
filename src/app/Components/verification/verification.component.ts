import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  // Success verification
  success : boolean = false;

  constructor(private router:Router) { }

  // Verify function
  verifystaffnumber() {

    this.success = true;
    this.router.navigate(['menu']);
    
  }

  ngOnInit(): void {
  }

}
