

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { IndividualProvider } from '.';


@Injectable({ providedIn: 'root' })
export class IndividualProvider_Builder extends ServiceBuilder<IndividualProvider> implements IServiceBuilder<IndividualProvider> {

  constructor() {
        super();
    }

  
  BuildInstance(): IndividualProvider;
  BuildInstance(id: number): IndividualProvider;
  BuildInstance(id: number, descriptor: string): IndividualProvider;
  BuildInstance(id: number = 0, descriptor: string = ''): IndividualProvider {
    return new IndividualProvider(id, descriptor);
  }

  BuildSeekInstance(): IndividualProvider {
    return IndividualProvider_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): IndividualProvider {
    let individualProvider = new IndividualProvider();
    individualProvider.gender = undefined;
		individualProvider.dateOfBirth = undefined;
		individualProvider.backgroundCheckStatus = undefined;
    return individualProvider;
  }
}