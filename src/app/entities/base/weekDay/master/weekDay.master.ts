import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { WeekDay, WeekDay_Service } from '..';
import { WeekDay_ServiceOrientedWorkTime_DetailUI } from '../detail/weekDay-serviceOrientedWorkTime.detail';
import { WeekDay_WorkTime_DetailUI } from '../detail/weekDay-workTime.detail';



@Component({
  selector: 'base-weekDay-master',
  templateUrl: './weekDay.master.html',
  styleUrls: ['./weekDay.master.scss'],
  providers: [
    WeekDay_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //WeekDayEditUI,        
    //WeekDayDeleteUI,
    WeekDay_ServiceOrientedWorkTime_DetailUI,
				WeekDay_WorkTime_DetailUI
  ]
})
export class WeekDayMasterUI extends MasterUI<WeekDay> implements IMasterUI<WeekDay> {

  constructor() {
    super(inject(WeekDay_Service))
  }


}
