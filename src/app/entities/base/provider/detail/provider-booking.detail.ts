
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { Booking, Booking_Builder } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit'
import { BookingDeleteUI } from '../../booking/delete/booking.delete'
import { BookingStatus, BookingStatus_Service } from '../../bookingStatus';
import { DurationUnit, DurationUnit_Service } from '../../durationUnit';
import { Pet, Pet_Service } from '../../pet';



@Component({
  selector: 'base-provider-booking-detail',
  templateUrl: './provider-booking.detail.html',
  styleUrls: ['./provider-booking.detail.scss'],
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
export class Provider_Booking_DetailUI extends DetailUI<Provider, Booking> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfBooking.bind(serviceCollection), inject(Booking_Builder));
    this.currentInstance = new Booking();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public bookingStatusLinker: ForeignkeyLinker<BookingStatus> = new ForeignkeyLinker<BookingStatus>(inject(BookingStatus_Service), true);

		public durationUnitLinker: ForeignkeyLinker<DurationUnit> = new ForeignkeyLinker<DurationUnit>(inject(DurationUnit_Service), true);

		public petLinker: ForeignkeyLinker<Pet> = new ForeignkeyLinker<Pet>(inject(Pet_Service), true);

		

}
