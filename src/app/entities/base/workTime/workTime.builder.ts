

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { WorkTime } from '.';


@Injectable({ providedIn: 'root' })
export class WorkTime_Builder extends ServiceBuilder<WorkTime> implements IServiceBuilder<WorkTime> {

  constructor() {
        super();
    }

  
  BuildInstance(): WorkTime;
  BuildInstance(id: number): WorkTime;
  BuildInstance(id: number, descriptor: string): WorkTime;
  BuildInstance(id: number = 0, descriptor: string = ''): WorkTime {
    return new WorkTime(id, descriptor);
  }

  BuildSeekInstance(): WorkTime {
    return WorkTime_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): WorkTime {
    let workTime = new WorkTime();
    workTime.provider = undefined;
		workTime.weekDay = undefined;
		workTime.from = undefined;
		workTime.to = undefined;
		workTime.isActive = undefined;
    return workTime;
  }
}