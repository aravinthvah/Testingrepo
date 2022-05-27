import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../common/localStorage.service';
import { CrmRoutingModule } from '../../crm.rotuing.module';
import { Crmservice } from '../../service/crm.service';

@Component({
  selector: 'app-logincrm',
  templateUrl: './logincrm.component.html',
  styleUrls: ['./logincrm.component.css']
})
export class LogincrmComponent implements OnInit {
  loginForm: any;

  constructor(public formBuilder: FormBuilder,public _router: Router,private snackbar:MatSnackBar,public _localStorageService:LocalStorageService,public _loginService:Crmservice)  { 
  }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
      password: ['', Validators.required],
      company:['',Validators.required]

		});
  }


  public submit() {
		if (this.loginForm.valid) {
			let loginData = {
				'login': this.loginForm.value.username,
				'password': this.loginForm.value.password,
				'db': this.loginForm.value.company,
			}

			this._loginService.login(loginData).subscribe(
				(data:any) => {
          console.log(data)
		
				}, (error:any) => {
					console.log(error);
				}
			)
		} 

		


	}

}
