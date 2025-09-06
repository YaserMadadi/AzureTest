

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { LocationCoverage } from '.';


@Injectable({ providedIn: 'root' })
export class LocationCoverage_Builder extends ServiceBuilder<LocationCoverage> implements IServiceBuilder<LocationCoverage> {

  constructor() {
        super();
    }

  
  BuildInstance(): LocationCoverage;
  BuildInstance(id: number): LocationCoverage;
  BuildInstance(id: number, descriptor: string): LocationCoverage;
  BuildInstance(id: number = 0, descriptor: string = ''): LocationCoverage {
    return new LocationCoverage(id, descriptor);
  }

  BuildSeekInstance(): LocationCoverage {
    return LocationCoverage_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): LocationCoverage {
    let locationCoverage = new LocationCoverage();
    locationCoverage.provider = undefined;
		locationCoverage.city = undefined;
		locationCoverage.isActive = undefined;
    return locationCoverage;
  }
}