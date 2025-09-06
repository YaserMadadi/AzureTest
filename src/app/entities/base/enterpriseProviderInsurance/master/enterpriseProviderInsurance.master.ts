import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { EnterpriseProviderInsurance, EnterpriseProviderInsurance_Service } from '..';



@Component({
  selector: 'base-enterpriseProviderInsurance-master',
  templateUrl: './enterpriseProviderInsurance.master.html',
  styleUrls: ['./enterpriseProviderInsurance.master.scss'],
  providers: [
    EnterpriseProviderInsurance_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //EnterpriseProviderInsuranceEditUI,        
    //EnterpriseProviderInsuranceDeleteUI,
    // No Item...
  ]
})
export class EnterpriseProviderInsuranceMasterUI extends MasterUI<EnterpriseProviderInsurance> implements IMasterUI<EnterpriseProviderInsurance> {

  constructor() {
    super(inject(EnterpriseProviderInsurance_Service))
  }


}
