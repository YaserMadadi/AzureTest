

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Certification, Certification_Builder } from '.';

import { CertificationType_Service } from '../certificationType';
import { CertIssuingOrganization_Service } from '../certIssuingOrganization';


@Injectable({ providedIn: 'root' })
export class Certification_Service extends Service<Certification> implements IService<Certification> {

  constructor() {
    super(Certification.Info, inject(Certification_Builder));
  }

  //#region Related Services
  
  public certificationTypeService: CertificationType_Service = inject(CertificationType_Service);

	public certIssuingOrganizationService: CertIssuingOrganization_Service = inject(CertIssuingOrganization_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Certification> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Certification[]> {
    return super.RetrieveAll();
  }

  override Save(certification: Certification): Observable<Certification> {
    if (!Certification.Validate(certification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(certification);
    }
    return super.Save(certification);
  }

  override SaveAttached(certification: Certification): Observable<Certification> {
    if (!Certification.Validate(certification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(certification);
    }
    return super.SaveAttached(certification);
  }

  override SaveCollection(certificationList: Certification[]): Observable<Result> {
    return super.SaveCollection(certificationList);
  }

  override Delete(certification: Certification): Observable<boolean> {
    return super.Delete(certification);
  }

  override Seek(certification: Certification = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Certification[]> {
    return super.Seek(certification); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(certification: Certification): Observable<Certification> {
    return super.SeekLast(certification);
  }

  override SeekByValue(value: string = ''): Observable<Certification[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
