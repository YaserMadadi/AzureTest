

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderWallet, ProviderWallet_Builder } from '.';

import { Provider_Service } from '../../base/provider';


@Injectable({ providedIn: 'root' })
export class ProviderWallet_Service extends Service<ProviderWallet> implements IService<ProviderWallet> {

  constructor() {
    super(ProviderWallet.Info, inject(ProviderWallet_Builder));
  }

  //#region Related Services
  
  public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderWallet> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderWallet[]> {
    return super.RetrieveAll();
  }

  override Save(providerWallet: ProviderWallet): Observable<ProviderWallet> {
    if (!ProviderWallet.Validate(providerWallet)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerWallet);
    }
    return super.Save(providerWallet);
  }

  override SaveAttached(providerWallet: ProviderWallet): Observable<ProviderWallet> {
    if (!ProviderWallet.Validate(providerWallet)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerWallet);
    }
    return super.SaveAttached(providerWallet);
  }

  override SaveCollection(providerWalletList: ProviderWallet[]): Observable<Result> {
    return super.SaveCollection(providerWalletList);
  }

  override Delete(providerWallet: ProviderWallet): Observable<boolean> {
    return super.Delete(providerWallet);
  }

  override Seek(providerWallet: ProviderWallet = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderWallet[]> {
    return super.Seek(providerWallet); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerWallet: ProviderWallet): Observable<ProviderWallet> {
    return super.SeekLast(providerWallet);
  }

  override SeekByValue(value: string = ''): Observable<ProviderWallet[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
