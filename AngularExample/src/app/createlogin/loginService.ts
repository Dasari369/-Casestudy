import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginService{
    private baseUrl = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) { }

  validate(name: string,password:string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${name}/${password}`);
  }
      
    
  }

