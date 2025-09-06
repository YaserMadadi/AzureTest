
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Certification } from '.';
import { ProviderCertification, ProviderCertification_Builder } from '../providerCertification';


@Injectable({ providedIn: 'root' })
export class Certification_ServiceCollection extends ServiceCollection<Certification> implements IServiceCollection<Certification> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfProviderCertification(certification_id: number, providerCertification: ProviderCertification = ProviderCertification_Builder.BuildSeekInstance()): Observable<ProviderCertification[]> {
    return super.CollectionOf<ProviderCertification>(new Certification(certification_id), providerCertification);
  }

	//#endregion
}
