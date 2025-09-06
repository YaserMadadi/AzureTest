import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { BackgroundCheckStatus, BackgroundCheckStatus_Service } from '..';
import { BackgroundCheckStatus_IndividualProvider_DetailUI } from '../detail/backgroundCheckStatus-individualProvider.detail';



@Component({
  selector: 'base-backgroundCheckStatus-master',
  templateUrl: './backgroundCheckStatus.master.html',
  styleUrls: ['./backgroundCheckStatus.master.scss'],
  providers: [
    BackgroundCheckStatus_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //BackgroundCheckStatusEditUI,        
    //BackgroundCheckStatusDeleteUI,
    BackgroundCheckStatus_IndividualProvider_DetailUI
  ]
})
export class BackgroundCheckStatusMasterUI extends MasterUI<BackgroundCheckStatus> implements IMasterUI<BackgroundCheckStatus> {

  constructor() {
    super(inject(BackgroundCheckStatus_Service))
  }


}
