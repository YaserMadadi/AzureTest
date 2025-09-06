

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ServicePrice, ServicePrice_Service } from '..';
import { PriceScope } from '../../priceScope';
import { ProviderService } from '../../providerService';



@Component({
  selector: 'base-servicePrice-edit',
  templateUrl: './servicePrice.edit.html',
  styleUrls: ['./servicePrice.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ServicePriceEditUI extends EditUI<ServicePrice> {
    
  constructor(public override service: ServicePrice_Service = inject(ServicePrice_Service )) {
    super(service); 
    this.priceScopeLinker = new ForeignkeyLinker<PriceScope>(this.service.priceScopeService, true);
		this.providerServiceLinker = new ForeignkeyLinker<ProviderService>(this.service.providerServiceService, true);
  }

  @Input() 
  set priceScopeLocked(value: boolean) {
    this.priceScopeLinker.locked = value;
  }

	@Input() 
  set providerServiceLocked(value: boolean) {
    this.providerServiceLinker.locked = value;
  }

  public priceScopeLinker: ForeignkeyLinker<PriceScope>;

	public providerServiceLinker: ForeignkeyLinker<ProviderService>;

}
