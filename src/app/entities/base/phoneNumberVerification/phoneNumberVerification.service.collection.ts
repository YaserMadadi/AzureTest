
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { PhoneNumberVerification } from '.';


@Injectable({ providedIn: 'root' })
export class PhoneNumberVerification_ServiceCollection extends ServiceCollection<PhoneNumberVerification> implements IServiceCollection<PhoneNumberVerification> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
