

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { TransactionStatus, TransactionStatus_Service } from '..';
import { TransactionStatusEditUI } from '../edit/transactionStatus.edit'
import { TransactionStatusDeleteUI } from '../delete/transactionStatus.delete'
import { ClientWalletTransactionLog } from '../../clientWalletTransactionLog';
import { ClientWalletTransactionLogEditUI } from '../../clientWalletTransactionLog/edit/clientWalletTransactionLog.edit';
import { ProviderPayOut } from '../../providerPayOut';
import { ProviderPayOutEditUI } from '../../providerPayOut/edit/providerPayOut.edit';
import { WalletTopUp } from '../../walletTopUp';
import { WalletTopUpEditUI } from '../../walletTopUp/edit/walletTopUp.edit';



@Component({
  selector: 'fund-transactionStatus-index',
  templateUrl: './transactionStatus.hub.html',
  styleUrls: ['./transactionStatus.hub.scss'],
  providers: [TransactionStatus_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    TransactionStatusEditUI,
    TransactionStatusDeleteUI,
    ClientWalletTransactionLogEditUI,
		ProviderPayOutEditUI,
		WalletTopUpEditUI,
  ]
})
export class TransactionStatusHubUI extends HubUI<TransactionStatus> implements IHubUI<TransactionStatus> {

  constructor(public override service: TransactionStatus_Service = inject(TransactionStatus_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Client Wallet Transaction Log', () => this.onAddClientWalletTransactionLog()),
			new DropdownMenuItem('Add  Provider Pay Out', () => this.onAddProviderPayOut()),
			new DropdownMenuItem('Add  Wallet Top Up', () => this.onAddWalletTopUp()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('clientWalletTransactionLogEditUI')
  public clientWalletTransactionLogEditUI!: ClientWalletTransactionLogEditUI;

  onAddClientWalletTransactionLog() {
    let clientWalletTransactionLog = new ClientWalletTransactionLog();
    clientWalletTransactionLog.transactionStatus = this.currentInstance;
    this.clientWalletTransactionLogEditUI.Show(clientWalletTransactionLog);
  }


	
  @ViewChild('providerPayOutEditUI')
  public providerPayOutEditUI!: ProviderPayOutEditUI;

  onAddProviderPayOut() {
    let providerPayOut = new ProviderPayOut();
    providerPayOut.transactionStatus = this.currentInstance;
    this.providerPayOutEditUI.Show(providerPayOut);
  }


	
  @ViewChild('walletTopUpEditUI')
  public walletTopUpEditUI!: WalletTopUpEditUI;

  onAddWalletTopUp() {
    let walletTopUp = new WalletTopUp();
    walletTopUp.transactionStatus = this.currentInstance;
    this.walletTopUpEditUI.Show(walletTopUp);
  }


}
