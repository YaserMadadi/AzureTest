
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { MenuItem } from '.';


@Injectable({ providedIn: 'root' })
export class MenuItem_ServiceCollection extends ServiceCollection<MenuItem> implements IServiceCollection<MenuItem> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
