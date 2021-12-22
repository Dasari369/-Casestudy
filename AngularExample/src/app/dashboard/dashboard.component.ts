import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListTaskComponent } from '../list-task/list-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
