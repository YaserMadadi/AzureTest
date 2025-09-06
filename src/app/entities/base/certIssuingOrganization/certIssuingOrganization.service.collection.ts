
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { CertIssuingOrganization } from '.';
import { Certification, Certification_Builder } from '../certification';


@Injectable({ providedIn: 'root' })
export class CertIssuingOrganization_ServiceCollection extends ServiceCollection<CertIssuingOrganization> implements IServiceCollection<CertIssuingOrganization> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfCertification(certIssuingOrganization_id: number, certification: Certification = Certification_Builder.BuildSeekInstance()): Observable<Certification[]> {
    return super.CollectionOf<Certification>(new CertIssuingOrganization(certIssuingOrganization_id), certification);
  }

	//#endregion
}
