import{Component} from "@angular/core"
@Component({
     selector:"arr-com",
     template:`<div>
     <h1>Colors</h1>
     <ul *ngFor="let c of colors">
     <li> {{c}}</li>
     </ul>

     </div>
     `
})
export class ArrayComponent
{
    colors = ["Red","Green","Blue","Pink","Yellow"]
}