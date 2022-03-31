import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  KEY = 'auth';

  constructor(private router: Router) {
  }

  getToken() {
    const auth = this.getAuth();
    if (auth) {
      return auth.token;
    }
  }

  setToken(token: any) {
    const auth = this.getAuth();
    if (auth) {
      auth.token = token;
      this.setAuth(auth);
    }
  }

  getAuth() {
    return JSON.parse(localStorage.getItem(this.KEY)!);
  }

  setAuth(data: any) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  closeSession() {
    localStorage.removeItem('auth');
    localStorage.removeItem('selectedCompany');
    localStorage.removeItem('actionsByModules');
    localStorage.removeItem('actions');
    localStorage.removeItem('pathActive');
    localStorage.removeItem('subActions');
    localStorage.removeItem('entities');
    localStorage.removeItem('selectedEntity');
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 500);
  }

}
