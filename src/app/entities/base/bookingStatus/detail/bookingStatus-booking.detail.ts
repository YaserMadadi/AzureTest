
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { BookingStatus, BookingStatus_ServiceCollection } from '../../bookingStatus';
import { Booking, Booking_Builder } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit'
import { BookingDeleteUI } from '../../booking/delete/booking.delete'
import { DurationUnit, DurationUnit_Service } from '../../durationUnit';
import { Pet, Pet_Service } from '../../pet';
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-bookingStatus-booking-detail',
  templateUrl: './bookingStatus-booking.detail.html',
  styleUrls: ['./bookingStatus-booking.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    BookingEditUI,        
    BookingDeleteUI,
  ]
}) 
export class BookingStatus_Booking_DetailUI extends DetailUI<BookingStatus, Booking> {

  constructor(private serviceCollection: BookingStatus_ServiceCollection = inject(BookingStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfBooking.bind(serviceCollection), inject(Booking_Builder));
    this.currentInstance = new Booking();
  }

  @Input()
  public set bookingStatus(value: BookingStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.bookingStatus = { ...value };
    this.sourceInstance.bookingStatus = { ...value };
  }

  public durationUnitLinker: ForeignkeyLinker<DurationUnit> = new ForeignkeyLinker<DurationUnit>(inject(DurationUnit_Service), true);

		public petLinker: ForeignkeyLinker<Pet> = new ForeignkeyLinker<Pet>(inject(Pet_Service), true);

		public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
