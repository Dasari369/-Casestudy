import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { Router } from '@angular/router';
import { TaskModel } from '../TaskModel';

@Component({
  selector: 'app-set-priority',
  templateUrl: './set-priority.component.html',
  styleUrls: ['./set-priority.component.css']
})
export class SetPriorityComponent implements OnInit {
  taskID !:number;
  task !:TaskModel;
  priority !: string;

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.taskservice.setpriority(this.taskID,this.priority).subscribe(
      data => {
        this.task=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  

}
