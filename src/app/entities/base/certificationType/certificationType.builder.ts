

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { CertificationType } from '.';


@Injectable({ providedIn: 'root' })
export class CertificationType_Builder extends ServiceBuilder<CertificationType> implements IServiceBuilder<CertificationType> {

  constructor() {
        super();
    }

  
  BuildInstance(): CertificationType;
  BuildInstance(id: number): CertificationType;
  BuildInstance(id: number, descriptor: string): CertificationType;
  BuildInstance(id: number = 0, descriptor: string = ''): CertificationType {
    return new CertificationType(id, descriptor);
  }

  BuildSeekInstance(): CertificationType {
    return CertificationType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): CertificationType {
    let certificationType = new CertificationType();
    certificationType.isIndividual = undefined;
		certificationType.isEnterprise = undefined;
    return certificationType;
  }
}