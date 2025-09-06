
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { PaymentMethod } from '.';
import { WalletTopUp, WalletTopUp_Builder } from '../walletTopUp';


@Injectable({ providedIn: 'root' })
export class PaymentMethod_ServiceCollection extends ServiceCollection<PaymentMethod> implements IServiceCollection<PaymentMethod> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfWalletTopUp(paymentMethod_id: number, walletTopUp: WalletTopUp = WalletTopUp_Builder.BuildSeekInstance()): Observable<WalletTopUp[]> {
    return super.CollectionOf<WalletTopUp>(new PaymentMethod(paymentMethod_id), walletTopUp);
  }

	//#endregion
}
