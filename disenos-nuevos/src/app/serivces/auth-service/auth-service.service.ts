import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginServiceService } from '../login-service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private http: HttpClient, private authService: LoginServiceService) { }

  public getParams(params: any) {
    return new HttpParams({
      fromObject: params,
    });
  }

  public async post(
    endPoint: any,
    params: any,
    contentType = 'application/x-www-form-urlencoded'
  ) {
    let response;
    try {
      response = await this.http
        .post(endPoint, params, this.getHeaders(contentType))
        .toPromise().catch(e => {
          return this.verifyClientsErrorStatus(this.error(), e);
        });
      response.showAlert = response.error === undefined;
    } catch (e) {
      response = this.verifyClientsErrorStatus(this.error(), e);
    }
    return this.saveToken(response);
  }

  verifyClientsErrorStatus(response: any, err: any) {
    response.showAlert = err.status !== 401;
    response.error = err.status === 0 ? undefined : true;
    return response;
  }

  private error() {
    return {
      status: 'fail',
      message: 'No hubo comunicación con el servidor, revise su conexión a internet o llámenos a la línea de soporte.',
      showAlert: true
    };
  }

  private getHeaders(contentType: any) {
    const header : any = {};
    header['Content-Type'] = contentType;
    const auth = this.authService.getAuth();
    if (auth) {
      header['username'] = auth.user.username;
    }
    return {headers: header};
  }

  saveToken(response: any) {
    if (response) {
      if (response.status === 'success' && response.data.token) {
        this.authService.setToken(response.data.token);
      }
    }
    return response;
  }

  public async authenticateUser(user: any, password: any) {
    return await this.post(
      `${environment.api}users/authenticate`,
      this.getParams({user: user, password: password})
    );
  }
  
}
