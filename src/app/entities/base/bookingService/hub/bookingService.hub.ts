

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { BookingService, BookingService_Service } from '..';
import { BookingServiceEditUI } from '../edit/bookingService.edit'
import { BookingServiceDeleteUI } from '../delete/bookingService.delete'
import { Booking } from '../../booking';
import { ProviderService } from '../../providerService';



@Component({
  selector: 'base-bookingService-index',
  templateUrl: './bookingService.hub.html',
  styleUrls: ['./bookingService.hub.scss'],
  providers: [BookingService_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    BookingServiceEditUI,
    BookingServiceDeleteUI,
    LookupComponent,
  ]
})
export class BookingServiceHubUI extends HubUI<BookingService> implements IHubUI<BookingService> {

  constructor(public override service: BookingService_Service = inject(BookingService_Service)) {
    super(service);
    this.bookingLinker = new ForeignkeyLinker<Booking>(this.service.bookingService, true);
		this.providerServiceLinker = new ForeignkeyLinker<ProviderService>(this.service.providerServiceService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Booking', () => this.navigateToUrl('/base/booking')),
			new DropdownMenuItem('Manage  Provider Service', () => this.navigateToUrl('/base/providerService')),
		];
  }

  public bookingLinker: ForeignkeyLinker<Booking>;

	public providerServiceLinker: ForeignkeyLinker<ProviderService>;

  

}
