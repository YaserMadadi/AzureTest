import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderPayOut, ProviderPayOut_Service } from '..';



@Component({
  selector: 'fund-providerPayOut-master',
  templateUrl: './providerPayOut.master.html',
  styleUrls: ['./providerPayOut.master.scss'],
  providers: [
    ProviderPayOut_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderPayOutEditUI,        
    //ProviderPayOutDeleteUI,
    // No Item...
  ]
})
export class ProviderPayOutMasterUI extends MasterUI<ProviderPayOut> implements IMasterUI<ProviderPayOut> {

  constructor() {
    super(inject(ProviderPayOut_Service))
  }


}
