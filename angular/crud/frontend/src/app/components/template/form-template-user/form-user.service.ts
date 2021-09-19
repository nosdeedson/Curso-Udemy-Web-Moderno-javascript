import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormUserData } from './form-user-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormUserService {

  private _formUserServiceData = new BehaviorSubject<FormUserData>({
    labelBotao: '',
    corBotao: '',
    edicao: true,
    titulo: ''
  })
  constructor() { }

  get formUserData(): FormUserData{
    return this._formUserServiceData.value
  }

  set formUserData(formUserData: FormUserData){
    this._formUserServiceData.next(formUserData)
  }
}
