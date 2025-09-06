
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { WeekDay, WeekDay_ServiceCollection } from '../../weekDay';
import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Builder } from '../../serviceOrientedWorkTime';
import { ServiceOrientedWorkTimeEditUI } from '../../serviceOrientedWorkTime/edit/serviceOrientedWorkTime.edit'
import { ServiceOrientedWorkTimeDeleteUI } from '../../serviceOrientedWorkTime/delete/serviceOrientedWorkTime.delete'
import { ProviderService, ProviderService_Service } from '../../providerService';



@Component({
  selector: 'base-weekDay-serviceOrientedWorkTime-detail',
  templateUrl: './weekDay-serviceOrientedWorkTime.detail.html',
  styleUrls: ['./weekDay-serviceOrientedWorkTime.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ServiceOrientedWorkTimeEditUI,        
    ServiceOrientedWorkTimeDeleteUI,
  ]
}) 
export class WeekDay_ServiceOrientedWorkTime_DetailUI extends DetailUI<WeekDay, ServiceOrientedWorkTime> {

  constructor(private serviceCollection: WeekDay_ServiceCollection = inject(WeekDay_ServiceCollection)) {
    super(serviceCollection.CollectionOfServiceOrientedWorkTime.bind(serviceCollection), inject(ServiceOrientedWorkTime_Builder));
    this.currentInstance = new ServiceOrientedWorkTime();
  }

  @Input()
  public set weekDay(value: WeekDay) {
    this.masterInstance = { ...value };
    //this.currentInstance.weekDay = { ...value };
    this.sourceInstance.weekDay = { ...value };
  }

  public providerServiceLinker: ForeignkeyLinker<ProviderService> = new ForeignkeyLinker<ProviderService>(inject(ProviderService_Service), true);

		

}
