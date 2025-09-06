

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { PhoneNumberVerification, PhoneNumberVerification_Builder } from '.';

import { Client_Service } from '../client';
import { VerificationStatus_Service } from '../verificationStatus';


@Injectable({ providedIn: 'root' })
export class PhoneNumberVerification_Service extends Service<PhoneNumberVerification> implements IService<PhoneNumberVerification> {

  constructor() {
    super(PhoneNumberVerification.Info, inject(PhoneNumberVerification_Builder));
  }

  //#region Related Services
  
  public clientService: Client_Service = inject(Client_Service);

	public verificationStatusService: VerificationStatus_Service = inject(VerificationStatus_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<PhoneNumberVerification> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<PhoneNumberVerification[]> {
    return super.RetrieveAll();
  }

  override Save(phoneNumberVerification: PhoneNumberVerification): Observable<PhoneNumberVerification> {
    if (!PhoneNumberVerification.Validate(phoneNumberVerification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(phoneNumberVerification);
    }
    return super.Save(phoneNumberVerification);
  }

  override SaveAttached(phoneNumberVerification: PhoneNumberVerification): Observable<PhoneNumberVerification> {
    if (!PhoneNumberVerification.Validate(phoneNumberVerification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(phoneNumberVerification);
    }
    return super.SaveAttached(phoneNumberVerification);
  }

  override SaveCollection(phoneNumberVerificationList: PhoneNumberVerification[]): Observable<Result> {
    return super.SaveCollection(phoneNumberVerificationList);
  }

  override Delete(phoneNumberVerification: PhoneNumberVerification): Observable<boolean> {
    return super.Delete(phoneNumberVerification);
  }

  override Seek(phoneNumberVerification: PhoneNumberVerification = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<PhoneNumberVerification[]> {
    return super.Seek(phoneNumberVerification); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(phoneNumberVerification: PhoneNumberVerification): Observable<PhoneNumberVerification> {
    return super.SeekLast(phoneNumberVerification);
  }

  override SeekByValue(value: string = ''): Observable<PhoneNumberVerification[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
