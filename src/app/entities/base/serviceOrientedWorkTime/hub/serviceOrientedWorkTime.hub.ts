

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Service } from '..';
import { ServiceOrientedWorkTimeEditUI } from '../edit/serviceOrientedWorkTime.edit'
import { ServiceOrientedWorkTimeDeleteUI } from '../delete/serviceOrientedWorkTime.delete'
import { ProviderService } from '../../providerService';
import { WeekDay } from '../../weekDay';



@Component({
  selector: 'base-serviceOrientedWorkTime-index',
  templateUrl: './serviceOrientedWorkTime.hub.html',
  styleUrls: ['./serviceOrientedWorkTime.hub.scss'],
  providers: [ServiceOrientedWorkTime_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ServiceOrientedWorkTimeEditUI,
    ServiceOrientedWorkTimeDeleteUI,
    LookupComponent,
  ]
})
export class ServiceOrientedWorkTimeHubUI extends HubUI<ServiceOrientedWorkTime> implements IHubUI<ServiceOrientedWorkTime> {

  constructor(public override service: ServiceOrientedWorkTime_Service = inject(ServiceOrientedWorkTime_Service)) {
    super(service);
    this.providerServiceLinker = new ForeignkeyLinker<ProviderService>(this.service.providerServiceService, true);
		this.weekDayLinker = new ForeignkeyLinker<WeekDay>(this.service.weekDayService, false);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Provider Service', () => this.navigateToUrl('/base/providerService')),
			new DropdownMenuItem('Manage  Week Day', () => this.navigateToUrl('/base/weekDay')),
		];
  }

  public providerServiceLinker: ForeignkeyLinker<ProviderService>;

	public weekDayLinker: ForeignkeyLinker<WeekDay>;

  

}
