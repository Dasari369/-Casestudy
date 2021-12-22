import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { TaskData } from './taskDataObj';

@Injectable({
    providedIn:'root'
})

export class TaskService{
    postUrl: string ="http://localhost:8080/newtask";
    httpOptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json','Authorization':'my-auth-token'
        })
    };
    
    constructor(private httpClient : HttpClient){ }

    createTask( TaskD : TaskData)
    {
        return this.httpClient.post(this.postUrl,TaskD,this.httpOptions);
    }

    
}


