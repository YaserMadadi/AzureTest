

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderCertification, ProviderCertification_Builder } from '.';

import { Certification_Service } from '../certification';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class ProviderCertification_Service extends Service<ProviderCertification> implements IService<ProviderCertification> {

  constructor() {
    super(ProviderCertification.Info, inject(ProviderCertification_Builder));
  }

  //#region Related Services
  
  public certificationService: Certification_Service = inject(Certification_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderCertification> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderCertification[]> {
    return super.RetrieveAll();
  }

  override Save(providerCertification: ProviderCertification): Observable<ProviderCertification> {
    if (!ProviderCertification.Validate(providerCertification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerCertification);
    }
    return super.Save(providerCertification);
  }

  override SaveAttached(providerCertification: ProviderCertification): Observable<ProviderCertification> {
    if (!ProviderCertification.Validate(providerCertification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerCertification);
    }
    return super.SaveAttached(providerCertification);
  }

  override SaveCollection(providerCertificationList: ProviderCertification[]): Observable<Result> {
    return super.SaveCollection(providerCertificationList);
  }

  override Delete(providerCertification: ProviderCertification): Observable<boolean> {
    return super.Delete(providerCertification);
  }

  override Seek(providerCertification: ProviderCertification = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderCertification[]> {
    return super.Seek(providerCertification); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerCertification: ProviderCertification): Observable<ProviderCertification> {
    return super.SeekLast(providerCertification);
  }

  override SeekByValue(value: string = ''): Observable<ProviderCertification[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
