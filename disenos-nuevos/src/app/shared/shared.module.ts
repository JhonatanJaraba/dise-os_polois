import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AntDesignModule } from '../ant-design.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule,
    RouterModule,
  ],
  exports:[
    SideBarComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
