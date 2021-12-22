import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService{
    private baseUrl = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) { }

  createUser(User : Object): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`,User);
  }
      
    
  }
