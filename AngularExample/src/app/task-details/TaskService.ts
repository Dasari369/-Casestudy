import { Injectable } from "@angular/core";
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
import {ITask} from './task'
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TaskService{
     baseUrl: string ="http://localhost:8080/tasks";
    constructor(private http:HttpClient) { }

    getTasks(): Observable<ITask[]>
    {
        return this.http.get<ITask[]>(this.baseUrl);
    }
}