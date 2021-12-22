import { Component, OnInit } from '@angular/core';
import { DataService } from './Data-Service';
import { postData,respData } from './postdataObj';

@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit 
{
  data !:string;
  postData!:postData;
  resultData !:respData;
  public users:any=[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  sendData(){
    this.postData = new postData();
    this.postData.body="test data2";
    this.postData.title="Some Title";
    this.postData.userId=13;
    this.dataService.addPost(this.postData)
    console.log(this.postData);
   // .subscribe((res : respData)  =>{
    //  this.resultData = res;
    //  console.log(this.resultData.id);
    //  this.data = this.resultData.id+ "-"+this.resultData.title;


  //  });
  }

}
