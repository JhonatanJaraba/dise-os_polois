import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './_components/forget-password/forget-password.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RestorePasswordComponent } from './_components/restore-password/restore-password.component';
import { SideBarComponent } from './_components/side-bar/side-bar.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "forget", component: ForgetPasswordComponent},
  {path: "restore", component: RestorePasswordComponent},
  {path: "side-bar", component: SideBarComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
