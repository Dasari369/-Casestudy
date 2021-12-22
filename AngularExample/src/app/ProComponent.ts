import {Component} from "@angular/core";
@Component({
    selector:"pro-com",
    template:`
        <div *ngFor="let p of products">
        
        <img src="{{p.image}}" height="200">
        <h2> product:{{p.name}}</h2>
         <h3> price: {{p.price}}Rs</h3>
       
        </div>
    `
})
export class ProComponent{
    products=[
        {name:"Mobile",price:23000,image:"./assets/mobile.jpg" },
        {name:"Laptop",price:45000,image:"./assets/laptop.jpg"},
        {name:"Television",price:25000,image:"./assets/tv.jpeg"},
        {name:"EarBuds",price:10000,image:"./assets/earbuds.jpg"}
    ];
  

}

