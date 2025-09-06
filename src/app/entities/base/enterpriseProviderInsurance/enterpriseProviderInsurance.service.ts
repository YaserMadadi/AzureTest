

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { EnterpriseProviderInsurance, EnterpriseProviderInsurance_Builder } from '.';

import { EnterpriseProvider_Service } from '../enterpriseProvider';


@Injectable({ providedIn: 'root' })
export class EnterpriseProviderInsurance_Service extends Service<EnterpriseProviderInsurance> implements IService<EnterpriseProviderInsurance> {

  constructor() {
    super(EnterpriseProviderInsurance.Info, inject(EnterpriseProviderInsurance_Builder));
  }

  //#region Related Services
  
  public enterpriseProviderService: EnterpriseProvider_Service = inject(EnterpriseProvider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<EnterpriseProviderInsurance> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<EnterpriseProviderInsurance[]> {
    return super.RetrieveAll();
  }

  override Save(enterpriseProviderInsurance: EnterpriseProviderInsurance): Observable<EnterpriseProviderInsurance> {
    if (!EnterpriseProviderInsurance.Validate(enterpriseProviderInsurance)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(enterpriseProviderInsurance);
    }
    return super.Save(enterpriseProviderInsurance);
  }

  override SaveAttached(enterpriseProviderInsurance: EnterpriseProviderInsurance): Observable<EnterpriseProviderInsurance> {
    if (!EnterpriseProviderInsurance.Validate(enterpriseProviderInsurance)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(enterpriseProviderInsurance);
    }
    return super.SaveAttached(enterpriseProviderInsurance);
  }

  override SaveCollection(enterpriseProviderInsuranceList: EnterpriseProviderInsurance[]): Observable<Result> {
    return super.SaveCollection(enterpriseProviderInsuranceList);
  }

  override Delete(enterpriseProviderInsurance: EnterpriseProviderInsurance): Observable<boolean> {
    return super.Delete(enterpriseProviderInsurance);
  }

  override Seek(enterpriseProviderInsurance: EnterpriseProviderInsurance = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<EnterpriseProviderInsurance[]> {
    return super.Seek(enterpriseProviderInsurance); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(enterpriseProviderInsurance: EnterpriseProviderInsurance): Observable<EnterpriseProviderInsurance> {
    return super.SeekLast(enterpriseProviderInsurance);
  }

  override SeekByValue(value: string = ''): Observable<EnterpriseProviderInsurance[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
