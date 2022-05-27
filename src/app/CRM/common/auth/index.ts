import { Injectable, NgModule } from '@angular/core';
import { LoginAuthGuardService, CheckLoginAuthGuardService } from './authGuard';

@NgModule({
	providers: [LoginAuthGuardService, CheckLoginAuthGuardService]
})

export class CommonAuthServiceModule {
}
