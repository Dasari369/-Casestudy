import { Component, OnInit } from '@angular/core';
import { DetailTaskComponent } from '../detail-task/detail-task.component';
import { TaskService } from '../task-serv.service';
import { TaskModel } from '../TaskModel';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks !: Observable<TaskModel[]>;
  searchtext: any;
  status !:string;
  

  constructor(private taskservice : TaskService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tasks = this.taskservice.getTaskList();
  }

  deleteTask(taskID : number){
    this.taskservice.deleteTask(taskID)
    .subscribe(data=>{console.log(data);
                       this.loadData();},
                       error=>console.log(error))
    
  }
  searchByStatus(): void {
    this.taskservice.searchByStatus(this.status)
      .subscribe(
        data => {
          this.tasks = data;
          console.log(this.tasks);
        },
        error => {
          console.log(error);
        });
      }
 taskDetails(taskID :number){
   this.router.navigate(['details',taskID ]);
 } 
 updateTask(taskID :number){
   this.router.navigate(['update',taskID ]);
 }
}



