import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: { Username: string, Password: string } = { Username: '', Password: '' };
  showPassword = false;

  constructor(
    private ts: ToastrService,
    private router: Router) { }

  login() {
    console.log("called login");
    localStorage.setItem("loggedInUser", this.user.Username)
    this.router.navigate(["/my-resume"]);
  }
}
