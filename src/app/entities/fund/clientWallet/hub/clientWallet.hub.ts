

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ClientWallet, ClientWallet_Service } from '..';
import { ClientWalletEditUI } from '../edit/clientWallet.edit'
import { ClientWalletDeleteUI } from '../delete/clientWallet.delete'
import { Client } from '../../../base/client';
import { BookingTransaction } from '../../bookingTransaction';
import { BookingTransactionEditUI } from '../../bookingTransaction/edit/bookingTransaction.edit';
import { ClientWalletTransactionLog } from '../../clientWalletTransactionLog';
import { ClientWalletTransactionLogEditUI } from '../../clientWalletTransactionLog/edit/clientWalletTransactionLog.edit';
import { WalletTopUp } from '../../walletTopUp';
import { WalletTopUpEditUI } from '../../walletTopUp/edit/walletTopUp.edit';



@Component({
  selector: 'fund-clientWallet-index',
  templateUrl: './clientWallet.hub.html',
  styleUrls: ['./clientWallet.hub.scss'],
  providers: [ClientWallet_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ClientWalletEditUI,
    ClientWalletDeleteUI,
    LookupComponent,
		BookingTransactionEditUI,
		ClientWalletTransactionLogEditUI,
		WalletTopUpEditUI,
  ]
})
export class ClientWalletHubUI extends HubUI<ClientWallet> implements IHubUI<ClientWallet> {

  constructor(public override service: ClientWallet_Service = inject(ClientWallet_Service)) {
    super(service);
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking Transaction', () => this.onAddBookingTransaction()),
			new DropdownMenuItem('Add  Client Wallet Transaction Log', () => this.onAddClientWalletTransactionLog()),
			new DropdownMenuItem('Add  Wallet Top Up', () => this.onAddWalletTopUp()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client', () => this.navigateToUrl('/base/client')),
		];
  }

  public clientLinker: ForeignkeyLinker<Client>;

  
  @ViewChild('bookingTransactionEditUI')
  public bookingTransactionEditUI!: BookingTransactionEditUI;

  onAddBookingTransaction() {
    let bookingTransaction = new BookingTransaction();
    bookingTransaction.clientWallet = this.currentInstance;
    this.bookingTransactionEditUI.Show(bookingTransaction);
  }


	
  @ViewChild('clientWalletTransactionLogEditUI')
  public clientWalletTransactionLogEditUI!: ClientWalletTransactionLogEditUI;

  onAddClientWalletTransactionLog() {
    let clientWalletTransactionLog = new ClientWalletTransactionLog();
    clientWalletTransactionLog.clientWallet = this.currentInstance;
    this.clientWalletTransactionLogEditUI.Show(clientWalletTransactionLog);
  }


	
  @ViewChild('walletTopUpEditUI')
  public walletTopUpEditUI!: WalletTopUpEditUI;

  onAddWalletTopUp() {
    let walletTopUp = new WalletTopUp();
    walletTopUp.clientWallet = this.currentInstance;
    this.walletTopUpEditUI.Show(walletTopUp);
  }


}
