import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute){
    this.createForm();
  }

  ngOnInit() {
    if(this.userService.getUserInMemory() !== null && this.userService.getUserInMemory() !== undefined){
      this.router.navigate(['/task'],{replaceUrl:true})
    }
    console.log('user autenticado',this.userService.getUserInMemory())
  }

  public cadastrar(){
    if(this.form.invalid){
      alert('Todos os campos sao obrigatorios!')
      return
    }
    this.userService.cadastrarUsuario(this.form.value).subscribe(
      (user: User) => {
        console.log('user',user)
        if(user == null){
          alert('Ocorreu um erro')
        }
        alert('Usuario Salvo com Sucesso')
          this.router.navigate(['']);

      },error1 => {
        console.log(error1)
        alert(error1)
      });
  }

  public createForm(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      name: ['',Validators.required]

    })
  }

}
