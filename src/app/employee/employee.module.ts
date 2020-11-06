import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeecompComponent } from './employeecomp/employeecomp.component';

import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router'
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { SelectemployeeComponent } from './selectemployee/selectemployee.component';


@NgModule({
  declarations: [EmployeecompComponent,EmployeecompComponent, CreateemployeeComponent, DeleteemployeeComponent, UpdateemployeeComponent, SelectemployeeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [ CreateemployeeComponent, DeleteemployeeComponent, UpdateemployeeComponent, SelectemployeeComponent]




})
export class EmployeeModule { }
