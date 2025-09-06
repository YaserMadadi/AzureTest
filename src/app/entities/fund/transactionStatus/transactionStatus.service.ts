

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { TransactionStatus, TransactionStatus_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class TransactionStatus_Service extends Service<TransactionStatus> implements IService<TransactionStatus> {

  constructor() {
    super(TransactionStatus.Info, inject(TransactionStatus_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<TransactionStatus> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<TransactionStatus[]> {
    return super.RetrieveAll();
  }

  override Save(transactionStatus: TransactionStatus): Observable<TransactionStatus> {
    if (!TransactionStatus.Validate(transactionStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(transactionStatus);
    }
    return super.Save(transactionStatus);
  }

  override SaveAttached(transactionStatus: TransactionStatus): Observable<TransactionStatus> {
    if (!TransactionStatus.Validate(transactionStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(transactionStatus);
    }
    return super.SaveAttached(transactionStatus);
  }

  override SaveCollection(transactionStatusList: TransactionStatus[]): Observable<Result> {
    return super.SaveCollection(transactionStatusList);
  }

  override Delete(transactionStatus: TransactionStatus): Observable<boolean> {
    return super.Delete(transactionStatus);
  }

  override Seek(transactionStatus: TransactionStatus = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<TransactionStatus[]> {
    return super.Seek(transactionStatus); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(transactionStatus: TransactionStatus): Observable<TransactionStatus> {
    return super.SeekLast(transactionStatus);
  }

  override SeekByValue(value: string = ''): Observable<TransactionStatus[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
