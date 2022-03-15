import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
