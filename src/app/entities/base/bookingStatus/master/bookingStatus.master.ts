import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { BookingStatus, BookingStatus_Service } from '..';
import { BookingStatus_Booking_DetailUI } from '../detail/bookingStatus-booking.detail';



@Component({
  selector: 'base-bookingStatus-master',
  templateUrl: './bookingStatus.master.html',
  styleUrls: ['./bookingStatus.master.scss'],
  providers: [
    BookingStatus_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BookingStatusEditUI,        
    //BookingStatusDeleteUI,
    BookingStatus_Booking_DetailUI
  ]
})
export class BookingStatusMasterUI extends MasterUI<BookingStatus> implements IMasterUI<BookingStatus> {

  constructor() {
    super(inject(BookingStatus_Service))
  }


}
