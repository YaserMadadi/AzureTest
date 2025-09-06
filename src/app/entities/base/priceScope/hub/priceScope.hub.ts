

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { PriceScope, PriceScope_Service } from '..';
import { PriceScopeEditUI } from '../edit/priceScope.edit'
import { PriceScopeDeleteUI } from '../delete/priceScope.delete'
import { ServicePrice } from '../../servicePrice';
import { ServicePriceEditUI } from '../../servicePrice/edit/servicePrice.edit';



@Component({
  selector: 'base-priceScope-index',
  templateUrl: './priceScope.hub.html',
  styleUrls: ['./priceScope.hub.scss'],
  providers: [PriceScope_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PriceScopeEditUI,
    PriceScopeDeleteUI,
    ServicePriceEditUI,
  ]
})
export class PriceScopeHubUI extends HubUI<PriceScope> implements IHubUI<PriceScope> {

  constructor(public override service: PriceScope_Service = inject(PriceScope_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Service Price', () => this.onAddServicePrice()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('servicePriceEditUI')
  public servicePriceEditUI!: ServicePriceEditUI;

  onAddServicePrice() {
    let servicePrice = new ServicePrice();
    servicePrice.priceScope = this.currentInstance;
    this.servicePriceEditUI.Show(servicePrice);
  }


}
