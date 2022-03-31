import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from 'src/app/_components/forget-password/forget-password.component';
import { HomeComponent } from 'src/app/_components/home/home.component';
import { LoginComponent } from 'src/app/_components/login/login.component';
import { RestorePasswordComponent } from 'src/app/_components/restore-password/restore-password.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"restore",
    component: RestorePasswordComponent
  },
  {
    path:"forget",
    component: ForgetPasswordComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"",
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:"",
    redirectTo:'/restore',
    pathMatch:'full'
  },
  {
    path:"",
    redirectTo:'/forget',
    pathMatch:'full'
  },
  {
    path:"",
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
