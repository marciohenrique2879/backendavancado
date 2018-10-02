import {LoginComponent} from "./login/login.component";
import {TasksComponent} from "./tasks/tasks.component";
import {RegisterComponent} from "./register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'task', component: TasksComponent},
  {path: 'register', component: RegisterComponent}
  ];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
