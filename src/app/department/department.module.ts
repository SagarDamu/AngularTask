import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentcompComponent } from './departmentcomp/departmentcomp.component';
import {MaterialModule} from 'src/app/material/material.module';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { SelectdepartmentComponent } from './selectdepartment/selectdepartment.component';
import { DeletedepartmentComponent } from './deletedepartment/deletedepartment.component';
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [DepartmentcompComponent, AdddepartmentComponent, SelectdepartmentComponent, DeletedepartmentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports : [DepartmentcompComponent]
})
export class DepartmentModule { }
