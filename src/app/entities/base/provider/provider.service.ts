

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Provider, Provider_Builder } from '.';

import { ProviderType_Service } from '../providerType';
import { UserAccount_Service } from '../userAccount';
import { EnterpriseProvider, EnterpriseProvider_Service } from '../enterpriseProvider';
import { IndividualProvider, IndividualProvider_Service } from '../individualProvider';


@Injectable({ providedIn: 'root' })
export class Provider_Service extends Service<Provider> implements IService<Provider> {

  constructor() {
    super(Provider.Info, inject(Provider_Builder));
  }

  //#region Related Services
  
  public providerTypeService: ProviderType_Service = inject(ProviderType_Service);

	public userAccountService: UserAccount_Service = inject(UserAccount_Service);
  
  public enterpriseProviderService: EnterpriseProvider_Service = inject(EnterpriseProvider_Service);

	public individualProviderService: IndividualProvider_Service = inject(IndividualProvider_Service);

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Provider> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Provider[]> {
    return super.RetrieveAll();
  }

  override Save(provider: Provider): Observable<Provider> {
    if (!Provider.Validate(provider)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(provider);
    }
    return super.Save(provider);
  }

  override SaveAttached(provider: Provider): Observable<Provider> {
    if (!Provider.Validate(provider)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(provider);
    }
    return super.SaveAttached(provider);
  }

  override SaveCollection(providerList: Provider[]): Observable<Result> {
    return super.SaveCollection(providerList);
  }

  override Delete(provider: Provider): Observable<boolean> {
    return super.Delete(provider);
  }

  override Seek(provider: Provider = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Provider[]> {
    return super.Seek(provider); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(provider: Provider): Observable<Provider> {
    return super.SeekLast(provider);
  }

  override SeekByValue(value: string = ''): Observable<Provider[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  protected LoadEnterpriseProvider(provider: Provider): Observable<EnterpriseProvider> {
    return this.enterpriseProviderService.RetrieveById(provider.id);
  }

	protected LoadIndividualProvider(provider: Provider): Observable<IndividualProvider> {
    return this.individualProviderService.RetrieveById(provider.id);
  }

	

  // Laod Enums ... 
}
