
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Booking, Booking_ServiceCollection } from '../../../base/booking';
import { BookingTransaction, BookingTransaction_Builder } from '../../../fund/bookingTransaction';
import { BookingTransactionEditUI } from '../../../fund/bookingTransaction/edit/bookingTransaction.edit'
import { BookingTransactionDeleteUI } from '../../../fund/bookingTransaction/delete/bookingTransaction.delete'
import { ClientWallet, ClientWallet_Service } from '../../../fund/clientWallet';
import { ProviderWallet, ProviderWallet_Service } from '../../../fund/providerWallet';



@Component({
  selector: 'base-booking-bookingTransaction-detail',
  templateUrl: './booking-bookingTransaction.detail.html',
  styleUrls: ['./booking-bookingTransaction.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    BookingTransactionEditUI,        
    BookingTransactionDeleteUI,
  ]
}) 
export class Booking_BookingTransaction_DetailUI extends DetailUI<Booking, BookingTransaction> {

  constructor(private serviceCollection: Booking_ServiceCollection = inject(Booking_ServiceCollection)) {
    super(serviceCollection.CollectionOfBookingTransaction.bind(serviceCollection), inject(BookingTransaction_Builder));
    this.currentInstance = new BookingTransaction();
  }

  @Input()
  public set booking(value: Booking) {
    this.masterInstance = { ...value };
    //this.currentInstance.booking = { ...value };
    this.sourceInstance.booking = { ...value };
  }

  public clientWalletLinker: ForeignkeyLinker<ClientWallet> = new ForeignkeyLinker<ClientWallet>(inject(ClientWallet_Service), true);

		public providerWalletLinker: ForeignkeyLinker<ProviderWallet> = new ForeignkeyLinker<ProviderWallet>(inject(ProviderWallet_Service), true);

		

}
