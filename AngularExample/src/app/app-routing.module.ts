import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormExampleComponent } from './form-example/form-example.component';
import { ReactiveFormExComponent } from './reactive-form-ex/reactive-form-ex.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { CreateloginComponent } from './createlogin/createlogin.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { AddbookmarkComponent } from './addbookmark/addbookmark.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { SetstatusComponent } from './setstatus/setstatus.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';



const routes: Routes = [
  {path:'TemplateForm',component:FormExampleComponent},
  {path:'ModelForm',component:ReactiveFormExComponent},
  {path:'',redirectTo:'Home',pathMatch:'full' },
  {path:'Home',component:HomeComponent},
  {path:'tasks' , component:ListTaskComponent},
  {path:'save' , component:TaskCreateComponent},
  {path: 'details/:taskID', component: DetailTaskComponent },
  {path:'update/:taskID',component:TaskUpdateComponent } ,
  {path:'login',component:CreateloginComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:'register',component:UserRegistrationComponent},
  {path:'users',component:UserListComponent},
  {path:'userdetails/:userID',component:UserDetailsComponent},
  {path:'updateuser/:userID',component:UserUpdateComponent},
  {path:'track',component:SearchComponent},
  {path:'search',component:SearchIdComponent},
  {path:'bookmark',component:AddbookmarkComponent},
  {path:'notes',component:AddnotesComponent},
  {path:'assign',component:AssigntaskComponent},
  {path:'priority',component:SetPriorityComponent},
  {path:'status',component:SetstatusComponent}


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
