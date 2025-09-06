

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { WalletTopUp, WalletTopUp_Builder } from '.';

import { ClientWallet_Service } from '../clientWallet';
import { PaymentMethod_Service } from '../paymentMethod';
import { TransactionStatus_Service } from '../transactionStatus';


@Injectable({ providedIn: 'root' })
export class WalletTopUp_Service extends Service<WalletTopUp> implements IService<WalletTopUp> {

  constructor() {
    super(WalletTopUp.Info, inject(WalletTopUp_Builder));
  }

  //#region Related Services
  
  public clientWalletService: ClientWallet_Service = inject(ClientWallet_Service);

	public paymentMethodService: PaymentMethod_Service = inject(PaymentMethod_Service);

	public transactionStatusService: TransactionStatus_Service = inject(TransactionStatus_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<WalletTopUp> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<WalletTopUp[]> {
    return super.RetrieveAll();
  }

  override Save(walletTopUp: WalletTopUp): Observable<WalletTopUp> {
    if (!WalletTopUp.Validate(walletTopUp)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(walletTopUp);
    }
    return super.Save(walletTopUp);
  }

  override SaveAttached(walletTopUp: WalletTopUp): Observable<WalletTopUp> {
    if (!WalletTopUp.Validate(walletTopUp)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(walletTopUp);
    }
    return super.SaveAttached(walletTopUp);
  }

  override SaveCollection(walletTopUpList: WalletTopUp[]): Observable<Result> {
    return super.SaveCollection(walletTopUpList);
  }

  override Delete(walletTopUp: WalletTopUp): Observable<boolean> {
    return super.Delete(walletTopUp);
  }

  override Seek(walletTopUp: WalletTopUp = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<WalletTopUp[]> {
    return super.Seek(walletTopUp); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(walletTopUp: WalletTopUp): Observable<WalletTopUp> {
    return super.SeekLast(walletTopUp);
  }

  override SeekByValue(value: string = ''): Observable<WalletTopUp[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
