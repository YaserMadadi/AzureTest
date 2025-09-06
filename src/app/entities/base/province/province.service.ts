

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Province, Province_Builder } from '.';

import { Country_Service } from '../country';


@Injectable({ providedIn: 'root' })
export class Province_Service extends Service<Province> implements IService<Province> {

  constructor() {
    super(Province.Info, inject(Province_Builder));
  }

  //#region Related Services
  
  public countryService: Country_Service = inject(Country_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Province> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Province[]> {
    return super.RetrieveAll();
  }

  override Save(province: Province): Observable<Province> {
    if (!Province.Validate(province)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(province);
    }
    return super.Save(province);
  }

  override SaveAttached(province: Province): Observable<Province> {
    if (!Province.Validate(province)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(province);
    }
    return super.SaveAttached(province);
  }

  override SaveCollection(provinceList: Province[]): Observable<Result> {
    return super.SaveCollection(provinceList);
  }

  override Delete(province: Province): Observable<boolean> {
    return super.Delete(province);
  }

  override Seek(province: Province = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Province[]> {
    return super.Seek(province); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(province: Province): Observable<Province> {
    return super.SeekLast(province);
  }

  override SeekByValue(value: string = ''): Observable<Province[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
