import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Output() toggleMobileNav = new EventEmitter<void>();
  user: any;
  constructor(private router: Router) {
    this.user = localStorage.getItem("loggedInUser")
  }
  logout() {
    this.router.navigate(['auth/login'])
  }
}
