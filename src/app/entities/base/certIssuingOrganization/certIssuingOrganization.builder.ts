

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { CertIssuingOrganization } from '.';


@Injectable({ providedIn: 'root' })
export class CertIssuingOrganization_Builder extends ServiceBuilder<CertIssuingOrganization> implements IServiceBuilder<CertIssuingOrganization> {

  constructor() {
        super();
    }

  
  BuildInstance(): CertIssuingOrganization;
  BuildInstance(id: number): CertIssuingOrganization;
  BuildInstance(id: number, descriptor: string): CertIssuingOrganization;
  BuildInstance(id: number = 0, descriptor: string = ''): CertIssuingOrganization {
    return new CertIssuingOrganization(id, descriptor);
  }

  BuildSeekInstance(): CertIssuingOrganization {
    return CertIssuingOrganization_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): CertIssuingOrganization {
    let certIssuingOrganization = new CertIssuingOrganization();
    certIssuingOrganization.isActive = undefined;
    return certIssuingOrganization;
  }
}