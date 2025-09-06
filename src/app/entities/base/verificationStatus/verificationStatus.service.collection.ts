
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { VerificationStatus } from '.';
import { Client, Client_Builder } from '../client';
import { EmailVerification, EmailVerification_Builder } from '../emailVerification';
import { PhoneNumberVerification, PhoneNumberVerification_Builder } from '../phoneNumberVerification';


@Injectable({ providedIn: 'root' })
export class VerificationStatus_ServiceCollection extends ServiceCollection<VerificationStatus> implements IServiceCollection<VerificationStatus> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfClient_PhoneVerificationStatus(phoneVerificationStatus_id: number, client: Client = Client_Builder.BuildSeekInstance()): Observable<Client[]> {
    return super.CollectionOf<Client>(new VerificationStatus(phoneVerificationStatus_id), client);
  }

  CollectionOfEmailVerification(verificationStatus_id: number, emailVerification: EmailVerification = EmailVerification_Builder.BuildSeekInstance()): Observable<EmailVerification[]> {
    return super.CollectionOf<EmailVerification>(new VerificationStatus(verificationStatus_id), emailVerification);
  }

  CollectionOfPhoneNumberVerification(verificationStatus_id: number, phoneNumberVerification: PhoneNumberVerification = PhoneNumberVerification_Builder.BuildSeekInstance()): Observable<PhoneNumberVerification[]> {
    return super.CollectionOf<PhoneNumberVerification>(new VerificationStatus(verificationStatus_id), phoneNumberVerification);
  }

	//#endregion
}
