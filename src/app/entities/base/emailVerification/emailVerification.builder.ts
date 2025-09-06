

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { EmailVerification } from '.';


@Injectable({ providedIn: 'root' })
export class EmailVerification_Builder extends ServiceBuilder<EmailVerification> implements IServiceBuilder<EmailVerification> {

  constructor() {
        super();
    }

  
  BuildInstance(): EmailVerification;
  BuildInstance(id: number): EmailVerification;
  BuildInstance(id: number, descriptor: string): EmailVerification;
  BuildInstance(id: number = 0, descriptor: string = ''): EmailVerification {
    return new EmailVerification(id, descriptor);
  }

  BuildSeekInstance(): EmailVerification {
    return EmailVerification_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): EmailVerification {
    let emailVerification = new EmailVerification();
    emailVerification.userAccount = undefined;
		emailVerification.generateTime = undefined;
		emailVerification.expiryDate = undefined;
		emailVerification.verificationStatus = undefined;
    return emailVerification;
  }
}