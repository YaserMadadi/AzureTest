

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Booking, Booking_Service } from '..';
import { BookingStatus } from '../../bookingStatus';
import { DurationUnit } from '../../durationUnit';
import { Pet } from '../../pet';
import { Provider } from '../../provider';



@Component({
  selector: 'base-booking-edit',
  templateUrl: './booking.edit.html',
  styleUrls: ['./booking.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class BookingEditUI extends EditUI<Booking> {
    
  constructor(public override service: Booking_Service = inject(Booking_Service )) {
    super(service); 
    this.bookingStatusLinker = new ForeignkeyLinker<BookingStatus>(this.service.bookingStatusService, true);
		this.durationUnitLinker = new ForeignkeyLinker<DurationUnit>(this.service.durationUnitService, true);
		this.petLinker = new ForeignkeyLinker<Pet>(this.service.petService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set bookingStatusLocked(value: boolean) {
    this.bookingStatusLinker.locked = value;
  }

	@Input() 
  set durationUnitLocked(value: boolean) {
    this.durationUnitLinker.locked = value;
  }

	@Input() 
  set petLocked(value: boolean) {
    this.petLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public bookingStatusLinker: ForeignkeyLinker<BookingStatus>;

	public durationUnitLinker: ForeignkeyLinker<DurationUnit>;

	public petLinker: ForeignkeyLinker<Pet>;

	public providerLinker: ForeignkeyLinker<Provider>;

}
