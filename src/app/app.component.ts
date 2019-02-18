import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineshop';
  constructor(private auth: AuthService, private user: UserService, private router: Router){
    auth.user$.subscribe(user => {
      if(user){

          this.user.save(user);
          let url = localStorage.getItem('returnUrl');
          this.router.navigate([url]);
      }
    })
  }
}
