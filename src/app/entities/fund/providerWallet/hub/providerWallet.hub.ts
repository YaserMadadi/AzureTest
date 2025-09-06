

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderWallet, ProviderWallet_Service } from '..';
import { ProviderWalletEditUI } from '../edit/providerWallet.edit'
import { ProviderWalletDeleteUI } from '../delete/providerWallet.delete'
import { Provider } from '../../../base/provider';
import { BookingTransaction } from '../../bookingTransaction';
import { BookingTransactionEditUI } from '../../bookingTransaction/edit/bookingTransaction.edit';



@Component({
  selector: 'fund-providerWallet-index',
  templateUrl: './providerWallet.hub.html',
  styleUrls: ['./providerWallet.hub.scss'],
  providers: [ProviderWallet_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderWalletEditUI,
    ProviderWalletDeleteUI,
    LookupComponent,
		BookingTransactionEditUI,
  ]
})
export class ProviderWalletHubUI extends HubUI<ProviderWallet> implements IHubUI<ProviderWallet> {

  constructor(public override service: ProviderWallet_Service = inject(ProviderWallet_Service)) {
    super(service);
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking Transaction', () => this.onAddBookingTransaction()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public providerLinker: ForeignkeyLinker<Provider>;

  
  @ViewChild('bookingTransactionEditUI')
  public bookingTransactionEditUI!: BookingTransactionEditUI;

  onAddBookingTransaction() {
    let bookingTransaction = new BookingTransaction();
    bookingTransaction.providerWallet = this.currentInstance;
    this.bookingTransactionEditUI.Show(bookingTransaction);
  }


}
