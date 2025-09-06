

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Booking, Booking_Service } from '..';
import { BookingEditUI } from '../edit/booking.edit'
import { BookingDeleteUI } from '../delete/booking.delete'
import { BookingStatus } from '../../bookingStatus';
import { DurationUnit } from '../../durationUnit';
import { Pet } from '../../pet';
import { Provider } from '../../provider';
import { BookingService } from '../../bookingService';
import { BookingServiceEditUI } from '../../bookingService/edit/bookingService.edit';
import { BookingTransaction } from '../../../fund/bookingTransaction';
import { BookingTransactionEditUI } from '../../../fund/bookingTransaction/edit/bookingTransaction.edit';



@Component({
  selector: 'base-booking-index',
  templateUrl: './booking.hub.html',
  styleUrls: ['./booking.hub.scss'],
  providers: [Booking_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BookingEditUI,
    BookingDeleteUI,
    LookupComponent,
		BookingServiceEditUI,
		BookingTransactionEditUI,
  ]
})
export class BookingHubUI extends HubUI<Booking> implements IHubUI<Booking> {

  constructor(public override service: Booking_Service = inject(Booking_Service)) {
    super(service);
    this.bookingStatusLinker = new ForeignkeyLinker<BookingStatus>(this.service.bookingStatusService, true);
		this.durationUnitLinker = new ForeignkeyLinker<DurationUnit>(this.service.durationUnitService, true);
		this.petLinker = new ForeignkeyLinker<Pet>(this.service.petService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking Service', () => this.onAddBookingService()),
			new DropdownMenuItem('Add  Booking Transaction', () => this.onAddBookingTransaction()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Booking Status', () => this.navigateToUrl('/base/bookingStatus')),
			new DropdownMenuItem('Manage  Duration Unit', () => this.navigateToUrl('/base/durationUnit')),
			new DropdownMenuItem('Manage  Pet', () => this.navigateToUrl('/base/pet')),
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
		];
  }

  public bookingStatusLinker: ForeignkeyLinker<BookingStatus>;

	public durationUnitLinker: ForeignkeyLinker<DurationUnit>;

	public petLinker: ForeignkeyLinker<Pet>;

	public providerLinker: ForeignkeyLinker<Provider>;

  
  @ViewChild('bookingServiceEditUI')
  public bookingServiceEditUI!: BookingServiceEditUI;

  onAddBookingService() {
    let bookingService = new BookingService();
    bookingService.booking = this.currentInstance;
    this.bookingServiceEditUI.Show(bookingService);
  }


	
  @ViewChild('bookingTransactionEditUI')
  public bookingTransactionEditUI!: BookingTransactionEditUI;

  onAddBookingTransaction() {
    let bookingTransaction = new BookingTransaction();
    bookingTransaction.booking = this.currentInstance;
    this.bookingTransactionEditUI.Show(bookingTransaction);
  }


}
