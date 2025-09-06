

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { BookingTransaction, BookingTransaction_Service } from '..';
import { BookingTransactionEditUI } from '../edit/bookingTransaction.edit'
import { BookingTransactionDeleteUI } from '../delete/bookingTransaction.delete'
import { Booking } from '../../../base/booking';
import { ClientWallet } from '../../clientWallet';
import { ProviderWallet } from '../../providerWallet';



@Component({
  selector: 'fund-bookingTransaction-index',
  templateUrl: './bookingTransaction.hub.html',
  styleUrls: ['./bookingTransaction.hub.scss'],
  providers: [BookingTransaction_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BookingTransactionEditUI,
    BookingTransactionDeleteUI,
    LookupComponent,
  ]
})
export class BookingTransactionHubUI extends HubUI<BookingTransaction> implements IHubUI<BookingTransaction> {

  constructor(public override service: BookingTransaction_Service = inject(BookingTransaction_Service)) {
    super(service);
    this.bookingLinker = new ForeignkeyLinker<Booking>(this.service.bookingService, true);
		this.clientWalletLinker = new ForeignkeyLinker<ClientWallet>(this.service.clientWalletService, true);
		this.providerWalletLinker = new ForeignkeyLinker<ProviderWallet>(this.service.providerWalletService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Booking', () => this.navigateToUrl('/base/booking')),
			new DropdownMenuItem('Manage  Client Wallet', () => this.navigateToUrl('/fund/clientWallet')),
			new DropdownMenuItem('Manage  Provider Wallet', () => this.navigateToUrl('/fund/providerWallet')),
		];
  }

  public bookingLinker: ForeignkeyLinker<Booking>;

	public clientWalletLinker: ForeignkeyLinker<ClientWallet>;

	public providerWalletLinker: ForeignkeyLinker<ProviderWallet>;

  

}
