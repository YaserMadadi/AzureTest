

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { VerificationStatus } from '.';


@Injectable({ providedIn: 'root' })
export class VerificationStatus_Builder extends ServiceBuilder<VerificationStatus> implements IServiceBuilder<VerificationStatus> {

  constructor() {
        super();
    }

  
  BuildInstance(): VerificationStatus;
  BuildInstance(id: number): VerificationStatus;
  BuildInstance(id: number, descriptor: string): VerificationStatus;
  BuildInstance(id: number = 0, descriptor: string = ''): VerificationStatus {
    return new VerificationStatus(id, descriptor);
  }

  BuildSeekInstance(): VerificationStatus {
    return VerificationStatus_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): VerificationStatus {
    let verificationStatus = new VerificationStatus();
    verificationStatus.isActive = undefined;
		verificationStatus.isVerified = undefined;
    return verificationStatus;
  }
}