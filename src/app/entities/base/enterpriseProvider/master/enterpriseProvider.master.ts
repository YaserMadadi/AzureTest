import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { EnterpriseProvider, EnterpriseProvider_Service } from '..';
import { EnterpriseProvider_EnterpriseProviderInsurance_DetailUI } from '../detail/enterpriseProvider-enterpriseProviderInsurance.detail';



@Component({
  selector: 'base-enterpriseProvider-master',
  templateUrl: './enterpriseProvider.master.html',
  styleUrls: ['./enterpriseProvider.master.scss'],
  providers: [
    EnterpriseProvider_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //EnterpriseProviderEditUI,        
    //EnterpriseProviderDeleteUI,
    EnterpriseProvider_EnterpriseProviderInsurance_DetailUI
  ]
})
export class EnterpriseProviderMasterUI extends MasterUI<EnterpriseProvider> implements IMasterUI<EnterpriseProvider> {

  constructor() {
    super(inject(EnterpriseProvider_Service))
  }


}
