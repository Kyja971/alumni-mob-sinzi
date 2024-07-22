import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(
    private _storage : StorageService,
    private _router : Router,
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this._storage.retrieve('auth') === null) {
      return true
    }
    this._router.navigate(['/','tabs'])
      return false
  }

  
}
