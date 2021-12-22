import { Injectable } from "@angular/core";
@Injectable({

    providedIn: "root"
    
    })

export class MyService{
    getName():string{
        return "abc";
    }
    getNumber():number{
        return 10+20;
    }
}