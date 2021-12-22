import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { Router } from '@angular/router';
import { TaskModel } from '../TaskModel';

@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent implements OnInit {

  ownerID !: number;
  taskID !:number;
  task !:TaskModel;

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.taskservice.assignTask(this.taskID,this.ownerID).subscribe(
      data => {
        this.task=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
