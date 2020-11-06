import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HomeModule} from 'src/app/home/home.module'
import {EmployeeModule} from 'src/app/employee/employee.module';
import {MaterialModule} from 'src/app/material/material.module'
import {DepartmentModule} from 'src/app/department/department.module';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

   
    HomeModule,
    EmployeeModule,
    DepartmentModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
