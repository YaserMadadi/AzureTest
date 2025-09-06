

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { PhoneNumberVerification } from '.';


@Injectable({ providedIn: 'root' })
export class PhoneNumberVerification_Builder extends ServiceBuilder<PhoneNumberVerification> implements IServiceBuilder<PhoneNumberVerification> {

  constructor() {
        super();
    }

  
  BuildInstance(): PhoneNumberVerification;
  BuildInstance(id: number): PhoneNumberVerification;
  BuildInstance(id: number, descriptor: string): PhoneNumberVerification;
  BuildInstance(id: number = 0, descriptor: string = ''): PhoneNumberVerification {
    return new PhoneNumberVerification(id, descriptor);
  }

  BuildSeekInstance(): PhoneNumberVerification {
    return PhoneNumberVerification_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): PhoneNumberVerification {
    let phoneNumberVerification = new PhoneNumberVerification();
    phoneNumberVerification.client = undefined;
		phoneNumberVerification.generateTime = undefined;
		phoneNumberVerification.expiryDate = undefined;
		phoneNumberVerification.verificationStatus = undefined;
    return phoneNumberVerification;
  }
}