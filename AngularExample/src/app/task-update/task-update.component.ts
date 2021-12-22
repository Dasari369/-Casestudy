import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TaskModel } from '../TaskModel';
import { TaskService } from '../task-serv.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {


  taskID !:number;
  task !:TaskModel;

  constructor(private route:ActivatedRoute,
    private router:Router, private taskservice : TaskService ) { }

  ngOnInit() {
    this.task = new TaskModel();
    this.taskID= this.route.snapshot.params['taskID'];
    this.taskservice.getTask(this.taskID)
    .subscribe(data=>{
      console.log(data);
      this.task=data;
    },error=>console.log(error))
  }
  updateTasks(){
    this.taskservice.updateTask(this.taskID , this.task)
    .subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new TaskModel();
    this.gotoList();
  }

  onSubmit(){
    this.updateTasks();
  }
  gotoList(){
    this.router.navigate(['/tasks'])
  }

 

 

}
