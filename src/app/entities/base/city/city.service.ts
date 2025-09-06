

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { City, City_Builder } from '.';

import { Province_Service } from '../province';


@Injectable({ providedIn: 'root' })
export class City_Service extends Service<City> implements IService<City> {

  constructor() {
    super(City.Info, inject(City_Builder));
  }

  //#region Related Services
  
  public provinceService: Province_Service = inject(Province_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<City> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<City[]> {
    return super.RetrieveAll();
  }

  override Save(city: City): Observable<City> {
    if (!City.Validate(city)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(city);
    }
    return super.Save(city);
  }

  override SaveAttached(city: City): Observable<City> {
    if (!City.Validate(city)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(city);
    }
    return super.SaveAttached(city);
  }

  override SaveCollection(cityList: City[]): Observable<Result> {
    return super.SaveCollection(cityList);
  }

  override Delete(city: City): Observable<boolean> {
    return super.Delete(city);
  }

  override Seek(city: City = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<City[]> {
    return super.Seek(city); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(city: City): Observable<City> {
    return super.SeekLast(city);
  }

  override SeekByValue(value: string = ''): Observable<City[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
