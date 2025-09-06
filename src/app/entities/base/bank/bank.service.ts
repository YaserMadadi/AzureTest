

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Bank, Bank_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class Bank_Service extends Service<Bank> implements IService<Bank> {

  constructor() {
    super(Bank.Info, inject(Bank_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Bank> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Bank[]> {
    return super.RetrieveAll();
  }

  override Save(bank: Bank): Observable<Bank> {
    if (!Bank.Validate(bank)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bank);
    }
    return super.Save(bank);
  }

  override SaveAttached(bank: Bank): Observable<Bank> {
    if (!Bank.Validate(bank)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bank);
    }
    return super.SaveAttached(bank);
  }

  override SaveCollection(bankList: Bank[]): Observable<Result> {
    return super.SaveCollection(bankList);
  }

  override Delete(bank: Bank): Observable<boolean> {
    return super.Delete(bank);
  }

  override Seek(bank: Bank = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Bank[]> {
    return super.Seek(bank); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(bank: Bank): Observable<Bank> {
    return super.SeekLast(bank);
  }

  override SeekByValue(value: string = ''): Observable<Bank[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
