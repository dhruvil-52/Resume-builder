import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {
  }

  canActivate() {
    if (localStorage.getItem("loggedInUser")) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
    };
  }

  canLoad() {
    if (localStorage.getItem("loggedInUser")) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
    };
  }
}
