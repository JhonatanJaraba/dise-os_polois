import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../serivces/auth-service/auth-service.service';
import { UtilsService } from '../../myUtils/utils.service';
import { LoginServiceService } from '../../serivces/login-service/login-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  passwordVisible = false;
  password?: string;
  errorMensaje: string | undefined;
  notifyMensaje: string | undefined;

  async submitForm(template: TemplateRef<{}>) {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const resp = await this.api.authenticateUser(this.validateForm.value.userName, this.validateForm.value.password);
      switch (resp.status) {
        case this.utils.successMessage:
          //resp.data.user.password = Md5.init(resp.data.user.password);
          this.authService.setAuth(resp.data);
          await this.continue();
          break;
        case this.utils.errorMessage:
            this.errorMensaje = this.utils.errorLogin;
            this.notifyMensaje = 'Error';
            this.notification.template(template);
            break;
        case 'fail':
          this.errorMensaje = resp.message;
          this.notifyMensaje = 'Fail';
          this.notification.template(template);
          break;
        default:
            //this.setError(this.utils.errorGeneralMessage);
            break;
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  async continue() {
    await this.router.navigateByUrl('/main');
  }

  constructor(
    private fb: FormBuilder,
    private api: AuthServiceService,
    private utils: UtilsService,
    private authService: LoginServiceService,
    private notification: NzNotificationService,
    private router: Router,
    ) { }

    ngOnInit(): void {
      this.validateForm = this.fb.group({
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      });
    }
  
    array = ['Plataforma de recaudo electrónico ABT, Flexible, con múltiples medios de pago para gestionar los servicios de tu entidad.',
    'Sistema integrado con la billetera electrónica, Core banking, sistemas de control de flota y sistema de información al usuario.',
    'Plataforma de recaudo electrónico ABT, Flexible, con múltiples medios de pago para gestionar los servicios de tu entidad.',];


}
