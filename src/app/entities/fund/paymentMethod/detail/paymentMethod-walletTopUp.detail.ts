
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { PaymentMethod, PaymentMethod_ServiceCollection } from '../../paymentMethod';
import { WalletTopUp, WalletTopUp_Builder } from '../../walletTopUp';
import { WalletTopUpEditUI } from '../../walletTopUp/edit/walletTopUp.edit'
import { WalletTopUpDeleteUI } from '../../walletTopUp/delete/walletTopUp.delete'
import { ClientWallet, ClientWallet_Service } from '../../clientWallet';
import { TransactionStatus, TransactionStatus_Service } from '../../transactionStatus';



@Component({
  selector: 'fund-paymentMethod-walletTopUp-detail',
  templateUrl: './paymentMethod-walletTopUp.detail.html',
  styleUrls: ['./paymentMethod-walletTopUp.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    WalletTopUpEditUI,        
    WalletTopUpDeleteUI,
  ]
}) 
export class PaymentMethod_WalletTopUp_DetailUI extends DetailUI<PaymentMethod, WalletTopUp> {

  constructor(private serviceCollection: PaymentMethod_ServiceCollection = inject(PaymentMethod_ServiceCollection)) {
    super(serviceCollection.CollectionOfWalletTopUp.bind(serviceCollection), inject(WalletTopUp_Builder));
    this.currentInstance = new WalletTopUp();
  }

  @Input()
  public set paymentMethod(value: PaymentMethod) {
    this.masterInstance = { ...value };
    //this.currentInstance.paymentMethod = { ...value };
    this.sourceInstance.paymentMethod = { ...value };
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet> = new ForeignkeyLinker<ClientWallet>(inject(ClientWallet_Service), true);

		public transactionStatusLinker: ForeignkeyLinker<TransactionStatus> = new ForeignkeyLinker<TransactionStatus>(inject(TransactionStatus_Service), true);

		

}
