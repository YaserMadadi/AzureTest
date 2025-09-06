
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { ProviderService, ProviderService_Builder } from '../../providerService';
import { ProviderServiceEditUI } from '../../providerService/edit/providerService.edit'
import { ProviderServiceDeleteUI } from '../../providerService/delete/providerService.delete'
import { ServiceType, ServiceType_Service } from '../../serviceType';



@Component({
  selector: 'base-provider-providerService-detail',
  templateUrl: './provider-providerService.detail.html',
  styleUrls: ['./provider-providerService.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ProviderServiceEditUI,        
    ProviderServiceDeleteUI,
  ]
}) 
export class Provider_ProviderService_DetailUI extends DetailUI<Provider, ProviderService> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfProviderService.bind(serviceCollection), inject(ProviderService_Builder));
    this.currentInstance = new ProviderService();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public serviceTypeLinker: ForeignkeyLinker<ServiceType> = new ForeignkeyLinker<ServiceType>(inject(ServiceType_Service), true);

		

}
