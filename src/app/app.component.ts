import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './CRM/common/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm';
  role: any;
  constructor(public router:Router,public _localService: LocalStorageService){
    const account = this._localService.getLocalStorage('crime');
        this.role=account.role
        console.log(this.role)

  }
logout()
{
  localStorage.clear()
  this.router.navigate([''])
}
roles()
{
  const account = this._localService.getLocalStorage('crime');

  this.role=account.role
console.log(this.role)
}
}
