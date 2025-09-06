import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ServiceType, ServiceType_Service } from '..';
import { ServiceType_ProviderService_DetailUI } from '../detail/serviceType-providerService.detail';



@Component({
  selector: 'base-serviceType-master',
  templateUrl: './serviceType.master.html',
  styleUrls: ['./serviceType.master.scss'],
  providers: [
    ServiceType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ServiceTypeEditUI,        
    //ServiceTypeDeleteUI,
    ServiceType_ProviderService_DetailUI
  ]
})
export class ServiceTypeMasterUI extends MasterUI<ServiceType> implements IMasterUI<ServiceType> {

  constructor() {
    super(inject(ServiceType_Service))
  }


}
