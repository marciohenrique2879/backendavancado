import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../model/task.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public login(user){
    return this.http.post(`${this.API}/login`,user);
  }

  cadastrarUsuario(user) {
    return this.http.post(`${this.API}/users`,user);
  }

  saveUserInMemory(id) {
    localStorage.setItem('userId', JSON.stringify(id));
  }

  logout() {
    localStorage.removeItem('userId');
  }

  getUserInMemory() {
   return localStorage.getItem('userId');
  }


}
