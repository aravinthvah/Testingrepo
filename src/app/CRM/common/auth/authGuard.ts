import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginAuthGuardService implements CanActivate {
	constructor(private _router: Router,) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		console.log("hello am authguard")
		let account = localStorage.getItem('crime');
	console.log(account)
		if (!account || account == null) {
			return true;
		} else {
			this._router.navigate(['dashboard']);
			return false;
		}
	}
}

@Injectable()
export class CheckLoginAuthGuardService implements CanActivate {
	constructor(private _router: Router) {
		console.log("AMM CHECK LOGIN AUTHGUARD")


	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

		let account = localStorage.getItem('crime');
		console.log(account)

		if (!account || account == null) {
			this._router.navigate(['']);
			return false;
		} else {
			return true;
		}
	}
}
