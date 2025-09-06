

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderPayOut, ProviderPayOut_Builder } from '.';

import { Provider_Service } from '../../base/provider';
import { TransactionStatus_Service } from '../transactionStatus';


@Injectable({ providedIn: 'root' })
export class ProviderPayOut_Service extends Service<ProviderPayOut> implements IService<ProviderPayOut> {

  constructor() {
    super(ProviderPayOut.Info, inject(ProviderPayOut_Builder));
  }

  //#region Related Services
  
  public providerService: Provider_Service = inject(Provider_Service);

	public transactionStatusService: TransactionStatus_Service = inject(TransactionStatus_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderPayOut> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderPayOut[]> {
    return super.RetrieveAll();
  }

  override Save(providerPayOut: ProviderPayOut): Observable<ProviderPayOut> {
    if (!ProviderPayOut.Validate(providerPayOut)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerPayOut);
    }
    return super.Save(providerPayOut);
  }

  override SaveAttached(providerPayOut: ProviderPayOut): Observable<ProviderPayOut> {
    if (!ProviderPayOut.Validate(providerPayOut)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerPayOut);
    }
    return super.SaveAttached(providerPayOut);
  }

  override SaveCollection(providerPayOutList: ProviderPayOut[]): Observable<Result> {
    return super.SaveCollection(providerPayOutList);
  }

  override Delete(providerPayOut: ProviderPayOut): Observable<boolean> {
    return super.Delete(providerPayOut);
  }

  override Seek(providerPayOut: ProviderPayOut = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderPayOut[]> {
    return super.Seek(providerPayOut); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerPayOut: ProviderPayOut): Observable<ProviderPayOut> {
    return super.SeekLast(providerPayOut);
  }

  override SeekByValue(value: string = ''): Observable<ProviderPayOut[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
