import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../model/task.model";
import {map} from "rxjs/operators";
import {UserService} from "./user.service";



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly API: string = 'http://localhost:8080'

  constructor(private http: HttpClient, private userService: UserService) { }

  public listTasks(): Observable<Task[]>{
    let id = this.userService.getUserInMemory();
    if(id === null) return
    return this.http.get<Task[]>(`${this.API}/tasks/${id}`);
  }

  public saveTask(task){
    return this.http.post(`${this.API}/tasks`,task)
  }

  public completeTask(task){
    return this.http.put(`${this.API}/tasks`,task)
  }

  public deleteTask(id){
    return this.http.delete(`${this.API}/tasks/${id}`)
  }

}
