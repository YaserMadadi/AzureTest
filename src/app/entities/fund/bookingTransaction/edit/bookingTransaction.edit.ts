

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { BookingTransaction, BookingTransaction_Service } from '..';
import { Booking } from '../../../base/booking';
import { ClientWallet } from '../../clientWallet';
import { ProviderWallet } from '../../providerWallet';



@Component({
  selector: 'fund-bookingTransaction-edit',
  templateUrl: './bookingTransaction.edit.html',
  styleUrls: ['./bookingTransaction.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class BookingTransactionEditUI extends EditUI<BookingTransaction> {
    
  constructor(public override service: BookingTransaction_Service = inject(BookingTransaction_Service )) {
    super(service); 
    this.bookingLinker = new ForeignkeyLinker<Booking>(this.service.bookingService, true);
		this.clientWalletLinker = new ForeignkeyLinker<ClientWallet>(this.service.clientWalletService, true);
		this.providerWalletLinker = new ForeignkeyLinker<ProviderWallet>(this.service.providerWalletService, true);
  }

  @Input() 
  set bookingLocked(value: boolean) {
    this.bookingLinker.locked = value;
  }

	@Input() 
  set clientWalletLocked(value: boolean) {
    this.clientWalletLinker.locked = value;
  }

	@Input() 
  set providerWalletLocked(value: boolean) {
    this.providerWalletLinker.locked = value;
  }

  public bookingLinker: ForeignkeyLinker<Booking>;

	public clientWalletLinker: ForeignkeyLinker<ClientWallet>;

	public providerWalletLinker: ForeignkeyLinker<ProviderWallet>;

}
