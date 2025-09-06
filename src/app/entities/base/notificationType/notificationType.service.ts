

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { NotificationType, NotificationType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class NotificationType_Service extends Service<NotificationType> implements IService<NotificationType> {

  constructor() {
    super(NotificationType.Info, inject(NotificationType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<NotificationType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<NotificationType[]> {
    return super.RetrieveAll();
  }

  override Save(notificationType: NotificationType): Observable<NotificationType> {
    if (!NotificationType.Validate(notificationType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(notificationType);
    }
    return super.Save(notificationType);
  }

  override SaveAttached(notificationType: NotificationType): Observable<NotificationType> {
    if (!NotificationType.Validate(notificationType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(notificationType);
    }
    return super.SaveAttached(notificationType);
  }

  override SaveCollection(notificationTypeList: NotificationType[]): Observable<Result> {
    return super.SaveCollection(notificationTypeList);
  }

  override Delete(notificationType: NotificationType): Observable<boolean> {
    return super.Delete(notificationType);
  }

  override Seek(notificationType: NotificationType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<NotificationType[]> {
    return super.Seek(notificationType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(notificationType: NotificationType): Observable<NotificationType> {
    return super.SeekLast(notificationType);
  }

  override SeekByValue(value: string = ''): Observable<NotificationType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
