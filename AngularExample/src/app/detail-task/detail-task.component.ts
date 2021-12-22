import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-serv.service';
import { TaskModel } from '../TaskModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {

  taskID !:number;
  task !:TaskModel;

  constructor(private route:ActivatedRoute,
    private router:Router, private taskservice : TaskService) { }

   ngOnInit() {
     this.task=new TaskModel();
     this.taskID = this.route.snapshot.params['taskID'];
     this.taskservice.getTask(this.taskID)
     .subscribe(data=>{
       console.log(data);
       this.task=data;      
     },error=>console.log(error));
   }
 
   list(){
    this.router.navigate(['/tasks'])
   } 
 }
 


