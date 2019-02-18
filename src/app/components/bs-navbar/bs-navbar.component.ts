import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
appUser : AppUser;
  constructor(public auth: AuthService) {   
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    console.log(this.appUser);
  }

  logout() {
    this.auth.logout();
  }

}
