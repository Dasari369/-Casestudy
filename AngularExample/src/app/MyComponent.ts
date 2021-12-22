import{Component} from "@angular/core";
import { MyService } from "./MyService";

@Component({
    selector:"my-com",
    template:`
       <div>
       <h1>Welcome to sonata {{name}}</h1>
       <h2>{{id}}</h2>
        <ul *ngFor="let s of streams">
       <li>{{s}}</li>
       </ul> 
       </div>
       `
})
export class MyComponent {
       name:string;
       id:number;
       streams = ["Open Source","Microsoft","DA","Testing"];
       constructor(private sr: MyService)
       {
            this.name= sr.getName();
            this.id=sr.getNumber();
       }
}