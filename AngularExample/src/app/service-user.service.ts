import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceUser{

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(userID  : number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${userID}`, { responseType: 'text' });
  }

  getTaskUserList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }
}