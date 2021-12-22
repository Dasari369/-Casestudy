
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  form: any;
  tid !:number;
  oid !:number;
  cid !:number;
  taskname !:string;
  description !:string;
  status !: string;
  priority !: string;
  notes !: string;
  bookmark !:boolean;
  createdon !: Date;
  changedon !: Date;



  onSubmit(value:any){
    this.tid=value.taskid;
    this.oid=value.ownerid;
    this.cid=value.creatorid;
    this.taskname = value.taskname;
    this.description = value.taskdesc;
    this.status=value.taskstatus;
    this.priority = value.priority;
    this.notes= value.tnotes;
    this.bookmark = value.bookmark;
    this.createdon = value.created;
    this.changedon=value.changed;

    console.log(value);
  }

 

  ngOnInit(){
  }

}
