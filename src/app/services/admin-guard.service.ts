import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private userSvc: UserService) { }

  canActivate() : Observable<boolean>{
    return this.auth.appUser$
    .pipe(
      map(appUser =>  appUser.isAdmin )
    );
  }
} 
