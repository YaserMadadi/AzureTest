import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { RecordLog, RecordLog_Service } from '..';



@Component({
  selector: 'infra-recordLog-master',
  templateUrl: './recordLog.master.html',
  styleUrls: ['./recordLog.master.scss'],
  providers: [
    RecordLog_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //RecordLogEditUI,        
    //RecordLogDeleteUI,
    // No Item...
  ]
})
export class RecordLogMasterUI extends MasterUI<RecordLog> implements IMasterUI<RecordLog> {

  constructor() {
    super(inject(RecordLog_Service))
  }


}
