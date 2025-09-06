

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { TransactionType, TransactionType_Service } from '..';
import { TransactionTypeEditUI } from '../edit/transactionType.edit'
import { TransactionTypeDeleteUI } from '../delete/transactionType.delete'
import { ClientWalletTransactionLog } from '../../clientWalletTransactionLog';
import { ClientWalletTransactionLogEditUI } from '../../clientWalletTransactionLog/edit/clientWalletTransactionLog.edit';



@Component({
  selector: 'fund-transactionType-index',
  templateUrl: './transactionType.hub.html',
  styleUrls: ['./transactionType.hub.scss'],
  providers: [TransactionType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    TransactionTypeEditUI,
    TransactionTypeDeleteUI,
    ClientWalletTransactionLogEditUI,
  ]
})
export class TransactionTypeHubUI extends HubUI<TransactionType> implements IHubUI<TransactionType> {

  constructor(public override service: TransactionType_Service = inject(TransactionType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Client Wallet Transaction Log', () => this.onAddClientWalletTransactionLog()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('clientWalletTransactionLogEditUI')
  public clientWalletTransactionLogEditUI!: ClientWalletTransactionLogEditUI;

  onAddClientWalletTransactionLog() {
    let clientWalletTransactionLog = new ClientWalletTransactionLog();
    clientWalletTransactionLog.transactionType = this.currentInstance;
    this.clientWalletTransactionLogEditUI.Show(clientWalletTransactionLog);
  }


}
