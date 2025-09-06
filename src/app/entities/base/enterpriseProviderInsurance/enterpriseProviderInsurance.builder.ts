

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { EnterpriseProviderInsurance } from '.';


@Injectable({ providedIn: 'root' })
export class EnterpriseProviderInsurance_Builder extends ServiceBuilder<EnterpriseProviderInsurance> implements IServiceBuilder<EnterpriseProviderInsurance> {

  constructor() {
        super();
    }

  
  BuildInstance(): EnterpriseProviderInsurance;
  BuildInstance(id: number): EnterpriseProviderInsurance;
  BuildInstance(id: number, descriptor: string): EnterpriseProviderInsurance;
  BuildInstance(id: number = 0, descriptor: string = ''): EnterpriseProviderInsurance {
    return new EnterpriseProviderInsurance(id, descriptor);
  }

  BuildSeekInstance(): EnterpriseProviderInsurance {
    return EnterpriseProviderInsurance_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): EnterpriseProviderInsurance {
    let enterpriseProviderInsurance = new EnterpriseProviderInsurance();
    enterpriseProviderInsurance.enterpriseProvider = undefined;
		enterpriseProviderInsurance.isActive = undefined;
    return enterpriseProviderInsurance;
  }
}