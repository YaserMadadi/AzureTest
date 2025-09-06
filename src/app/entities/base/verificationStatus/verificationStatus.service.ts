

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { VerificationStatus, VerificationStatus_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class VerificationStatus_Service extends Service<VerificationStatus> implements IService<VerificationStatus> {

  constructor() {
    super(VerificationStatus.Info, inject(VerificationStatus_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<VerificationStatus> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<VerificationStatus[]> {
    return super.RetrieveAll();
  }

  override Save(verificationStatus: VerificationStatus): Observable<VerificationStatus> {
    if (!VerificationStatus.Validate(verificationStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(verificationStatus);
    }
    return super.Save(verificationStatus);
  }

  override SaveAttached(verificationStatus: VerificationStatus): Observable<VerificationStatus> {
    if (!VerificationStatus.Validate(verificationStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(verificationStatus);
    }
    return super.SaveAttached(verificationStatus);
  }

  override SaveCollection(verificationStatusList: VerificationStatus[]): Observable<Result> {
    return super.SaveCollection(verificationStatusList);
  }

  override Delete(verificationStatus: VerificationStatus): Observable<boolean> {
    return super.Delete(verificationStatus);
  }

  override Seek(verificationStatus: VerificationStatus = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<VerificationStatus[]> {
    return super.Seek(verificationStatus); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(verificationStatus: VerificationStatus): Observable<VerificationStatus> {
    return super.SeekLast(verificationStatus);
  }

  override SeekByValue(value: string = ''): Observable<VerificationStatus[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
