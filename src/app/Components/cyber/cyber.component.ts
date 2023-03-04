import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyber',
  templateUrl: './cyber.component.html',
  styleUrls: ['./cyber.component.css']
})
export class CyberComponent implements OnInit {

  // Forms variables
  clientsform!: FormGroup;

  cyberform!: FormGroup;

  // Display variables
  pastclientsname: boolean = false;

  constructor(private fbservice : FormBuilder, private router:Router) { }

  ngOnInit() {

    // Client's form model
    this.clientsform = this.fbservice.group({
      clientsname:['', [Validators.required, Validators.minLength(3)]]
    })

    // Cyber form model
    this.cyberform = this.fbservice.group({
      name: ['', [Validators.required]],
      quantity: [''],
      totalcost: ['', [Validators.required]],
      mpesa: [''],
      cash: [''],
      cheque: [''],
      code: ['']
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
    return this.clientsform.get('clientsname');
  }

  // Cyber service name
  get name() {
    return this.cyberform.get('name');
  }

  // Quantity
  get quantity() {
    return this.cyberform.get('quantity');
  }

  // Total cost
  get totalcost() {
    return this.cyberform.get('totalcost');
  }

  // M-pesa
  get mpesa() {
    return this.cyberform.get('mpesa');
  }

  // cash
  get cash() {
    return this.cyberform.get('cash');
  }

  // cheque
  get cheque() {
    return this.cyberform.get('cheque');
  }

  // Code 
  get code() {
    return this.cyberform.get('code');
  }



  // Submit client's form function
  registerclient() {

    this.pastclientsname = true;

    console.log(this.clientsform.value);

  }

  // Submiting cyber service
  registercyberservice() {

    this.pastclientsname = true;
    console.log(this.cyberform.value)
    
    this.cyberform.reset();
  }

  // Go back function
  goback() {
    this.router.navigate(['menu']);
  }

}
