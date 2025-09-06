

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { PriceScope, PriceScope_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class PriceScope_Service extends Service<PriceScope> implements IService<PriceScope> {

  constructor() {
    super(PriceScope.Info, inject(PriceScope_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<PriceScope> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<PriceScope[]> {
    return super.RetrieveAll();
  }

  override Save(priceScope: PriceScope): Observable<PriceScope> {
    if (!PriceScope.Validate(priceScope)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(priceScope);
    }
    return super.Save(priceScope);
  }

  override SaveAttached(priceScope: PriceScope): Observable<PriceScope> {
    if (!PriceScope.Validate(priceScope)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(priceScope);
    }
    return super.SaveAttached(priceScope);
  }

  override SaveCollection(priceScopeList: PriceScope[]): Observable<Result> {
    return super.SaveCollection(priceScopeList);
  }

  override Delete(priceScope: PriceScope): Observable<boolean> {
    return super.Delete(priceScope);
  }

  override Seek(priceScope: PriceScope = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<PriceScope[]> {
    return super.Seek(priceScope); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(priceScope: PriceScope): Observable<PriceScope> {
    return super.SeekLast(priceScope);
  }

  override SeekByValue(value: string = ''): Observable<PriceScope[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
