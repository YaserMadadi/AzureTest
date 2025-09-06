
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Province } from '.';
import { City, City_Builder } from '../city';


@Injectable({ providedIn: 'root' })
export class Province_ServiceCollection extends ServiceCollection<Province> implements IServiceCollection<Province> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfCity(province_id: number, city: City = City_Builder.BuildSeekInstance()): Observable<City[]> {
    return super.CollectionOf<City>(new Province(province_id), city);
  }

	//#endregion
}
