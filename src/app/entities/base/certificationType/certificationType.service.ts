

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { CertificationType, CertificationType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class CertificationType_Service extends Service<CertificationType> implements IService<CertificationType> {

  constructor() {
    super(CertificationType.Info, inject(CertificationType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<CertificationType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<CertificationType[]> {
    return super.RetrieveAll();
  }

  override Save(certificationType: CertificationType): Observable<CertificationType> {
    if (!CertificationType.Validate(certificationType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(certificationType);
    }
    return super.Save(certificationType);
  }

  override SaveAttached(certificationType: CertificationType): Observable<CertificationType> {
    if (!CertificationType.Validate(certificationType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(certificationType);
    }
    return super.SaveAttached(certificationType);
  }

  override SaveCollection(certificationTypeList: CertificationType[]): Observable<Result> {
    return super.SaveCollection(certificationTypeList);
  }

  override Delete(certificationType: CertificationType): Observable<boolean> {
    return super.Delete(certificationType);
  }

  override Seek(certificationType: CertificationType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<CertificationType[]> {
    return super.Seek(certificationType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(certificationType: CertificationType): Observable<CertificationType> {
    return super.SeekLast(certificationType);
  }

  override SeekByValue(value: string = ''): Observable<CertificationType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
