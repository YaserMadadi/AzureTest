import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Booking, Booking_Service } from '..';
import { Booking_BookingService_DetailUI } from '../detail/booking-bookingService.detail';
import { Booking_BookingTransaction_DetailUI } from '../detail/booking-bookingTransaction.detail';



@Component({
  selector: 'base-booking-master',
  templateUrl: './booking.master.html',
  styleUrls: ['./booking.master.scss'],
  providers: [
    Booking_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BookingEditUI,        
    //BookingDeleteUI,
    Booking_BookingService_DetailUI,
				Booking_BookingTransaction_DetailUI
  ]
})
export class BookingMasterUI extends MasterUI<Booking> implements IMasterUI<Booking> {

  constructor() {
    super(inject(Booking_Service))
  }


}
