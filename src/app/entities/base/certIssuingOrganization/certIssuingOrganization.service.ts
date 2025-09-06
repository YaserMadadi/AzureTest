

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { CertIssuingOrganization, CertIssuingOrganization_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class CertIssuingOrganization_Service extends Service<CertIssuingOrganization> implements IService<CertIssuingOrganization> {

  constructor() {
    super(CertIssuingOrganization.Info, inject(CertIssuingOrganization_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<CertIssuingOrganization> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<CertIssuingOrganization[]> {
    return super.RetrieveAll();
  }

  override Save(certIssuingOrganization: CertIssuingOrganization): Observable<CertIssuingOrganization> {
    if (!CertIssuingOrganization.Validate(certIssuingOrganization)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(certIssuingOrganization);
    }
    return super.Save(certIssuingOrganization);
  }

  override SaveAttached(certIssuingOrganization: CertIssuingOrganization): Observable<CertIssuingOrganization> {
    if (!CertIssuingOrganization.Validate(certIssuingOrganization)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(certIssuingOrganization);
    }
    return super.SaveAttached(certIssuingOrganization);
  }

  override SaveCollection(certIssuingOrganizationList: CertIssuingOrganization[]): Observable<Result> {
    return super.SaveCollection(certIssuingOrganizationList);
  }

  override Delete(certIssuingOrganization: CertIssuingOrganization): Observable<boolean> {
    return super.Delete(certIssuingOrganization);
  }

  override Seek(certIssuingOrganization: CertIssuingOrganization = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<CertIssuingOrganization[]> {
    return super.Seek(certIssuingOrganization); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(certIssuingOrganization: CertIssuingOrganization): Observable<CertIssuingOrganization> {
    return super.SeekLast(certIssuingOrganization);
  }

  override SeekByValue(value: string = ''): Observable<CertIssuingOrganization[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
