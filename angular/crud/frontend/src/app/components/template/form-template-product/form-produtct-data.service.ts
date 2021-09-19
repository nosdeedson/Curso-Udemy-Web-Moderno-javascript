import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormProductData } from './form-product/form-product-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormProdutctDataService {

  private _formProductData = new BehaviorSubject<FormProductData>({
    titulo: '',
    botaoCor: '',
    botaoLabel: '',
    edicao: true
  })
  constructor() { }

  get formProductData() : FormProductData{
    return this._formProductData.value;
  }

  set formProductData(formProductData: FormProductData){
    this._formProductData.next(formProductData);
  }

}
