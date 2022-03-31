import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard.service';
import { MainGuardService } from './guard/main-guard.service';
import { AuthComponent } from './modules/auth/auth/auth.component';
import { MainComponent } from './modules/main/main/main.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';



const routes: Routes = [
  {
    path: "", 
    component: AuthComponent, 
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "main", 
    component: MainComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService],
    loadChildren:() => import('./modules/main/main.module').then(m => m.MainModule)
  },


  // {
  //   path: "polis", 
  //   component: AuthComponent,
  //   loadChildren:() => import('./modules/main/main.module').then(m => m.MainModule)
  // },
  // {path: "forget", component: ForgetPasswordComponent},
  // {path: "restore", component: RestorePasswordComponent},
  // {path: "side-bar", component: SideBarComponent},
  // {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
