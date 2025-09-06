

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ExceptionBackend } from '.';


@Injectable({ providedIn: 'root' })
export class ExceptionBackend_Builder extends ServiceBuilder<ExceptionBackend> implements IServiceBuilder<ExceptionBackend> {

  constructor() {
        super();
    }

  
  BuildInstance(): ExceptionBackend;
  BuildInstance(id: number): ExceptionBackend;
  BuildInstance(id: number, descriptor: string): ExceptionBackend;
  BuildInstance(id: number = 0, descriptor: string = ''): ExceptionBackend {
    return new ExceptionBackend(id, descriptor);
  }

  BuildSeekInstance(): ExceptionBackend {
    return ExceptionBackend_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ExceptionBackend {
    let exceptionBackend = new ExceptionBackend();
    exceptionBackend.date = undefined;
		exceptionBackend.time = undefined;
    return exceptionBackend;
  }
}