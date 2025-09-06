
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { ProviderService, ProviderService_ServiceCollection } from '../../providerService';
import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Builder } from '../../serviceOrientedWorkTime';
import { ServiceOrientedWorkTimeEditUI } from '../../serviceOrientedWorkTime/edit/serviceOrientedWorkTime.edit'
import { ServiceOrientedWorkTimeDeleteUI } from '../../serviceOrientedWorkTime/delete/serviceOrientedWorkTime.delete'
import { WeekDay, WeekDay_Service } from '../../weekDay';



@Component({
  selector: 'base-providerService-serviceOrientedWorkTime-detail',
  templateUrl: './providerService-serviceOrientedWorkTime.detail.html',
  styleUrls: ['./providerService-serviceOrientedWorkTime.detail.scss'],
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
export class ProviderService_ServiceOrientedWorkTime_DetailUI extends DetailUI<ProviderService, ServiceOrientedWorkTime> {

  constructor(private serviceCollection: ProviderService_ServiceCollection = inject(ProviderService_ServiceCollection)) {
    super(serviceCollection.CollectionOfServiceOrientedWorkTime.bind(serviceCollection), inject(ServiceOrientedWorkTime_Builder));
    this.currentInstance = new ServiceOrientedWorkTime();
  }

  @Input()
  public set providerService(value: ProviderService) {
    this.masterInstance = { ...value };
    //this.currentInstance.providerService = { ...value };
    this.sourceInstance.providerService = { ...value };
  }

  public weekDayLinker: ForeignkeyLinker<WeekDay> = new ForeignkeyLinker<WeekDay>(inject(WeekDay_Service), false);

		

}
