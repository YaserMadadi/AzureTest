
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { WeekDay, WeekDay_ServiceCollection } from '../../weekDay';
import { WorkTime, WorkTime_Builder } from '../../workTime';
import { WorkTimeEditUI } from '../../workTime/edit/workTime.edit'
import { WorkTimeDeleteUI } from '../../workTime/delete/workTime.delete'
import { Provider, Provider_Service } from '../../provider';



@Component({
  selector: 'base-weekDay-workTime-detail',
  templateUrl: './weekDay-workTime.detail.html',
  styleUrls: ['./weekDay-workTime.detail.scss'],
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
export class WeekDay_WorkTime_DetailUI extends DetailUI<WeekDay, WorkTime> {

  constructor(private serviceCollection: WeekDay_ServiceCollection = inject(WeekDay_ServiceCollection)) {
    super(serviceCollection.CollectionOfWorkTime.bind(serviceCollection), inject(WorkTime_Builder));
    this.currentInstance = new WorkTime();
  }

  @Input()
  public set weekDay(value: WeekDay) {
    this.masterInstance = { ...value };
    //this.currentInstance.weekDay = { ...value };
    this.sourceInstance.weekDay = { ...value };
  }

  public providerLinker: ForeignkeyLinker<Provider> = new ForeignkeyLinker<Provider>(inject(Provider_Service), true);

		

}
