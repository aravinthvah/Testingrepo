import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuardService } from './CRM/common/auth/authGuard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./CRM/crm.module').then(m => m.CrmModule),canActivate: [LoginAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
