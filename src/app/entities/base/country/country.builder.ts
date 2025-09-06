

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Country } from '.';


@Injectable({ providedIn: 'root' })
export class Country_Builder extends ServiceBuilder<Country> implements IServiceBuilder<Country> {

  constructor() {
        super();
    }

  
  BuildInstance(): Country;
  BuildInstance(id: number): Country;
  BuildInstance(id: number, descriptor: string): Country;
  BuildInstance(id: number = 0, descriptor: string = ''): Country {
    return new Country(id, descriptor);
  }

  BuildSeekInstance(): Country {
    return Country_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Country {
    let country = new Country();
    country.isActive = undefined;
    return country;
  }
}