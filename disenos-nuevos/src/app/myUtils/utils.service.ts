import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

   /* BehaviorSubject */
   sideBehavior : any;
   private subjectSidebar = new BehaviorSubject<any>('');
   subjectSidebarBehavior = this.subjectSidebar.asObservable();

  static FILTER = 'FILTER';
  static EDIT = 'EDIT';
  static DETAIL = 'DETAIL';
  static CHANGE_STATE = 'CHANGE-STATE';
  static CHANGE_STATE_ACCOUNT = 'CHANGE-STATE-ACCOUNT';
  static CONFIG = 'CONFIG';
  static ADD = 'ADD';
  static CREATE = 'CREATE';
  static VIEW = 'VIEW';
  static APPLICATION_JSON = 'application/json';
  static APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded';
  static HELP_TITLE_FILTER = 'Seleccione los filtros indicados';
  static HELP_MESSAGE_FILTER = 'y presione el botón “Buscar” para realizar la consulta.';
  static HELP_MESSAGE_FILTER_NOT_DATA = 'No hay resultados que coincidan con la búsqueda.';
  static MULTIPART_FORM_DATA = 'multipart/form-data;';
  successMessage = 'success';
  errorMessage = 'error';
  failMessage = 'fail';
  titleSuccessMessage = 'Exito';
  failNewRestore = 'Tiene un cambio de contraseña activo';
  valueDaysDifferenceMillis = 86400000;
  dateFormat = 'yyyy-MM-dd';
  errorGeneralMessage = 'No hubo comunicación con el servidor, revise su conexión a internet o llámenos a la línea de soporte.';
  errorLogin = 'Por favor verifique su usuario o contraseña y vuelva a intentarlo, si tiene problemas llámenos a la línea de soporte.';

  constructor() { }


  señalesBehavior(sideBehavior: any){
    this.sideBehavior = sideBehavior;
    this.subjectSidebar.next(sideBehavior);
  }
  
}
