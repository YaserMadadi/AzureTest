
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ClientWallet, ClientWallet_ServiceCollection } from '../../clientWallet';
import { BookingTransaction, BookingTransaction_Builder } from '../../bookingTransaction';
import { BookingTransactionEditUI } from '../../bookingTransaction/edit/bookingTransaction.edit'
import { BookingTransactionDeleteUI } from '../../bookingTransaction/delete/bookingTransaction.delete'
import { Booking, Booking_Service } from '../../../base/booking';
import { ProviderWallet, ProviderWallet_Service } from '../../providerWallet';



@Component({
  selector: 'fund-clientWallet-bookingTransaction-detail',
  templateUrl: './clientWallet-bookingTransaction.detail.html',
  styleUrls: ['./clientWallet-bookingTransaction.detail.scss'],
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
export class ClientWallet_BookingTransaction_DetailUI extends DetailUI<ClientWallet, BookingTransaction> {

  constructor(private serviceCollection: ClientWallet_ServiceCollection = inject(ClientWallet_ServiceCollection)) {
    super(serviceCollection.CollectionOfBookingTransaction.bind(serviceCollection), inject(BookingTransaction_Builder));
    this.currentInstance = new BookingTransaction();
  }

  @Input()
  public set clientWallet(value: ClientWallet) {
    this.masterInstance = { ...value };
    //this.currentInstance.clientWallet = { ...value };
    this.sourceInstance.clientWallet = { ...value };
  }

  public bookingLinker: ForeignkeyLinker<Booking> = new ForeignkeyLinker<Booking>(inject(Booking_Service), true);

		public providerWalletLinker: ForeignkeyLinker<ProviderWallet> = new ForeignkeyLinker<ProviderWallet>(inject(ProviderWallet_Service), true);

		

}
