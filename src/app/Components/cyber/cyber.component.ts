import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fbservice : FormBuilder) { }

  ngOnInit() {

    // Client's form model
    this.clientsform = this.fbservice.group({
      clientsname:['', [Validators.required, Validators.minLength(3)]]
    })

    // Cyber form model
    this.cyberform = this.fbservice.group({
      name: ['', [Validators.required]],
      quantity: [''],
      totalcost: ['', [Validators.required]]
    });

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



  // Submit client's form function
  registerclient() {

    this.pastclientsname = true;

    console.log(this.clientsform.value);

  }

  // Submiting cyber service
  registercyber() {
    console.log(this.cyberform.value)
  }

}
