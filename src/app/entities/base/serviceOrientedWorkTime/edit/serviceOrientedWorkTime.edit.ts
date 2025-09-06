

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Service } from '..';
import { ProviderService } from '../../providerService';
import { WeekDay } from '../../weekDay';



@Component({
  selector: 'base-serviceOrientedWorkTime-edit',
  templateUrl: './serviceOrientedWorkTime.edit.html',
  styleUrls: ['./serviceOrientedWorkTime.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ServiceOrientedWorkTimeEditUI extends EditUI<ServiceOrientedWorkTime> {
    
  constructor(public override service: ServiceOrientedWorkTime_Service = inject(ServiceOrientedWorkTime_Service )) {
    super(service); 
    this.providerServiceLinker = new ForeignkeyLinker<ProviderService>(this.service.providerServiceService, true);
		this.weekDayLinker = new ForeignkeyLinker<WeekDay>(this.service.weekDayService, false);
  }

  @Input() 
  set providerServiceLocked(value: boolean) {
    this.providerServiceLinker.locked = value;
  }

	@Input() 
  set weekDayLocked(value: boolean) {
    this.weekDayLinker.locked = value;
  }

  public providerServiceLinker: ForeignkeyLinker<ProviderService>;

	public weekDayLinker: ForeignkeyLinker<WeekDay>;

}
