

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { WorkTime, WorkTime_Service } from '..';
import { WorkTimeEditUI } from '../edit/workTime.edit'
import { WorkTimeDeleteUI } from '../delete/workTime.delete'
import { Provider } from '../../provider';
import { WeekDay } from '../../weekDay';



@Component({
  selector: 'base-workTime-index',
  templateUrl: './workTime.hub.html',
  styleUrls: ['./workTime.hub.scss'],
  providers: [WorkTime_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    WorkTimeEditUI,
    WorkTimeDeleteUI,
    LookupComponent,
  ]
})
export class WorkTimeHubUI extends HubUI<WorkTime> implements IHubUI<WorkTime> {

  constructor(public override service: WorkTime_Service = inject(WorkTime_Service)) {
    super(service);
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
		this.weekDayLinker = new ForeignkeyLinker<WeekDay>(this.service.weekDayService, false);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Provider', () => this.navigateToUrl('/base/provider')),
			new DropdownMenuItem('Manage  Week Day', () => this.navigateToUrl('/base/weekDay')),
		];
  }

  public providerLinker: ForeignkeyLinker<Provider>;

	public weekDayLinker: ForeignkeyLinker<WeekDay>;

  

}
