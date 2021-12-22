import{Component} from "@angular/core"
@Component({
    selector:"my-pro",
    template:`
       <div>
       <h1>Product list</h1>
       <ul *ngFor="let p of products">
       <li>{{p.name}}</li>
       </ul>
       </div>
    `
    
})
export class Product{
    products=[
        {name:"Air conditioner",price:75000},
        {name:"Washing machine",price:50000},
        {name:"Fridge",price:30000},
        {name:"Cooler",price:35000},
        {name:"MicroOven",price:15000},
        {name:"Water Purifier",price:9000}
];
}