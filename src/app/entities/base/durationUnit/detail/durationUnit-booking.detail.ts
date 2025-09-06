
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { DurationUnit, DurationUnit_ServiceCollection } from '../../durationUnit';
import { Booking, Booking_Builder } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit'
import { BookingDeleteUI } from '../../booking/delete/booking.delete'
import { BookingStatus, BookingStatus_Service } from '../../bookingStatus';
import { Pet, Pet_Service } from '../../pet';
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-durationUnit-booking-detail',
  templateUrl: './durationUnit-booking.detail.html',
  styleUrls: ['./durationUnit-booking.detail.scss'],
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
export class DurationUnit_Booking_DetailUI extends DetailUI<DurationUnit, Booking> {

  constructor(private serviceCollection: DurationUnit_ServiceCollection = inject(DurationUnit_ServiceCollection)) {
    super(serviceCollection.CollectionOfBooking.bind(serviceCollection), inject(Booking_Builder));
    this.currentInstance = new Booking();
  }

  @Input()
  public set durationUnit(value: DurationUnit) {
    this.masterInstance = { ...value };
    //this.currentInstance.durationUnit = { ...value };
    this.sourceInstance.durationUnit = { ...value };
  }

  public bookingStatusLinker: ForeignkeyLinker<BookingStatus> = new ForeignkeyLinker<BookingStatus>(inject(BookingStatus_Service), true);

		public petLinker: ForeignkeyLinker<Pet> = new ForeignkeyLinker<Pet>(inject(Pet_Service), true);

		public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
