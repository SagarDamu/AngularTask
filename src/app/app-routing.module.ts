import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from 'src/app/home/index/index.component'
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { DeletedepartmentComponent } from './department/deletedepartment/deletedepartment.component';
import { DepartmentcompComponent } from './department/departmentcomp/departmentcomp.component';
import { SelectdepartmentComponent } from './department/selectdepartment/selectdepartment.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { DeleteemployeeComponent } from './employee/deleteemployee/deleteemployee.component';
import { EmployeecompComponent } from './employee/employeecomp/employeecomp.component';
import { SelectemployeeComponent } from './employee/selectemployee/selectemployee.component';
import { UpdateemployeeComponent } from './employee/updateemployee/updateemployee.component';

const routes: Routes = [
  {path : '',component:IndexComponent},
  {path:'employee',component:EmployeecompComponent},
  {path:'department',component:DepartmentcompComponent},
  {path:'employee/addemp',component:CreateemployeeComponent},
  {path:'employee/delemp',component:DeleteemployeeComponent},
  {path:'employee/updemp',component:UpdateemployeeComponent},
  {path:'employee/seremp',component:SelectemployeeComponent},
  {path:'department/adddep',component:AdddepartmentComponent},
  {path:'department/deldep',component:DeletedepartmentComponent},
  {path:'department/serdep',component:SelectdepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
