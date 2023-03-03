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

  // Display variables
  pastclientsname: boolean = false;

  constructor(private fbservice : FormBuilder) { }

  ngOnInit() {

    // Client's form model
    this.clientsform = this.fbservice.group({
      clientsname:['', [Validators.required, Validators.minLength(3)]]
    })

  }

  // Getter functions

  // Client's name
  get clientsname() {
    return this.clientsform.get('clientsname');
  }

  // Submit client's form function
  registerclient() {

    this.pastclientsname = true;

    console.log(this.clientsform.value);

  }

}
