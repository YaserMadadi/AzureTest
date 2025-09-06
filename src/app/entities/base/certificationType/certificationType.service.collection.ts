
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { CertificationType } from '.';
import { Certification, Certification_Builder } from '../certification';


@Injectable({ providedIn: 'root' })
export class CertificationType_ServiceCollection extends ServiceCollection<CertificationType> implements IServiceCollection<CertificationType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfCertification(certificationType_id: number, certification: Certification = Certification_Builder.BuildSeekInstance()): Observable<Certification[]> {
    return super.CollectionOf<Certification>(new CertificationType(certificationType_id), certification);
  }

	//#endregion
}
