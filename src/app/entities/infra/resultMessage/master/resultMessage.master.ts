import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ResultMessage, ResultMessage_Service } from '..';



@Component({
  selector: 'infra-resultMessage-master',
  templateUrl: './resultMessage.master.html',
  styleUrls: ['./resultMessage.master.scss'],
  providers: [
    ResultMessage_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ResultMessageEditUI,        
    //ResultMessageDeleteUI,
    // No Item...
  ]
})
export class ResultMessageMasterUI extends MasterUI<ResultMessage> implements IMasterUI<ResultMessage> {

  constructor() {
    super(inject(ResultMessage_Service))
  }


}
