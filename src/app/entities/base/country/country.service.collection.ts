
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Country } from '.';
import { Province, Province_Builder } from '../province';


@Injectable({ providedIn: 'root' })
export class Country_ServiceCollection extends ServiceCollection<Country> implements IServiceCollection<Country> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfProvince(country_id: number, province: Province = Province_Builder.BuildSeekInstance()): Observable<Province[]> {
    return super.CollectionOf<Province>(new Country(country_id), province);
  }

	//#endregion
}
