
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { LocationCoverage } from '.';


@Injectable({ providedIn: 'root' })
export class LocationCoverage_ServiceCollection extends ServiceCollection<LocationCoverage> implements IServiceCollection<LocationCoverage> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
