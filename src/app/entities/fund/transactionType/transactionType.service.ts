

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { TransactionType, TransactionType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class TransactionType_Service extends Service<TransactionType> implements IService<TransactionType> {

  constructor() {
    super(TransactionType.Info, inject(TransactionType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<TransactionType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<TransactionType[]> {
    return super.RetrieveAll();
  }

  override Save(transactionType: TransactionType): Observable<TransactionType> {
    if (!TransactionType.Validate(transactionType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(transactionType);
    }
    return super.Save(transactionType);
  }

  override SaveAttached(transactionType: TransactionType): Observable<TransactionType> {
    if (!TransactionType.Validate(transactionType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(transactionType);
    }
    return super.SaveAttached(transactionType);
  }

  override SaveCollection(transactionTypeList: TransactionType[]): Observable<Result> {
    return super.SaveCollection(transactionTypeList);
  }

  override Delete(transactionType: TransactionType): Observable<boolean> {
    return super.Delete(transactionType);
  }

  override Seek(transactionType: TransactionType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<TransactionType[]> {
    return super.Seek(transactionType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(transactionType: TransactionType): Observable<TransactionType> {
    return super.SeekLast(transactionType);
  }

  override SeekByValue(value: string = ''): Observable<TransactionType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
