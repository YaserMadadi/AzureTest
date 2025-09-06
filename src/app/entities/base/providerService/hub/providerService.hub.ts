

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ProviderService, ProviderService_Service } from '..';
import { ProviderServiceEditUI } from '../edit/providerService.edit'
import { ProviderServiceDeleteUI } from '../delete/providerService.delete'
import { Provider } from '../../provider';
import { ServiceType } from '../../serviceType';
import { BookingService } from '../../bookingService';
import { BookingServiceEditUI } from '../../bookingService/edit/bookingService.edit';
import { ServiceOrientedWorkTime } from '../../serviceOrientedWorkTime';
import { ServiceOrientedWorkTimeEditUI } from '../../serviceOrientedWorkTime/edit/serviceOrientedWorkTime.edit';
import { ServicePrice } from '../../servicePrice';
import { ServicePriceEditUI } from '../../servicePrice/edit/servicePrice.edit';



@Component({
  selector: 'base-providerService-index',
  templateUrl: './providerService.hub.html',
  styleUrls: ['./providerService.hub.scss'],
  providers: [ProviderService_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ProviderServiceEditUI,
    ProviderServiceDeleteUI,
    LookupComponent,
		BookingServiceEditUI,
		ServiceOrientedWorkTimeEditUI,
		ServicePriceEditUI,
  ]
})
export class ProviderServiceHubUI extends HubUI<ProviderService> implements IHubUI<ProviderService> {

  constructor(public override service: ProviderService_Service = inject(ProviderService_Service)) {
    super(service);
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
		this.serviceTypeLinker = new ForeignkeyLinker<ServiceType>(this.service.serviceTypeService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Booking Service', () => this.onAddBookingService()),
			new DropdownMenuItem('Add  Service Oriented Work Time', () => this.onAddServiceOrientedWorkTime()),
			new DropdownMenuItem('Add  Service Price', () => this.onAddServicePrice()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
			new DropdownMenuItem('Manage  Service Type', () => this.navigateToUrl('/base/serviceType')),
		];
  }

  public providerLinker: ForeignkeyLinker<Provider>;

	public serviceTypeLinker: ForeignkeyLinker<ServiceType>;

  
  @ViewChild('bookingServiceEditUI')
  public bookingServiceEditUI!: BookingServiceEditUI;

  onAddBookingService() {
    let bookingService = new BookingService();
    bookingService.providerService = this.currentInstance;
    this.bookingServiceEditUI.Show(bookingService);
  }


	
  @ViewChild('serviceOrientedWorkTimeEditUI')
  public serviceOrientedWorkTimeEditUI!: ServiceOrientedWorkTimeEditUI;

  onAddServiceOrientedWorkTime() {
    let serviceOrientedWorkTime = new ServiceOrientedWorkTime();
    serviceOrientedWorkTime.providerService = this.currentInstance;
    this.serviceOrientedWorkTimeEditUI.Show(serviceOrientedWorkTime);
  }


	
  @ViewChild('servicePriceEditUI')
  public servicePriceEditUI!: ServicePriceEditUI;

  onAddServicePrice() {
    let servicePrice = new ServicePrice();
    servicePrice.providerService = this.currentInstance;
    this.servicePriceEditUI.Show(servicePrice);
  }


}
