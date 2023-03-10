import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cyber-full',
  templateUrl: './cyber-full.component.html',
  styleUrls: ['./cyber-full.component.css']
})
export class CyberFullComponent implements OnInit {

  constructor(private router: Router) { }
  
  // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }

  ngOnInit(): void {
  }

}
