import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { BookingService, BookingService_Service } from '..';



@Component({
  selector: 'base-bookingService-master',
  templateUrl: './bookingService.master.html',
  styleUrls: ['./bookingService.master.scss'],
  providers: [
    BookingService_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BookingServiceEditUI,        
    //BookingServiceDeleteUI,
    // No Item...
  ]
})
export class BookingServiceMasterUI extends MasterUI<BookingService> implements IMasterUI<BookingService> {

  constructor() {
    super(inject(BookingService_Service))
  }


}
