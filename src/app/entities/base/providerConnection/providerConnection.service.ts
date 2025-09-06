

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderConnection, ProviderConnection_Builder } from '.';

import { ConnectionType_Service } from '../connectionType';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class ProviderConnection_Service extends Service<ProviderConnection> implements IService<ProviderConnection> {

  constructor() {
    super(ProviderConnection.Info, inject(ProviderConnection_Builder));
  }

  //#region Related Services
  
  public connectionTypeService: ConnectionType_Service = inject(ConnectionType_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderConnection> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderConnection[]> {
    return super.RetrieveAll();
  }

  override Save(providerConnection: ProviderConnection): Observable<ProviderConnection> {
    if (!ProviderConnection.Validate(providerConnection)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerConnection);
    }
    return super.Save(providerConnection);
  }

  override SaveAttached(providerConnection: ProviderConnection): Observable<ProviderConnection> {
    if (!ProviderConnection.Validate(providerConnection)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerConnection);
    }
    return super.SaveAttached(providerConnection);
  }

  override SaveCollection(providerConnectionList: ProviderConnection[]): Observable<Result> {
    return super.SaveCollection(providerConnectionList);
  }

  override Delete(providerConnection: ProviderConnection): Observable<boolean> {
    return super.Delete(providerConnection);
  }

  override Seek(providerConnection: ProviderConnection = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderConnection[]> {
    return super.Seek(providerConnection); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerConnection: ProviderConnection): Observable<ProviderConnection> {
    return super.SeekLast(providerConnection);
  }

  override SeekByValue(value: string = ''): Observable<ProviderConnection[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
