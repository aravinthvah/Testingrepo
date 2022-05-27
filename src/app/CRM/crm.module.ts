import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonAuthServiceModule } from './common/auth';
import { CommonServiceModule } from './common/http.service';
import { LocalStorageService } from './common/localStorage.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartModule } from 'angular-highcharts';
import {MatMenuModule} from '@angular/material/menu';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CrmRoutingModule } from './crm.rotuing.module';
import { LogincrmComponent } from './login/logincrm/logincrm.component';
import { Crmservice } from './service/crm.service';


@NgModule({
  declarations: [LogincrmComponent],
  imports: [
    CommonModule,
    CrmRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    CommonModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatStepperModule,
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    CommonAuthServiceModule,
    CommonServiceModule,
    NgxDatatableModule,
    ChartModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    
  ],providers: [DatePipe,
    Crmservice,

    LocalStorageService,
    ]
})
export class CrmModule { }
