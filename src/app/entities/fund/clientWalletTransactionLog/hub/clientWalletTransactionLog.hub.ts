

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Service } from '..';
import { ClientWalletTransactionLogEditUI } from '../edit/clientWalletTransactionLog.edit'
import { ClientWalletTransactionLogDeleteUI } from '../delete/clientWalletTransactionLog.delete'
import { ClientWallet } from '../../clientWallet';
import { TransactionType } from '../../transactionType';
import { TransactionStatus } from '../../transactionStatus';



@Component({
  selector: 'fund-clientWalletTransactionLog-index',
  templateUrl: './clientWalletTransactionLog.hub.html',
  styleUrls: ['./clientWalletTransactionLog.hub.scss'],
  providers: [ClientWalletTransactionLog_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ClientWalletTransactionLogEditUI,
    ClientWalletTransactionLogDeleteUI,
    LookupComponent,
  ]
})
export class ClientWalletTransactionLogHubUI extends HubUI<ClientWalletTransactionLog> implements IHubUI<ClientWalletTransactionLog> {

  constructor(public override service: ClientWalletTransactionLog_Service = inject(ClientWalletTransactionLog_Service)) {
    super(service);
    this.clientWalletLinker = new ForeignkeyLinker<ClientWallet>(this.service.clientWalletService, true);
		this.transactionTypeLinker = new ForeignkeyLinker<TransactionType>(this.service.transactionTypeService, true);
		this.transactionStatusLinker = new ForeignkeyLinker<TransactionStatus>(this.service.transactionStatusService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client Wallet', () => this.navigateToUrl('/fund/clientWallet')),
			new DropdownMenuItem('Manage  Transaction Type', () => this.navigateToUrl('/fund/transactionType')),
			new DropdownMenuItem('Manage  Transaction Status', () => this.navigateToUrl('/fund/transactionStatus')),
		];
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet>;

	public transactionTypeLinker: ForeignkeyLinker<TransactionType>;

	public transactionStatusLinker: ForeignkeyLinker<TransactionStatus>;

  

}
