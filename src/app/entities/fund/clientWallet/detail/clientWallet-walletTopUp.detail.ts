
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ClientWallet, ClientWallet_ServiceCollection } from '../../clientWallet';
import { WalletTopUp, WalletTopUp_Builder } from '../../walletTopUp';
import { WalletTopUpEditUI } from '../../walletTopUp/edit/walletTopUp.edit'
import { WalletTopUpDeleteUI } from '../../walletTopUp/delete/walletTopUp.delete'
import { PaymentMethod, PaymentMethod_Service } from '../../paymentMethod';
import { TransactionStatus, TransactionStatus_Service } from '../../transactionStatus';



@Component({
  selector: 'fund-clientWallet-walletTopUp-detail',
  templateUrl: './clientWallet-walletTopUp.detail.html',
  styleUrls: ['./clientWallet-walletTopUp.detail.scss'],
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
export class ClientWallet_WalletTopUp_DetailUI extends DetailUI<ClientWallet, WalletTopUp> {

  constructor(private serviceCollection: ClientWallet_ServiceCollection = inject(ClientWallet_ServiceCollection)) {
    super(serviceCollection.CollectionOfWalletTopUp.bind(serviceCollection), inject(WalletTopUp_Builder));
    this.currentInstance = new WalletTopUp();
  }

  @Input()
  public set clientWallet(value: ClientWallet) {
    this.masterInstance = { ...value };
    //this.currentInstance.clientWallet = { ...value };
    this.sourceInstance.clientWallet = { ...value };
  }

  public paymentMethodLinker: ForeignkeyLinker<PaymentMethod> = new ForeignkeyLinker<PaymentMethod>(inject(PaymentMethod_Service), true);

		public transactionStatusLinker: ForeignkeyLinker<TransactionStatus> = new ForeignkeyLinker<TransactionStatus>(inject(TransactionStatus_Service), true);

		

}
