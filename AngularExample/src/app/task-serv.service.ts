import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private httpClient: HttpClient) { }

  getTask(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createTask(Task : Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, Task);
  }

  updateTask(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTask(taskID : number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${taskID }`, { responseType: 'text' });
  }

  getTaskList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  searchByStatus(status:string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/status/${status}`);
  }

  searchById(taskID : number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${taskID}`);
  }
  addbookmark(taskID:number,bookMarked:Boolean): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/${taskID}/bookmark/${bookMarked}`)
  }
  addnotes(taskID:number,notes:string): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/${taskID}/notes/${notes}`)
  }
  setpriority(taskID:number,priority:string): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/${taskID}/${priority}`)
  }
  setstatus(taskID:number,status:string): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/${taskID}/status/${status}`)
  }
  assignTask(taskID:number, ownerID:number): Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/${taskID}/user/${ownerID}`)
  }

  

}