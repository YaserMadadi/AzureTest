

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { EnterpriseProvider, EnterpriseProvider_Builder } from '.';

import { Provider_Service } from '../provider';
import { ProviderType_Service } from '../providerType';
import { UserAccount_Service } from '../userAccount';


@Injectable({ providedIn: 'root' })
export class EnterpriseProvider_Service extends Service<EnterpriseProvider> implements IService<EnterpriseProvider> {

  constructor() {
    super(EnterpriseProvider.Info, inject(EnterpriseProvider_Builder));
  }

  //#region Related Services
  
  public providerTypeService: ProviderType_Service = inject(ProviderType_Service);

	public userAccountService: UserAccount_Service = inject(UserAccount_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<EnterpriseProvider> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<EnterpriseProvider[]> {
    return super.RetrieveAll();
  }

  override Save(enterpriseProvider: EnterpriseProvider): Observable<EnterpriseProvider> {
    if (!EnterpriseProvider.Validate(enterpriseProvider)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(enterpriseProvider);
    }
    return super.Save(enterpriseProvider);
  }

  override SaveAttached(enterpriseProvider: EnterpriseProvider): Observable<EnterpriseProvider> {
    if (!EnterpriseProvider.Validate(enterpriseProvider)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(enterpriseProvider);
    }
    return super.SaveAttached(enterpriseProvider);
  }

  override SaveCollection(enterpriseProviderList: EnterpriseProvider[]): Observable<Result> {
    return super.SaveCollection(enterpriseProviderList);
  }

  override Delete(enterpriseProvider: EnterpriseProvider): Observable<boolean> {
    return super.Delete(enterpriseProvider);
  }

  override Seek(enterpriseProvider: EnterpriseProvider = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<EnterpriseProvider[]> {
    return super.Seek(enterpriseProvider); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(enterpriseProvider: EnterpriseProvider): Observable<EnterpriseProvider> {
    return super.SeekLast(enterpriseProvider);
  }

  override SeekByValue(value: string = ''): Observable<EnterpriseProvider[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
