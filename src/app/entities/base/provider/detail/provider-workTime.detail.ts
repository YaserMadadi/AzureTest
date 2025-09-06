
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Provider, Provider_ServiceCollection } from '../../provider';
import { WorkTime, WorkTime_Builder } from '../../workTime';
import { WorkTimeEditUI } from '../../workTime/edit/workTime.edit'
import { WorkTimeDeleteUI } from '../../workTime/delete/workTime.delete'
import { WeekDay, WeekDay_Service } from '../../weekDay';



@Component({
  selector: 'base-provider-workTime-detail',
  templateUrl: './provider-workTime.detail.html',
  styleUrls: ['./provider-workTime.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    WorkTimeEditUI,        
    WorkTimeDeleteUI,
  ]
}) 
export class Provider_WorkTime_DetailUI extends DetailUI<Provider, WorkTime> {

  constructor(private serviceCollection: Provider_ServiceCollection = inject(Provider_ServiceCollection)) {
    super(serviceCollection.CollectionOfWorkTime.bind(serviceCollection), inject(WorkTime_Builder));
    this.currentInstance = new WorkTime();
  }

  @Input()
  public set provider(value: Provider) {
    this.masterInstance = { ...value };
    //this.currentInstance.provider = { ...value };
    this.sourceInstance.provider = { ...value };
  }

  public weekDayLinker: ForeignkeyLinker<WeekDay> = new ForeignkeyLinker<WeekDay>(inject(WeekDay_Service), false);

		

}
