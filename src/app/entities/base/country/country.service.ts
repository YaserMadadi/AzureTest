

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Country, Country_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class Country_Service extends Service<Country> implements IService<Country> {

  constructor() {
    super(Country.Info, inject(Country_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Country> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Country[]> {
    return super.RetrieveAll();
  }

  override Save(country: Country): Observable<Country> {
    if (!Country.Validate(country)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(country);
    }
    return super.Save(country);
  }

  override SaveAttached(country: Country): Observable<Country> {
    if (!Country.Validate(country)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(country);
    }
    return super.SaveAttached(country);
  }

  override SaveCollection(countryList: Country[]): Observable<Result> {
    return super.SaveCollection(countryList);
  }

  override Delete(country: Country): Observable<boolean> {
    return super.Delete(country);
  }

  override Seek(country: Country = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Country[]> {
    return super.Seek(country); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(country: Country): Observable<Country> {
    return super.SeekLast(country);
  }

  override SeekByValue(value: string = ''): Observable<Country[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
