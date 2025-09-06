

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { WeekDay } from '.';


@Injectable({ providedIn: 'root' })
export class WeekDay_Builder extends ServiceBuilder<WeekDay> implements IServiceBuilder<WeekDay> {

  constructor() {
        super();
    }

  
  BuildInstance(): WeekDay;
  BuildInstance(id: number): WeekDay;
  BuildInstance(id: number, descriptor: string): WeekDay;
  BuildInstance(id: number = 0, descriptor: string = ''): WeekDay {
    return new WeekDay(id, descriptor);
  }

  BuildSeekInstance(): WeekDay {
    return WeekDay_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): WeekDay {
    let weekDay = new WeekDay();
    
    return weekDay;
  }
}