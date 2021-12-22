import { Component } from "@angular/core";
@Component({
    selector:"user-com",
    template:`
    <div>
     <h2> Users List</h2>
    </div>
    <ul *ngFor="let user of users">
    <li>{{user.name}}</li>
    </ul>
    `
})


export class User{
    users=[
        { name:"Stefen"},
        {name:"Rebecca"},
        {name:"Damon"},
        {name:"Elena"},
        {name:"Klaus"}

    ];
}