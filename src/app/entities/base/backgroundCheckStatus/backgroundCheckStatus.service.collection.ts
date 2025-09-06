
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { BackgroundCheckStatus } from '.';
import { IndividualProvider, IndividualProvider_Builder } from '../individualProvider';


@Injectable({ providedIn: 'root' })
export class BackgroundCheckStatus_ServiceCollection extends ServiceCollection<BackgroundCheckStatus> implements IServiceCollection<BackgroundCheckStatus> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfIndividualProvider(backgroundCheckStatus_id: number, individualProvider: IndividualProvider = IndividualProvider_Builder.BuildSeekInstance()): Observable<IndividualProvider[]> {
    return super.CollectionOf<IndividualProvider>(new BackgroundCheckStatus(backgroundCheckStatus_id), individualProvider);
  }

	//#endregion
}
