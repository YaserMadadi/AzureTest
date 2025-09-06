
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { TransactionStatus, TransactionStatus_ServiceCollection } from '../../transactionStatus';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '../../clientWalletTransactionLog';
import { ClientWalletTransactionLogEditUI } from '../../clientWalletTransactionLog/edit/clientWalletTransactionLog.edit'
import { ClientWalletTransactionLogDeleteUI } from '../../clientWalletTransactionLog/delete/clientWalletTransactionLog.delete'
import { ClientWallet, ClientWallet_Service } from '../../clientWallet';
import { TransactionType, TransactionType_Service } from '../../transactionType';



@Component({
  selector: 'fund-transactionStatus-clientWalletTransactionLog-detail',
  templateUrl: './transactionStatus-clientWalletTransactionLog.detail.html',
  styleUrls: ['./transactionStatus-clientWalletTransactionLog.detail.scss'],
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
export class TransactionStatus_ClientWalletTransactionLog_DetailUI extends DetailUI<TransactionStatus, ClientWalletTransactionLog> {

  constructor(private serviceCollection: TransactionStatus_ServiceCollection = inject(TransactionStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientWalletTransactionLog.bind(serviceCollection), inject(ClientWalletTransactionLog_Builder));
    this.currentInstance = new ClientWalletTransactionLog();
  }

  @Input()
  public set transactionStatus(value: TransactionStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.transactionStatus = { ...value };
    this.sourceInstance.transactionStatus = { ...value };
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet> = new ForeignkeyLinker<ClientWallet>(inject(ClientWallet_Service), true);

		public transactionTypeLinker: ForeignkeyLinker<TransactionType> = new ForeignkeyLinker<TransactionType>(inject(TransactionType_Service), true);

		

}
