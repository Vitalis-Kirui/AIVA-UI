import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CyberService } from 'src/app/Services/cyber.service';

@Component({
  selector: 'app-cyber-full',
  templateUrl: './cyber-full.component.html',
  styleUrls: ['./cyber-full.component.css']
})
export class CyberFullComponent implements OnInit {

  // Cyber services array
  cyberservices: any = [];

  constructor(private router: Router, private cyberservice : CyberService) { }
  
  // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }

  ngOnInit() {

    // all cyber services
    this.cyberservice.getallcyberservices()
      .subscribe(data => {
        this.cyberservices = data.cyberservices;
        console.log(this.cyberservices);
      },
        error => {
          console.log(error);
        }
      )

  }

}
