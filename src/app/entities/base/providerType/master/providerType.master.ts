import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ProviderType, ProviderType_Service } from '..';
import { ProviderType_Provider_DetailUI } from '../detail/providerType-provider.detail';



@Component({
  selector: 'base-providerType-master',
  templateUrl: './providerType.master.html',
  styleUrls: ['./providerType.master.scss'],
  providers: [
    ProviderType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ProviderTypeEditUI,        
    //ProviderTypeDeleteUI,
    ProviderType_Provider_DetailUI
  ]
})
export class ProviderTypeMasterUI extends MasterUI<ProviderType> implements IMasterUI<ProviderType> {

  constructor() {
    super(inject(ProviderType_Service))
  }


}
