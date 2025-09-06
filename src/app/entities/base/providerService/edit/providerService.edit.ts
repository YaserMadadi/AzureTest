

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderService, ProviderService_Service } from '..';
import { Provider } from '../../provider';
import { ServiceType } from '../../serviceType';



@Component({
  selector: 'base-providerService-edit',
  templateUrl: './providerService.edit.html',
  styleUrls: ['./providerService.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderServiceEditUI extends EditUI<ProviderService> {
    
  constructor(public override service: ProviderService_Service = inject(ProviderService_Service )) {
    super(service); 
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
		this.serviceTypeLinker = new ForeignkeyLinker<ServiceType>(this.service.serviceTypeService, true);
  }

  @Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

	@Input() 
  set serviceTypeLocked(value: boolean) {
    this.serviceTypeLinker.locked = value;
  }

  public providerLinker: ForeignkeyLinker<Provider>;

	public serviceTypeLinker: ForeignkeyLinker<ServiceType>;

}
