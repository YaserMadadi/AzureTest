

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ExceptionProcedure } from '.';


@Injectable({ providedIn: 'root' })
export class ExceptionProcedure_Builder extends ServiceBuilder<ExceptionProcedure> implements IServiceBuilder<ExceptionProcedure> {

  constructor() {
        super();
    }

  
  BuildInstance(): ExceptionProcedure;
  BuildInstance(id: number): ExceptionProcedure;
  BuildInstance(id: number, descriptor: string): ExceptionProcedure;
  BuildInstance(id: number = 0, descriptor: string = ''): ExceptionProcedure {
    return new ExceptionProcedure(id, descriptor);
  }

  BuildSeekInstance(): ExceptionProcedure {
    return ExceptionProcedure_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ExceptionProcedure {
    let exceptionProcedure = new ExceptionProcedure();
    exceptionProcedure.date = undefined;
		exceptionProcedure.time = undefined;
		exceptionProcedure.isChecked = undefined;
    return exceptionProcedure;
  }
}