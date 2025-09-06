

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { BookingService, BookingService_Service } from '..';
import { Booking } from '../../booking';
import { ProviderService } from '../../providerService';



@Component({
  selector: 'base-bookingService-edit',
  templateUrl: './bookingService.edit.html',
  styleUrls: ['./bookingService.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class BookingServiceEditUI extends EditUI<BookingService> {
    
  constructor(public override service: BookingService_Service = inject(BookingService_Service )) {
    super(service); 
    this.bookingLinker = new ForeignkeyLinker<Booking>(this.service.bookingService, true);
		this.providerServiceLinker = new ForeignkeyLinker<ProviderService>(this.service.providerServiceService, true);
  }

  @Input() 
  set bookingLocked(value: boolean) {
    this.bookingLinker.locked = value;
  }

	@Input() 
  set providerServiceLocked(value: boolean) {
    this.providerServiceLinker.locked = value;
  }

  public bookingLinker: ForeignkeyLinker<Booking>;

	public providerServiceLinker: ForeignkeyLinker<ProviderService>;

}
