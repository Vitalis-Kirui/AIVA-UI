import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CyberService } from 'src/app/Services/cyber.service';

@Component({
  selector: 'app-cyber',
  templateUrl: './cyber.component.html',
  styleUrls: ['./cyber.component.css']
})
export class CyberComponent implements OnInit {

  // Forms variables
  cyberform!: FormGroup;

  constructor(private fbservice : FormBuilder, private router:Router, private cyberservice : CyberService) { }

  ngOnInit() {

    // Cyber form model
    this.cyberform = this.fbservice.group({
      clientsname:['', [Validators.required, Validators.minLength(3)]],
      servicename: ['', [Validators.required]],
      quantity: [''],
      totalcost: ['', [Validators.required]],
      payment:['', [Validators.required]],
      transactioncode: ['']
    });

     // M-Pesa conditional validation
  this.cyberform.get('mpesa')?.valueChanges
     .subscribe((checkedvalue) =>{

      // getting code field
      const code = this.code;

      if(checkedvalue){
        code?.setValidators([Validators.required]);
      }
      else{
        code?.clearValidators()
      }
      code?.updateValueAndValidity();
     }) 
    
    // Cheque conditional validation
    this.cyberform.get('cheque')?.valueChanges
     .subscribe((checkedvalue) =>{

      // getting code field
      const code = this.code;

      if(checkedvalue){
        code?.setValidators([Validators.required]);
      }
      else{
        code?.clearValidators()
      }
      code?.updateValueAndValidity();
     }) 

  }

  // Getter functions

  // Client's name
  get clientsname() {
    return this.cyberform.get('clientsname');
  }

  // Cyber service name
  get name() {
    return this.cyberform.get('servicename');
  }

  // Quantity
  get quantity() {
    return this.cyberform.get('quantity');
  }

  // Total cost
  get totalcost() {
    return this.cyberform.get('totalcost');
  }

  // Payment
  get payment() {
    return this.cyberform.get('payment');
  }

  // Code 
  get code() {
    return this.cyberform.get('transactioncode');
  }

  // Submiting cyber service
  registercyberservice() {

    this.cyberservice.registercyberservice(this.cyberform.value)
      .subscribe(success => {
        console.log(success);
        this.cyberform.reset();
      },
        error =>{
        console.log(error);
      })
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

}
