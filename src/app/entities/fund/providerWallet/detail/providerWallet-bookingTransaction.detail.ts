
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ProviderWallet, ProviderWallet_ServiceCollection } from '../../providerWallet';
import { BookingTransaction, BookingTransaction_Builder } from '../../bookingTransaction';
import { BookingTransactionEditUI } from '../../bookingTransaction/edit/bookingTransaction.edit'
import { BookingTransactionDeleteUI } from '../../bookingTransaction/delete/bookingTransaction.delete'
import { Booking, Booking_Service } from '../../../base/booking';
import { ClientWallet, ClientWallet_Service } from '../../clientWallet';



@Component({
  selector: 'fund-providerWallet-bookingTransaction-detail',
  templateUrl: './providerWallet-bookingTransaction.detail.html',
  styleUrls: ['./providerWallet-bookingTransaction.detail.scss'],
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
export class ProviderWallet_BookingTransaction_DetailUI extends DetailUI<ProviderWallet, BookingTransaction> {

  constructor(private serviceCollection: ProviderWallet_ServiceCollection = inject(ProviderWallet_ServiceCollection)) {
    super(serviceCollection.CollectionOfBookingTransaction.bind(serviceCollection), inject(BookingTransaction_Builder));
    this.currentInstance = new BookingTransaction();
  }

  @Input()
  public set providerWallet(value: ProviderWallet) {
    this.masterInstance = { ...value };
    //this.currentInstance.providerWallet = { ...value };
    this.sourceInstance.providerWallet = { ...value };
  }

  public bookingLinker: ForeignkeyLinker<Booking> = new ForeignkeyLinker<Booking>(inject(Booking_Service), true);

		public clientWalletLinker: ForeignkeyLinker<ClientWallet> = new ForeignkeyLinker<ClientWallet>(inject(ClientWallet_Service), true);

		

}
