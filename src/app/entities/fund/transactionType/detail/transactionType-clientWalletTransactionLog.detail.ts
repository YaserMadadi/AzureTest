
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { TransactionType, TransactionType_ServiceCollection } from '../../transactionType';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '../../clientWalletTransactionLog';
import { ClientWalletTransactionLogEditUI } from '../../clientWalletTransactionLog/edit/clientWalletTransactionLog.edit'
import { ClientWalletTransactionLogDeleteUI } from '../../clientWalletTransactionLog/delete/clientWalletTransactionLog.delete'
import { ClientWallet, ClientWallet_Service } from '../../clientWallet';
import { TransactionStatus, TransactionStatus_Service } from '../../transactionStatus';



@Component({
  selector: 'fund-transactionType-clientWalletTransactionLog-detail',
  templateUrl: './transactionType-clientWalletTransactionLog.detail.html',
  styleUrls: ['./transactionType-clientWalletTransactionLog.detail.scss'],
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
export class TransactionType_ClientWalletTransactionLog_DetailUI extends DetailUI<TransactionType, ClientWalletTransactionLog> {

  constructor(private serviceCollection: TransactionType_ServiceCollection = inject(TransactionType_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientWalletTransactionLog.bind(serviceCollection), inject(ClientWalletTransactionLog_Builder));
    this.currentInstance = new ClientWalletTransactionLog();
  }

  @Input()
  public set transactionType(value: TransactionType) {
    this.masterInstance = { ...value };
    //this.currentInstance.transactionType = { ...value };
    this.sourceInstance.transactionType = { ...value };
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet> = new ForeignkeyLinker<ClientWallet>(inject(ClientWallet_Service), true);

		public transactionStatusLinker: ForeignkeyLinker<TransactionStatus> = new ForeignkeyLinker<TransactionStatus>(inject(TransactionStatus_Service), true);

		

}
