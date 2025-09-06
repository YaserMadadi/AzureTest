
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { EmailVerification } from '.';


@Injectable({ providedIn: 'root' })
export class EmailVerification_ServiceCollection extends ServiceCollection<EmailVerification> implements IServiceCollection<EmailVerification> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
