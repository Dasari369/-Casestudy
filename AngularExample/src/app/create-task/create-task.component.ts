import { Component, OnInit } from '@angular/core';
import { TaskService } from './TaskService';
import { TaskData } from './taskDataObj';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  TaskDat!:TaskData;


  constructor(private TaskService:TaskService) { }

  ngOnInit() {
  }

  onSubmit(value:any){
    this.TaskDat = new TaskData();
    this.TaskDat.taskID = value.taskid;
    this.TaskDat.ownerID=value.ownerid;
    this.TaskDat.creatorID=value.creatorid;
    this.TaskDat.tname = value.taskname;
    this.TaskDat.desc= value.taskdesc;
    this.TaskDat.status=value.taskstatus;
    this.TaskDat.priority = value.priority;
    this.TaskDat.notes= value.tnotes;
    this.TaskDat.bookMarked = value.bookmark;
    this.TaskDat.createdon = value.created;
    this.TaskDat.statusChangedOn=value.changed;
    this.TaskService.createTask(this.TaskDat).subscribe(response => {console.log(response);});
    
  }

}
