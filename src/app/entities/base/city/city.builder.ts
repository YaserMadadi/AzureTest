

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { City } from '.';


@Injectable({ providedIn: 'root' })
export class City_Builder extends ServiceBuilder<City> implements IServiceBuilder<City> {

  constructor() {
        super();
    }

  
  BuildInstance(): City;
  BuildInstance(id: number): City;
  BuildInstance(id: number, descriptor: string): City;
  BuildInstance(id: number = 0, descriptor: string = ''): City {
    return new City(id, descriptor);
  }

  BuildSeekInstance(): City {
    return City_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): City {
    let city = new City();
    city.province = undefined;
		city.isActive = undefined;
    return city;
  }
}