import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-full',
  templateUrl: './sales-full.component.html',
  styleUrls: ['./sales-full.component.css']
})
export class SalesFullComponent implements OnInit {

  constructor(private router : Router) { }

    // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }
  ngOnInit(): void {
  }

}
