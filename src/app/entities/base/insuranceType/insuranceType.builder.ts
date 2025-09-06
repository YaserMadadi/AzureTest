

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { InsuranceType } from '.';


@Injectable({ providedIn: 'root' })
export class InsuranceType_Builder extends ServiceBuilder<InsuranceType> implements IServiceBuilder<InsuranceType> {

  constructor() {
        super();
    }

  
  BuildInstance(): InsuranceType;
  BuildInstance(id: number): InsuranceType;
  BuildInstance(id: number, descriptor: string): InsuranceType;
  BuildInstance(id: number = 0, descriptor: string = ''): InsuranceType {
    return new InsuranceType(id, descriptor);
  }

  BuildSeekInstance(): InsuranceType {
    return InsuranceType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): InsuranceType {
    let insuranceType = new InsuranceType();
    insuranceType.isActive = undefined;
    return insuranceType;
  }
}