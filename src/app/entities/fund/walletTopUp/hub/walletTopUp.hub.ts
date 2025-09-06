

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { WalletTopUp, WalletTopUp_Service } from '..';
import { WalletTopUpEditUI } from '../edit/walletTopUp.edit'
import { WalletTopUpDeleteUI } from '../delete/walletTopUp.delete'
import { ClientWallet } from '../../clientWallet';
import { PaymentMethod } from '../../paymentMethod';
import { TransactionStatus } from '../../transactionStatus';



@Component({
  selector: 'fund-walletTopUp-index',
  templateUrl: './walletTopUp.hub.html',
  styleUrls: ['./walletTopUp.hub.scss'],
  providers: [WalletTopUp_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    WalletTopUpEditUI,
    WalletTopUpDeleteUI,
    LookupComponent,
  ]
})
export class WalletTopUpHubUI extends HubUI<WalletTopUp> implements IHubUI<WalletTopUp> {

  constructor(public override service: WalletTopUp_Service = inject(WalletTopUp_Service)) {
    super(service);
    this.clientWalletLinker = new ForeignkeyLinker<ClientWallet>(this.service.clientWalletService, true);
		this.paymentMethodLinker = new ForeignkeyLinker<PaymentMethod>(this.service.paymentMethodService, true);
		this.transactionStatusLinker = new ForeignkeyLinker<TransactionStatus>(this.service.transactionStatusService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client Wallet', () => this.navigateToUrl('/fund/clientWallet')),
			new DropdownMenuItem('Manage  Payment Method', () => this.navigateToUrl('/fund/paymentMethod')),
			new DropdownMenuItem('Manage  Transaction Status', () => this.navigateToUrl('/fund/transactionStatus')),
		];
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet>;

	public paymentMethodLinker: ForeignkeyLinker<PaymentMethod>;

	public transactionStatusLinker: ForeignkeyLinker<TransactionStatus>;

  

}
