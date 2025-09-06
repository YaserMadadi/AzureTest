

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ClientWallet, ClientWallet_Builder } from '.';

import { Client_Service } from '../../base/client';


@Injectable({ providedIn: 'root' })
export class ClientWallet_Service extends Service<ClientWallet> implements IService<ClientWallet> {

  constructor() {
    super(ClientWallet.Info, inject(ClientWallet_Builder));
  }

  //#region Related Services
  
  public clientService: Client_Service = inject(Client_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ClientWallet> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ClientWallet[]> {
    return super.RetrieveAll();
  }

  override Save(clientWallet: ClientWallet): Observable<ClientWallet> {
    if (!ClientWallet.Validate(clientWallet)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientWallet);
    }
    return super.Save(clientWallet);
  }

  override SaveAttached(clientWallet: ClientWallet): Observable<ClientWallet> {
    if (!ClientWallet.Validate(clientWallet)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientWallet);
    }
    return super.SaveAttached(clientWallet);
  }

  override SaveCollection(clientWalletList: ClientWallet[]): Observable<Result> {
    return super.SaveCollection(clientWalletList);
  }

  override Delete(clientWallet: ClientWallet): Observable<boolean> {
    return super.Delete(clientWallet);
  }

  override Seek(clientWallet: ClientWallet = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ClientWallet[]> {
    return super.Seek(clientWallet); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(clientWallet: ClientWallet): Observable<ClientWallet> {
    return super.SeekLast(clientWallet);
  }

  override SeekByValue(value: string = ''): Observable<ClientWallet[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
