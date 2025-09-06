
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ProviderService, ProviderService_ServiceCollection } from '../../providerService';
import { BookingService, BookingService_Builder } from '../../bookingService';
import { BookingServiceEditUI } from '../../bookingService/edit/bookingService.edit'
import { BookingServiceDeleteUI } from '../../bookingService/delete/bookingService.delete'
import { Booking, Booking_Service } from '../../booking';



@Component({
  selector: 'base-providerService-bookingService-detail',
  templateUrl: './providerService-bookingService.detail.html',
  styleUrls: ['./providerService-bookingService.detail.scss'],
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
export class ProviderService_BookingService_DetailUI extends DetailUI<ProviderService, BookingService> {

  constructor(private serviceCollection: ProviderService_ServiceCollection = inject(ProviderService_ServiceCollection)) {
    super(serviceCollection.CollectionOfBookingService.bind(serviceCollection), inject(BookingService_Builder));
    this.currentInstance = new BookingService();
  }

  @Input()
  public set providerService(value: ProviderService) {
    this.masterInstance = { ...value };
    //this.currentInstance.providerService = { ...value };
    this.sourceInstance.providerService = { ...value };
  }

  public bookingLinker: ForeignkeyLinker<Booking> = new ForeignkeyLinker<Booking>(inject(Booking_Service), true);

		

}
