

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ClientNotification, ClientNotification_Builder } from '.';

import { Client_Service } from '../client';
import { NotificationType_Service } from '../notificationType';


@Injectable({ providedIn: 'root' })
export class ClientNotification_Service extends Service<ClientNotification> implements IService<ClientNotification> {

  constructor() {
    super(ClientNotification.Info, inject(ClientNotification_Builder));
  }

  //#region Related Services
  
  public clientService: Client_Service = inject(Client_Service);

	public notificationTypeService: NotificationType_Service = inject(NotificationType_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ClientNotification> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ClientNotification[]> {
    return super.RetrieveAll();
  }

  override Save(clientNotification: ClientNotification): Observable<ClientNotification> {
    if (!ClientNotification.Validate(clientNotification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientNotification);
    }
    return super.Save(clientNotification);
  }

  override SaveAttached(clientNotification: ClientNotification): Observable<ClientNotification> {
    if (!ClientNotification.Validate(clientNotification)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(clientNotification);
    }
    return super.SaveAttached(clientNotification);
  }

  override SaveCollection(clientNotificationList: ClientNotification[]): Observable<Result> {
    return super.SaveCollection(clientNotificationList);
  }

  override Delete(clientNotification: ClientNotification): Observable<boolean> {
    return super.Delete(clientNotification);
  }

  override Seek(clientNotification: ClientNotification = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ClientNotification[]> {
    return super.Seek(clientNotification); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(clientNotification: ClientNotification): Observable<ClientNotification> {
    return super.SeekLast(clientNotification);
  }

  override SeekByValue(value: string = ''): Observable<ClientNotification[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
