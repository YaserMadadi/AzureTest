
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { PriceScope, PriceScope_ServiceCollection } from '../../priceScope';
import { ServicePrice, ServicePrice_Builder } from '../../servicePrice';
import { ServicePriceEditUI } from '../../servicePrice/edit/servicePrice.edit'
import { ServicePriceDeleteUI } from '../../servicePrice/delete/servicePrice.delete'
import { ProviderService, ProviderService_Service } from '../../providerService';



@Component({
  selector: 'base-priceScope-servicePrice-detail',
  templateUrl: './priceScope-servicePrice.detail.html',
  styleUrls: ['./priceScope-servicePrice.detail.scss'],
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
export class PriceScope_ServicePrice_DetailUI extends DetailUI<PriceScope, ServicePrice> {

  constructor(private serviceCollection: PriceScope_ServiceCollection = inject(PriceScope_ServiceCollection)) {
    super(serviceCollection.CollectionOfServicePrice.bind(serviceCollection), inject(ServicePrice_Builder));
    this.currentInstance = new ServicePrice();
  }

  @Input()
  public set priceScope(value: PriceScope) {
    this.masterInstance = { ...value };
    //this.currentInstance.priceScope = { ...value };
    this.sourceInstance.priceScope = { ...value };
  }

  public providerServiceLinker: ForeignkeyLinker<ProviderService> = new ForeignkeyLinker<ProviderService>(inject(ProviderService_Service), true);

		

}
