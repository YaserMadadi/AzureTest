
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ProviderService, ProviderService_ServiceCollection } from '../../providerService';
import { ServicePrice, ServicePrice_Builder } from '../../servicePrice';
import { ServicePriceEditUI } from '../../servicePrice/edit/servicePrice.edit'
import { ServicePriceDeleteUI } from '../../servicePrice/delete/servicePrice.delete'
import { PriceScope, PriceScope_Service } from '../../priceScope';



@Component({
  selector: 'base-providerService-servicePrice-detail',
  templateUrl: './providerService-servicePrice.detail.html',
  styleUrls: ['./providerService-servicePrice.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ServicePriceEditUI,        
    ServicePriceDeleteUI,
  ]
}) 
export class ProviderService_ServicePrice_DetailUI extends DetailUI<ProviderService, ServicePrice> {

  constructor(private serviceCollection: ProviderService_ServiceCollection = inject(ProviderService_ServiceCollection)) {
    super(serviceCollection.CollectionOfServicePrice.bind(serviceCollection), inject(ServicePrice_Builder));
    this.currentInstance = new ServicePrice();
  }

  @Input()
  public set providerService(value: ProviderService) {
    this.masterInstance = { ...value };
    //this.currentInstance.providerService = { ...value };
    this.sourceInstance.providerService = { ...value };
  }

  public priceScopeLinker: ForeignkeyLinker<PriceScope> = new ForeignkeyLinker<PriceScope>(inject(PriceScope_Service), true);

		

}
