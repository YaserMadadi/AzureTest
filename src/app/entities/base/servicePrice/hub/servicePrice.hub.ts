

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ServicePrice, ServicePrice_Service } from '..';
import { ServicePriceEditUI } from '../edit/servicePrice.edit'
import { ServicePriceDeleteUI } from '../delete/servicePrice.delete'
import { PriceScope } from '../../priceScope';
import { ProviderService } from '../../providerService';



@Component({
  selector: 'base-servicePrice-index',
  templateUrl: './servicePrice.hub.html',
  styleUrls: ['./servicePrice.hub.scss'],
  providers: [ServicePrice_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ServicePriceEditUI,
    ServicePriceDeleteUI,
    LookupComponent,
  ]
})
export class ServicePriceHubUI extends HubUI<ServicePrice> implements IHubUI<ServicePrice> {

  constructor(public override service: ServicePrice_Service = inject(ServicePrice_Service)) {
    super(service);
    this.priceScopeLinker = new ForeignkeyLinker<PriceScope>(this.service.priceScopeService, true);
		this.providerServiceLinker = new ForeignkeyLinker<ProviderService>(this.service.providerServiceService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Price Scope', () => this.navigateToUrl('/base/priceScope')),
			new DropdownMenuItem('Manage  Provider Service', () => this.navigateToUrl('/base/providerService')),
		];
  }

  public priceScopeLinker: ForeignkeyLinker<PriceScope>;

	public providerServiceLinker: ForeignkeyLinker<ProviderService>;

  

}
