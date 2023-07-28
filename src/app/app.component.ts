import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("loggedInUser")) {
    } else {
      this.router.navigate(["/auth/login"]);
    }
  }
}
