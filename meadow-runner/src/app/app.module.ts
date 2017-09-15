import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhonePipe} from './pipes/phone.pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomHttpInterceptor } from './http.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CalendarModule } from "ap-angular2-fullcalendar";
import { ScheduleService } from './schedule/schedule.service';
import { ScheduleComponent } from './schedule/schedule.component';

import { CustomersComponent } from './customers/customers.component';
import { CustomersShowComponent } from './customers/show/customers.show.component';
import { CustomersEditComponent } from './customers/edit/customers.edit.component';
import { CustomerService } from './customers/customers.service';

import { TrainersComponent } from './trainers/trainers.component';
import { TrainersShowComponent } from './trainers/show/trainers.show.component';
import { TrainersEditComponent } from './trainers/edit/trainers.edit.component';
import { TrainerService } from './trainers/trainers.service';

import { ClassesComponent } from './classes/classes.component';
import { ClassesShowComponent } from './classes/show/classes.show.component';
import { ClassesEditComponent } from './classes/edit/classes.edit.component';
import { ClassService } from './classes/classes.service';

const appRoutes: Routes = [
  { path: 'home',               component: HomeComponent },
  { path: 'customers',          component: CustomersComponent },
  { path: 'customers/add',      component: CustomersEditComponent },
  { path: 'customers/:id/edit', component: CustomersEditComponent },
  { path: 'customers/:id',      component: CustomersShowComponent },
  { path: 'schedule',           component: ScheduleComponent },
  { path: 'trainers',           component: TrainersComponent },
  { path: 'trainers/add',       component: TrainersEditComponent },
  { path: 'trainers/:id/edit',  component: TrainersEditComponent },
  { path: 'trainers/:id',       component: TrainersShowComponent },
  { path: 'classes',            component: ClassesComponent },
  { path: 'classes/add',        component: ClassesEditComponent },
  { path: 'classes/:id/edit',   component: ClassesEditComponent },
  { path: 'classes/:id',        component: ClassesShowComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , CustomersComponent
    , CustomersShowComponent
    , CustomersEditComponent
    , ScheduleComponent
    , PhonePipe
    , TrainersComponent
    , TrainersShowComponent
    , TrainersEditComponent
    , ClassesComponent
    , ClassesShowComponent
    , ClassesEditComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,HttpClientModule
    ,RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
    ,Ng2SmartTableModule
    ,CalendarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
    ,CustomerService
    ,ScheduleService
    ,TrainerService
    ,ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//generate language file: ng xi18n --output-path src/i18n