import { Component, OnInit } from '@angular/core';
import {Task} from "../model/task.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../services/task.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  public taskList: Task[] = [];
  public form: FormGroup;


  constructor(private taskService: TaskService, private fb: FormBuilder, private userService: UserService, private router: Router){
    this.createForm();
  }

  ngOnInit() {
    if(this.userService.getUserInMemory() === null || this.userService.getUserInMemory() === undefined){
      this.router.navigate([''],{replaceUrl:true})
    }

    console.log('user autenticado',this.userService.getUserInMemory())
    this.listTasks();
  }

  public save(){
    if(this.form.invalid){
      alert('O campo de descricao nao pode estar vazio')
      return
    }
    this.taskService.saveTask(this.form.value).subscribe(res =>{
      console.log(res)
      this.listTasks()
      this.form.reset()
    } )

  }

  public delete(task){
    this.taskService.deleteTask(task._id).subscribe(res=>{
      console.log(res)
      this.listTasks()
    },error1 => console.log(error1))
  }

  public finish(task){
    task.finished = task.finished ? false : true ;
    this.taskService.completeTask(task).subscribe(res=>{
      console.log(res)
      this.listTasks()
    },error1 => console.log(error1))
  }

  public createForm(){
    this.form = this.fb.group({
      description: ['',Validators.required],
      userId: [this.userService.getUserInMemory()]
    })
  }


  public listTasks(){
    this.taskService.listTasks().subscribe( res => {
      this.taskList = null;
      let tasks: Task[] = res
      this.taskList = res.slice(0).reverse();
    })

  }

  sair() {
    this.userService.logout();
    this.router.navigate([""])
  }
}
