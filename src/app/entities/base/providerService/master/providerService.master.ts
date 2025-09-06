import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderService, ProviderService_Service } from '..';
import { ProviderService_BookingService_DetailUI } from '../detail/providerService-bookingService.detail';
import { ProviderService_ServiceOrientedWorkTime_DetailUI } from '../detail/providerService-serviceOrientedWorkTime.detail';
import { ProviderService_ServicePrice_DetailUI } from '../detail/providerService-servicePrice.detail';



@Component({
  selector: 'base-providerService-master',
  templateUrl: './providerService.master.html',
  styleUrls: ['./providerService.master.scss'],
  providers: [
    ProviderService_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderServiceEditUI,        
    //ProviderServiceDeleteUI,
    ProviderService_BookingService_DetailUI,
				ProviderService_ServiceOrientedWorkTime_DetailUI,
				ProviderService_ServicePrice_DetailUI
  ]
})
export class ProviderServiceMasterUI extends MasterUI<ProviderService> implements IMasterUI<ProviderService> {

  constructor() {
    super(inject(ProviderService_Service))
  }


}
