import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-full',
  templateUrl: './expenses-full.component.html',
  styleUrls: ['./expenses-full.component.css']
})
export class ExpensesFullComponent implements OnInit {

  constructor(private router : Router) { }

    // Back to reports function
  backtoreports() {
    this.router.navigate(['reports']);
  }

  ngOnInit(): void {
  }

}
