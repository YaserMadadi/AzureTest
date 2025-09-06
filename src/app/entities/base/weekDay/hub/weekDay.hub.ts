

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { WeekDay, WeekDay_Service } from '..';
import { WeekDayEditUI } from '../edit/weekDay.edit'
import { WeekDayDeleteUI } from '../delete/weekDay.delete'
import { ServiceOrientedWorkTime } from '../../serviceOrientedWorkTime';
import { ServiceOrientedWorkTimeEditUI } from '../../serviceOrientedWorkTime/edit/serviceOrientedWorkTime.edit';
import { WorkTime } from '../../workTime';
import { WorkTimeEditUI } from '../../workTime/edit/workTime.edit';



@Component({
  selector: 'base-weekDay-index',
  templateUrl: './weekDay.hub.html',
  styleUrls: ['./weekDay.hub.scss'],
  providers: [WeekDay_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    WeekDayEditUI,
    WeekDayDeleteUI,
    ServiceOrientedWorkTimeEditUI,
		WorkTimeEditUI,
  ]
})
export class WeekDayHubUI extends HubUI<WeekDay> implements IHubUI<WeekDay> {

  constructor(public override service: WeekDay_Service = inject(WeekDay_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Service Oriented Work Time', () => this.onAddServiceOrientedWorkTime()),
			new DropdownMenuItem('Add  Work Time', () => this.onAddWorkTime()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('serviceOrientedWorkTimeEditUI')
  public serviceOrientedWorkTimeEditUI!: ServiceOrientedWorkTimeEditUI;

  onAddServiceOrientedWorkTime() {
    let serviceOrientedWorkTime = new ServiceOrientedWorkTime();
    serviceOrientedWorkTime.weekDay = this.currentInstance;
    this.serviceOrientedWorkTimeEditUI.Show(serviceOrientedWorkTime);
  }


	
  @ViewChild('workTimeEditUI')
  public workTimeEditUI!: WorkTimeEditUI;

  onAddWorkTime() {
    let workTime = new WorkTime();
    workTime.weekDay = this.currentInstance;
    this.workTimeEditUI.Show(workTime);
  }


}
