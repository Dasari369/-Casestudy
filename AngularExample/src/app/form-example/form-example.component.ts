import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
     name !:string;

     onSubmit(value:any){
       this.name=value.userName;
       console.log(value);
     }
  constructor() { }

  ngOnInit(): void {
  }

}
