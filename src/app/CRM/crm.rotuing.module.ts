import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginAuthGuardService, LoginAuthGuardService } from './common/auth/authGuard';
import { LogincrmComponent } from './login/logincrm/logincrm.component';


const routes: Routes = [

   { path: '', component:LogincrmComponent,canActivate: [LoginAuthGuardService],},

//    { path: 'dashboard', component:DashboardcrimeComponent,canActivate: [CheckLoginAuthGuardService]},
//    { path: 'createticket/create', component:CreateticketComponent,canActivate: [CheckLoginAuthGuardService]},

//    { path: 'createticket/list', component:TicketListComponent,canActivate: [CheckLoginAuthGuardService]},
//    { path: 'createticket/listall', component:TicketListAllComponent,canActivate: [CheckLoginAuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
