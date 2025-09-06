import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { WorkTime, WorkTime_Service } from '..';



@Component({
  selector: 'base-workTime-master',
  templateUrl: './workTime.master.html',
  styleUrls: ['./workTime.master.scss'],
  providers: [
    WorkTime_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //WorkTimeEditUI,        
    //WorkTimeDeleteUI,
    // No Item...
  ]
})
export class WorkTimeMasterUI extends MasterUI<WorkTime> implements IMasterUI<WorkTime> {

  constructor() {
    super(inject(WorkTime_Service))
  }


}
