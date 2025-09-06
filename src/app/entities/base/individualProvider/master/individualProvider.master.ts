import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { IndividualProvider, IndividualProvider_Service } from '..';



@Component({
  selector: 'base-individualProvider-master',
  templateUrl: './individualProvider.master.html',
  styleUrls: ['./individualProvider.master.scss'],
  providers: [
    IndividualProvider_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //IndividualProviderEditUI,        
    //IndividualProviderDeleteUI,
    // No Item...
  ]
})
export class IndividualProviderMasterUI extends MasterUI<IndividualProvider> implements IMasterUI<IndividualProvider> {

  constructor() {
    super(inject(IndividualProvider_Service))
  }


}
