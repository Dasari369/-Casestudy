import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { Router } from '@angular/router';
import { TaskModel } from '../TaskModel';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {

  notes!:string;
  taskID !:number;
  task !:TaskModel;

  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.taskservice.addnotes(this.taskID,this.notes).subscribe(
      data => {
        this.task=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
