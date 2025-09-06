

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { RecordLog } from '.';


@Injectable({ providedIn: 'root' })
export class RecordLog_Builder extends ServiceBuilder<RecordLog> implements IServiceBuilder<RecordLog> {

  constructor() {
        super();
    }

  
  BuildInstance(): RecordLog;
  BuildInstance(id: number): RecordLog;
  BuildInstance(id: number, descriptor: string): RecordLog;
  BuildInstance(id: number = 0, descriptor: string = ''): RecordLog {
    return new RecordLog(id, descriptor);
  }

  BuildSeekInstance(): RecordLog {
    return RecordLog_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): RecordLog {
    let recordLog = new RecordLog();
    recordLog.effectDate = undefined;
    return recordLog;
  }
}