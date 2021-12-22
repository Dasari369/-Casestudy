import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { TaskModel } from '../TaskModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {

  taskID !:number;
  task!:TaskModel;
  constructor(private taskservice:TaskService,private router:Router) { }

  ngOnInit(): void {
  }
  searchById(): void {
    this.taskservice.searchById(this.taskID)
      .subscribe(
        data => {
          this.task = data;
          console.log(this.task);
        },
        error => {
          console.log(error);
        });
      }
}
