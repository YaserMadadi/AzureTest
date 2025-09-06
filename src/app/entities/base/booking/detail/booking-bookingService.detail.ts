
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Booking, Booking_ServiceCollection } from '../../booking';
import { BookingService, BookingService_Builder } from '../../bookingService';
import { BookingServiceEditUI } from '../../bookingService/edit/bookingService.edit'
import { BookingServiceDeleteUI } from '../../bookingService/delete/bookingService.delete'
import { ProviderService, ProviderService_Service } from '../../providerService';



@Component({
  selector: 'base-booking-bookingService-detail',
  templateUrl: './booking-bookingService.detail.html',
  styleUrls: ['./booking-bookingService.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    BookingServiceEditUI,        
    BookingServiceDeleteUI,
  ]
}) 
export class Booking_BookingService_DetailUI extends DetailUI<Booking, BookingService> {

  constructor(private serviceCollection: Booking_ServiceCollection = inject(Booking_ServiceCollection)) {
    super(serviceCollection.CollectionOfBookingService.bind(serviceCollection), inject(BookingService_Builder));
    this.currentInstance = new BookingService();
  }

  @Input()
  public set booking(value: Booking) {
    this.masterInstance = { ...value };
    //this.currentInstance.booking = { ...value };
    this.sourceInstance.booking = { ...value };
  }

  public providerServiceLinker: ForeignkeyLinker<ProviderService> = new ForeignkeyLinker<ProviderService>(inject(ProviderService_Service), true);

		

}
