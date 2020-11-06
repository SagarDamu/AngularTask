import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import {MaterialModule} from 'src/app/material/material.module'
import {RouterModule} from '@angular/router'
import {EmployeeModule} from 'src/app/employee/employee.module'


@NgModule({
  declarations: [NavComponent, IndexComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    EmployeeModule
  ],
  exports : [NavComponent,IndexComponent]
})
export class HomeModule { }
