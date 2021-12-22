import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { TaskModel } from '../TaskModel';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tasks !: any;
  status !:string;

  constructor(private taskservice : TaskService, private router: Router) { }

  ngOnInit(): void {
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

      
}
