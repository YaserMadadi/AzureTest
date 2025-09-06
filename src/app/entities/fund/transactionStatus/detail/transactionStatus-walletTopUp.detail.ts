
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { TransactionStatus, TransactionStatus_ServiceCollection } from '../../transactionStatus';
import { WalletTopUp, WalletTopUp_Builder } from '../../walletTopUp';
import { WalletTopUpEditUI } from '../../walletTopUp/edit/walletTopUp.edit'
import { WalletTopUpDeleteUI } from '../../walletTopUp/delete/walletTopUp.delete'
import { ClientWallet, ClientWallet_Service } from '../../clientWallet';
import { PaymentMethod, PaymentMethod_Service } from '../../paymentMethod';



@Component({
  selector: 'fund-transactionStatus-walletTopUp-detail',
  templateUrl: './transactionStatus-walletTopUp.detail.html',
  styleUrls: ['./transactionStatus-walletTopUp.detail.scss'],
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
export class TransactionStatus_WalletTopUp_DetailUI extends DetailUI<TransactionStatus, WalletTopUp> {

  constructor(private serviceCollection: TransactionStatus_ServiceCollection = inject(TransactionStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfWalletTopUp.bind(serviceCollection), inject(WalletTopUp_Builder));
    this.currentInstance = new WalletTopUp();
  }

  @Input()
  public set transactionStatus(value: TransactionStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.transactionStatus = { ...value };
    this.sourceInstance.transactionStatus = { ...value };
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet> = new ForeignkeyLinker<ClientWallet>(inject(ClientWallet_Service), true);

		public paymentMethodLinker: ForeignkeyLinker<PaymentMethod> = new ForeignkeyLinker<PaymentMethod>(inject(PaymentMethod_Service), true);

		

}
