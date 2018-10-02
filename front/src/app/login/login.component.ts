import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {User} from "../model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute){
    this.createForm();
  }

  ngOnInit() {
    let a =
    console.log('user autenticado',this.userService.getUserInMemory())

    if(this.userService.getUserInMemory() !== null && this.userService.getUserInMemory() !== undefined){
      this.router.navigate(['/task'],{replaceUrl:true})
    }
    console.log('user autenticado',this.userService.getUserInMemory())
  }

  public login(){
    this.userService.login(this.form.value).subscribe(
      (user: User) => {
        console.log('user',user)
        if(user == null){
          alert('Credenciais Invalidas')
        }
          this.userService.saveUserInMemory(user['id'])
          this.router.navigate(['/task'], {replaceUrl: true});
        },error1 => alert('Credenciais Invalidas'));
  }

  public createForm(){
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

}
