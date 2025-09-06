
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';
import { Provider_ServiceCollection } from '../provider';
import { IndividualProvider } from '.';


@Injectable({ providedIn: 'root' })
export class IndividualProvider_ServiceCollection extends Provider_ServiceCollection<IndividualProvider> implements IServiceCollection<IndividualProvider> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
