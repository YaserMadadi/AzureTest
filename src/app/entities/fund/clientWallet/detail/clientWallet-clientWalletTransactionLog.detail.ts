
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ClientWallet, ClientWallet_ServiceCollection } from '../../clientWallet';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '../../clientWalletTransactionLog';
import { ClientWalletTransactionLogEditUI } from '../../clientWalletTransactionLog/edit/clientWalletTransactionLog.edit'
import { ClientWalletTransactionLogDeleteUI } from '../../clientWalletTransactionLog/delete/clientWalletTransactionLog.delete'
import { TransactionType, TransactionType_Service } from '../../transactionType';
import { TransactionStatus, TransactionStatus_Service } from '../../transactionStatus';



@Component({
  selector: 'fund-clientWallet-clientWalletTransactionLog-detail',
  templateUrl: './clientWallet-clientWalletTransactionLog.detail.html',
  styleUrls: ['./clientWallet-clientWalletTransactionLog.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ClientWalletTransactionLogEditUI,        
    ClientWalletTransactionLogDeleteUI,
  ]
}) 
export class ClientWallet_ClientWalletTransactionLog_DetailUI extends DetailUI<ClientWallet, ClientWalletTransactionLog> {

  constructor(private serviceCollection: ClientWallet_ServiceCollection = inject(ClientWallet_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientWalletTransactionLog.bind(serviceCollection), inject(ClientWalletTransactionLog_Builder));
    this.currentInstance = new ClientWalletTransactionLog();
  }

  @Input()
  public set clientWallet(value: ClientWallet) {
    this.masterInstance = { ...value };
    //this.currentInstance.clientWallet = { ...value };
    this.sourceInstance.clientWallet = { ...value };
  }

  public transactionTypeLinker: ForeignkeyLinker<TransactionType> = new ForeignkeyLinker<TransactionType>(inject(TransactionType_Service), true);

		public transactionStatusLinker: ForeignkeyLinker<TransactionStatus> = new ForeignkeyLinker<TransactionStatus>(inject(TransactionStatus_Service), true);

		

}
