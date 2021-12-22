import { Component, OnInit } from '@angular/core';
import { TaskService } from './TaskService';
import { ITask } from './task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  public tasks! :ITask[];

  constructor(private taskservice:TaskService) { }

  ngOnInit(){
    this.taskservice.getTasks().subscribe(data => this.tasks = data)
    
  }

}
