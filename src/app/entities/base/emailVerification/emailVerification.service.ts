

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { EmailVerification, EmailVerification_Builder } from '.';

import { UserAccount_Service } from '../userAccount';
import { VerificationStatus_Service } from '../verificationStatus';


@Injectable({ providedIn: 'root' })
export class EmailVerification_Service extends Service<EmailVerification> implements IService<EmailVerification> {

  constructor() {
    super(EmailVerification.Info, inject(EmailVerification_Builder));
  }

  //#region Related Services
  
  public userAccountService: UserAccount_Service = inject(UserAccount_Service);

	public verificationStatusService: VerificationStatus_Service = inject(VerificationStatus_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<EmailVerification> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<EmailVerification[]> {
    return super.RetrieveAll();
  }

  override Save(emailVerification: EmailVerification): Observable<EmailVerification> {
    if (!EmailVerification.Validate(emailVerification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(emailVerification);
    }
    return super.Save(emailVerification);
  }

  override SaveAttached(emailVerification: EmailVerification): Observable<EmailVerification> {
    if (!EmailVerification.Validate(emailVerification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(emailVerification);
    }
    return super.SaveAttached(emailVerification);
  }

  override SaveCollection(emailVerificationList: EmailVerification[]): Observable<Result> {
    return super.SaveCollection(emailVerificationList);
  }

  override Delete(emailVerification: EmailVerification): Observable<boolean> {
    return super.Delete(emailVerification);
  }

  override Seek(emailVerification: EmailVerification = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<EmailVerification[]> {
    return super.Seek(emailVerification); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(emailVerification: EmailVerification): Observable<EmailVerification> {
    return super.SeekLast(emailVerification);
  }

  override SeekByValue(value: string = ''): Observable<EmailVerification[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
