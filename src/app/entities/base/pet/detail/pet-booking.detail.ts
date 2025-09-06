
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Pet, Pet_ServiceCollection } from '../../pet';
import { Booking, Booking_Builder } from '../../booking';
import { BookingEditUI } from '../../booking/edit/booking.edit'
import { BookingDeleteUI } from '../../booking/delete/booking.delete'
import { BookingStatus, BookingStatus_Service } from '../../bookingStatus';
import { DurationUnit, DurationUnit_Service } from '../../durationUnit';
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-pet-booking-detail',
  templateUrl: './pet-booking.detail.html',
  styleUrls: ['./pet-booking.detail.scss'],
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
export class Pet_Booking_DetailUI extends DetailUI<Pet, Booking> {

  constructor(private serviceCollection: Pet_ServiceCollection = inject(Pet_ServiceCollection)) {
    super(serviceCollection.CollectionOfBooking.bind(serviceCollection), inject(Booking_Builder));
    this.currentInstance = new Booking();
  }

  @Input()
  public set pet(value: Pet) {
    this.masterInstance = { ...value };
    //this.currentInstance.pet = { ...value };
    this.sourceInstance.pet = { ...value };
  }

  public bookingStatusLinker: ForeignkeyLinker<BookingStatus> = new ForeignkeyLinker<BookingStatus>(inject(BookingStatus_Service), true);

		public durationUnitLinker: ForeignkeyLinker<DurationUnit> = new ForeignkeyLinker<DurationUnit>(inject(DurationUnit_Service), true);

		public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
