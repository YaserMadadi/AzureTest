
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { NotificationType } from '.';
import { ClientNotification, ClientNotification_Builder } from '../clientNotification';


@Injectable({ providedIn: 'root' })
export class NotificationType_ServiceCollection extends ServiceCollection<NotificationType> implements IServiceCollection<NotificationType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfClientNotification(notificationType_id: number, clientNotification: ClientNotification = ClientNotification_Builder.BuildSeekInstance()): Observable<ClientNotification[]> {
    return super.CollectionOf<ClientNotification>(new NotificationType(notificationType_id), clientNotification);
  }

	//#endregion
}
