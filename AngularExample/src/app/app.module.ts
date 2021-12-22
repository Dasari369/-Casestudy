import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComponent } from './ArrayComponent';
import { imageComponent } from './imageComponent';
import { MyComponent } from './MyComponent';
import { ifExample } from './ifExample';
import { CustomDirective } from './CustomDirective';
import { ProComponent } from './ProComponent';
import { Product } from './Product';
import { User } from './User';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomSortPipe } from './CustomSortPipe';
import { FormExampleComponent } from './form-example/form-example.component';
import { ReactiveFormExComponent } from './reactive-form-ex/reactive-form-ex.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { EmployeeDetailComponent } from './EmployeeDetailComponent';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { PostExampleComponent } from './post-example/post-example.component';
import { MyModule } from './MyModule';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { CreateloginComponent } from './createlogin/createlogin.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { SetPriorityComponent } from './set-priority/set-priority.component';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { AddbookmarkComponent } from './addbookmark/addbookmark.component';
import { SetstatusComponent } from './setstatus/setstatus.component';





@NgModule({
  declarations: [
    AppComponent,MyComponent,imageComponent,ArrayComponent,
    ifExample,CustomDirective,ProComponent,Product,User, 
    PipeExampleComponent,CustomSortPipe, FormExampleComponent, ReactiveFormExComponent, 
    TaskFormComponent,EmployeeDetailComponent, TaskDetailsComponent, PostExampleComponent, CreateTaskComponent, TaskCreateComponent, DetailTaskComponent, ListTaskComponent, TaskUpdateComponent, SimpleComponentComponent, CreateloginComponent, UserRegistrationComponent, UserListComponent, UserUpdateComponent, UserDetailsComponent, HomeComponent, DashboardComponent, SearchComponent, SearchIdComponent, AssigntaskComponent, SetPriorityComponent, AddnotesComponent, AddbookmarkComponent, SetstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
