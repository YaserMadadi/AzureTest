

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ServicePrice, ServicePrice_Builder } from '.';

import { PriceScope_Service } from '../priceScope';
import { ProviderService_Service } from '../providerService';


@Injectable({ providedIn: 'root' })
export class ServicePrice_Service extends Service<ServicePrice> implements IService<ServicePrice> {

  constructor() {
    super(ServicePrice.Info, inject(ServicePrice_Builder));
  }

  //#region Related Services
  
  public priceScopeService: PriceScope_Service = inject(PriceScope_Service);

	public providerServiceService: ProviderService_Service = inject(ProviderService_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ServicePrice> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ServicePrice[]> {
    return super.RetrieveAll();
  }

  override Save(servicePrice: ServicePrice): Observable<ServicePrice> {
    if (!ServicePrice.Validate(servicePrice)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(servicePrice);
    }
    return super.Save(servicePrice);
  }

  override SaveAttached(servicePrice: ServicePrice): Observable<ServicePrice> {
    if (!ServicePrice.Validate(servicePrice)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(servicePrice);
    }
    return super.SaveAttached(servicePrice);
  }

  override SaveCollection(servicePriceList: ServicePrice[]): Observable<Result> {
    return super.SaveCollection(servicePriceList);
  }

  override Delete(servicePrice: ServicePrice): Observable<boolean> {
    return super.Delete(servicePrice);
  }

  override Seek(servicePrice: ServicePrice = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ServicePrice[]> {
    return super.Seek(servicePrice); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(servicePrice: ServicePrice): Observable<ServicePrice> {
    return super.SeekLast(servicePrice);
  }

  override SeekByValue(value: string = ''): Observable<ServicePrice[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
