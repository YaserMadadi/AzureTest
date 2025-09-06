
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { WeekDay } from '.';
import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Builder } from '../serviceOrientedWorkTime';
import { WorkTime, WorkTime_Builder } from '../workTime';


@Injectable({ providedIn: 'root' })
export class WeekDay_ServiceCollection extends ServiceCollection<WeekDay> implements IServiceCollection<WeekDay> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfServiceOrientedWorkTime(weekDay_id: number, serviceOrientedWorkTime: ServiceOrientedWorkTime = ServiceOrientedWorkTime_Builder.BuildSeekInstance()): Observable<ServiceOrientedWorkTime[]> {
    return super.CollectionOf<ServiceOrientedWorkTime>(new WeekDay(weekDay_id), serviceOrientedWorkTime);
  }

  CollectionOfWorkTime(weekDay_id: number, workTime: WorkTime = WorkTime_Builder.BuildSeekInstance()): Observable<WorkTime[]> {
    return super.CollectionOf<WorkTime>(new WeekDay(weekDay_id), workTime);
  }

	//#endregion
}
