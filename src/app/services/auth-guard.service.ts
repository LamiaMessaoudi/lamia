import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router ,
               private authService: AuthService    ) { }




              canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                const currentUser = this.authService.currentAdminValue;
                if (currentUser) {
                    // logged in so return true

                    return true;
                }

                // not logged in so redirect to login page with the return url

                this.router.navigate(['auth/signin']);
                return false;
            }



}