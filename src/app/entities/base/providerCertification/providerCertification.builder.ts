

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderCertification } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderCertification_Builder extends ServiceBuilder<ProviderCertification> implements IServiceBuilder<ProviderCertification> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderCertification;
  BuildInstance(id: number): ProviderCertification;
  BuildInstance(id: number, descriptor: string): ProviderCertification;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderCertification {
    return new ProviderCertification(id, descriptor);
  }

  BuildSeekInstance(): ProviderCertification {
    return ProviderCertification_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderCertification {
    let providerCertification = new ProviderCertification();
    providerCertification.provider = undefined;
		providerCertification.certification = undefined;
		providerCertification.dateIssued = undefined;
		providerCertification.expiryDate = undefined;
		providerCertification.isApproved = undefined;
		providerCertification.isActive = undefined;
    return providerCertification;
  }
}