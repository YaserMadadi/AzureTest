
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { City } from '.';
import { Client, Client_Builder } from '../client';
import { LocationCoverage, LocationCoverage_Builder } from '../locationCoverage';


@Injectable({ providedIn: 'root' })
export class City_ServiceCollection extends ServiceCollection<City> implements IServiceCollection<City> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfClient(city_id: number, client: Client = Client_Builder.BuildSeekInstance()): Observable<Client[]> {
    return super.CollectionOf<Client>(new City(city_id), client);
  }

  CollectionOfLocationCoverage(city_id: number, locationCoverage: LocationCoverage = LocationCoverage_Builder.BuildSeekInstance()): Observable<LocationCoverage[]> {
    return super.CollectionOf<LocationCoverage>(new City(city_id), locationCoverage);
  }

	//#endregion
}
