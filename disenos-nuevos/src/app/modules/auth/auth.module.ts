import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RestorePasswordComponent } from 'src/app/_components/restore-password/restore-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AntDesignModule } from 'src/app/ant-design.module';
import { LoginComponent } from 'src/app/_components/login/login.component';
import { ForgetPasswordComponent } from 'src/app/_components/forget-password/forget-password.component';
import { HomeComponent } from 'src/app/_components/home/home.component';


@NgModule({
  declarations: [
    AuthComponent,
    RestorePasswordComponent,
    LoginComponent,
    ForgetPasswordComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AntDesignModule
  ]
})
export class AuthModule { }
