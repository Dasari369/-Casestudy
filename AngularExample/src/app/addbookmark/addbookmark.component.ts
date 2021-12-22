import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { TaskModel } from '../TaskModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbookmark',
  templateUrl: './addbookmark.component.html',
  styleUrls: ['./addbookmark.component.css']
})
export class AddbookmarkComponent implements OnInit {

  bookMarked!:Boolean;
  taskID !:number;
  task !:TaskModel;

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.taskservice.addbookmark(this.taskID,this.bookMarked).subscribe(
      data => {
        this.task=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
