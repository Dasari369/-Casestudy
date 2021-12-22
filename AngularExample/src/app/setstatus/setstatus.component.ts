import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { Router } from '@angular/router';
import { TaskModel } from '../TaskModel';

@Component({
  selector: 'app-setstatus',
  templateUrl: './setstatus.component.html',
  styleUrls: ['./setstatus.component.css']
})
export class SetstatusComponent implements OnInit {

  taskID !:number;
  task !:TaskModel;
  status !: string;

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.taskservice.setstatus(this.taskID,this.status).subscribe(
      data => {
        this.task=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
