import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Service } from '..';



@Component({
  selector: 'base-serviceOrientedWorkTime-master',
  templateUrl: './serviceOrientedWorkTime.master.html',
  styleUrls: ['./serviceOrientedWorkTime.master.scss'],
  providers: [
    ServiceOrientedWorkTime_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ServiceOrientedWorkTimeEditUI,        
    //ServiceOrientedWorkTimeDeleteUI,
    // No Item...
  ]
})
export class ServiceOrientedWorkTimeMasterUI extends MasterUI<ServiceOrientedWorkTime> implements IMasterUI<ServiceOrientedWorkTime> {

  constructor() {
    super(inject(ServiceOrientedWorkTime_Service))
  }


}
