

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { WorkTime, WorkTime_Service } from '..';
import { Provider } from '../../provider';
import { WeekDay } from '../../weekDay';



@Component({
  selector: 'base-workTime-edit',
  templateUrl: './workTime.edit.html',
  styleUrls: ['./workTime.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class WorkTimeEditUI extends EditUI<WorkTime> {
    
  constructor(public override service: WorkTime_Service = inject(WorkTime_Service )) {
    super(service); 
    this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
		this.weekDayLinker = new ForeignkeyLinker<WeekDay>(this.service.weekDayService, false);
  }

  @Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

	@Input() 
  set weekDayLocked(value: boolean) {
    this.weekDayLinker.locked = value;
  }

  public providerLinker: ForeignkeyLinker<Provider>;

	public weekDayLinker: ForeignkeyLinker<WeekDay>;

}
