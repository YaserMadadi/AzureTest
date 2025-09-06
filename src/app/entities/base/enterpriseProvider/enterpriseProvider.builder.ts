

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { EnterpriseProvider } from '.';


@Injectable({ providedIn: 'root' })
export class EnterpriseProvider_Builder extends ServiceBuilder<EnterpriseProvider> implements IServiceBuilder<EnterpriseProvider> {

  constructor() {
        super();
    }

  
  BuildInstance(): EnterpriseProvider;
  BuildInstance(id: number): EnterpriseProvider;
  BuildInstance(id: number, descriptor: string): EnterpriseProvider;
  BuildInstance(id: number = 0, descriptor: string = ''): EnterpriseProvider {
    return new EnterpriseProvider(id, descriptor);
  }

  BuildSeekInstance(): EnterpriseProvider {
    return EnterpriseProvider_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): EnterpriseProvider {
    let enterpriseProvider = new EnterpriseProvider();
    
    return enterpriseProvider;
  }
}