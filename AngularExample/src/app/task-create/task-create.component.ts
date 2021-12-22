import { Component, OnInit } from '@angular/core';
import { DetailTaskComponent } from '../detail-task/detail-task.component';
import { TaskService } from '../task-serv.service';
import { TaskModel } from '../TaskModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  task: TaskModel = new TaskModel();
  submitted=false;

  constructor(private taskservice: TaskService,private router:Router) { }

  ngOnInit() {
  }
  newTask():void{
    this.submitted = false;
    this.task = new TaskModel();
  }

  addSave(){
    this.taskservice.createTask(this.task)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.task=new TaskModel();
    this.gotoList();
  }
  onSubmit(){
    this.submitted=true;
    this.addSave();
  }
  gotoList(){
    this.router.navigate(['/tasks'])
  }

}

 
