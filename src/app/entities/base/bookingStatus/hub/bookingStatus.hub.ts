

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { BookingStatus, BookingStatus_Service } from '..';
import { BookingStatusEditUI } from '../edit/bookingStatus.edit'
import { BookingStatusDeleteUI } from '../delete/bookingStatus.delete'
import { Booking } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit';



@Component({
  selector: 'base-bookingStatus-index',
  templateUrl: './bookingStatus.hub.html',
  styleUrls: ['./bookingStatus.hub.scss'],
  providers: [BookingStatus_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BookingStatusEditUI,
    BookingStatusDeleteUI,
    BookingEditUI,
  ]
})
export class BookingStatusHubUI extends HubUI<BookingStatus> implements IHubUI<BookingStatus> {

  constructor(public override service: BookingStatus_Service = inject(BookingStatus_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking', () => this.onAddBooking()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('bookingEditUI')
  public bookingEditUI!: BookingEditUI;

  onAddBooking() {
    let booking = new Booking();
    booking.bookingStatus = this.currentInstance;
    this.bookingEditUI.Show(booking);
  }


}
