import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderCertification, ProviderCertification_Service } from '..';



@Component({
  selector: 'base-providerCertification-master',
  templateUrl: './providerCertification.master.html',
  styleUrls: ['./providerCertification.master.scss'],
  providers: [
    ProviderCertification_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderCertificationEditUI,        
    //ProviderCertificationDeleteUI,
    // No Item...
  ]
})
export class ProviderCertificationMasterUI extends MasterUI<ProviderCertification> implements IMasterUI<ProviderCertification> {

  constructor() {
    super(inject(ProviderCertification_Service))
  }


}
