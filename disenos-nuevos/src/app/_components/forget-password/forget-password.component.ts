import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {


  validateForm!: FormGroup;

  public xportLabel: string | undefined;

  public indexLabel: any;

  constructor(
    private fb: FormBuilder
  ) { }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    
  }

  array = [{ image:  '../../../assets/illustration_num1.svg', name : 'Plataforma de recaudo electrónico ABT, Flexible, con múltiples medios de pago para gestionar los servicios de tu entidad.'},
  { image: '../../../assets/Illustration_num2.svg', name : 'Sistema integrado con la billetera electrónica, Core banking, sistemas de control de flota y sistema de información al usuario.'},
  { image: '../../../assets/illustrarion_num3.svg', name: 'Plataforma de recaudo electrónico ABT, Flexible, con múltiples medios de pago para gestionar los servicios de tu entidad.'},];
}


