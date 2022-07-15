import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor() { }

  CanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ) : Observable<boolean> | boolean {
    return true
  }
}
