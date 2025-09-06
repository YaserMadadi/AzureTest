

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { IndividualProvider, IndividualProvider_Builder } from '.';

import { BackgroundCheckStatus_Service } from '../backgroundCheckStatus';
import { Gender_Service } from '../gender';
import { Provider_Service } from '../provider';
import { ProviderType_Service } from '../providerType';
import { UserAccount_Service } from '../userAccount';


@Injectable({ providedIn: 'root' })
export class IndividualProvider_Service extends Service<IndividualProvider> implements IService<IndividualProvider> {

  constructor() {
    super(IndividualProvider.Info, inject(IndividualProvider_Builder));
  }

  //#region Related Services
  
  public providerTypeService: ProviderType_Service = inject(ProviderType_Service);

	public userAccountService: UserAccount_Service = inject(UserAccount_Service);

	public backgroundCheckStatusService: BackgroundCheckStatus_Service = inject(BackgroundCheckStatus_Service);

	public genderService: Gender_Service = inject(Gender_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<IndividualProvider> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<IndividualProvider[]> {
    return super.RetrieveAll();
  }

  override Save(individualProvider: IndividualProvider): Observable<IndividualProvider> {
    if (!IndividualProvider.Validate(individualProvider)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(individualProvider);
    }
    return super.Save(individualProvider);
  }

  override SaveAttached(individualProvider: IndividualProvider): Observable<IndividualProvider> {
    if (!IndividualProvider.Validate(individualProvider)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(individualProvider);
    }
    return super.SaveAttached(individualProvider);
  }

  override SaveCollection(individualProviderList: IndividualProvider[]): Observable<Result> {
    return super.SaveCollection(individualProviderList);
  }

  override Delete(individualProvider: IndividualProvider): Observable<boolean> {
    return super.Delete(individualProvider);
  }

  override Seek(individualProvider: IndividualProvider = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<IndividualProvider[]> {
    return super.Seek(individualProvider); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(individualProvider: IndividualProvider): Observable<IndividualProvider> {
    return super.SeekLast(individualProvider);
  }

  override SeekByValue(value: string = ''): Observable<IndividualProvider[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
