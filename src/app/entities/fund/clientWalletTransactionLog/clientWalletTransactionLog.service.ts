

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '.';

import { ClientWallet_Service } from '../clientWallet';
import { TransactionType_Service } from '../transactionType';
import { TransactionStatus_Service } from '../transactionStatus';


@Injectable({ providedIn: 'root' })
export class ClientWalletTransactionLog_Service extends Service<ClientWalletTransactionLog> implements IService<ClientWalletTransactionLog> {

  constructor() {
    super(ClientWalletTransactionLog.Info, inject(ClientWalletTransactionLog_Builder));
  }

  //#region Related Services
  
  public clientWalletService: ClientWallet_Service = inject(ClientWallet_Service);

	public transactionTypeService: TransactionType_Service = inject(TransactionType_Service);

	public transactionStatusService: TransactionStatus_Service = inject(TransactionStatus_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ClientWalletTransactionLog> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ClientWalletTransactionLog[]> {
    return super.RetrieveAll();
  }

  override Save(clientWalletTransactionLog: ClientWalletTransactionLog): Observable<ClientWalletTransactionLog> {
    if (!ClientWalletTransactionLog.Validate(clientWalletTransactionLog)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientWalletTransactionLog);
    }
    return super.Save(clientWalletTransactionLog);
  }

  override SaveAttached(clientWalletTransactionLog: ClientWalletTransactionLog): Observable<ClientWalletTransactionLog> {
    if (!ClientWalletTransactionLog.Validate(clientWalletTransactionLog)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientWalletTransactionLog);
    }
    return super.SaveAttached(clientWalletTransactionLog);
  }

  override SaveCollection(clientWalletTransactionLogList: ClientWalletTransactionLog[]): Observable<Result> {
    return super.SaveCollection(clientWalletTransactionLogList);
  }

  override Delete(clientWalletTransactionLog: ClientWalletTransactionLog): Observable<boolean> {
    return super.Delete(clientWalletTransactionLog);
  }

  override Seek(clientWalletTransactionLog: ClientWalletTransactionLog = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ClientWalletTransactionLog[]> {
    return super.Seek(clientWalletTransactionLog); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(clientWalletTransactionLog: ClientWalletTransactionLog): Observable<ClientWalletTransactionLog> {
    return super.SeekLast(clientWalletTransactionLog);
  }

  override SeekByValue(value: string = ''): Observable<ClientWalletTransactionLog[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
