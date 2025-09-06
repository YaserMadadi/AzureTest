

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { UserType, UserType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class UserType_Service extends Service<UserType> implements IService<UserType> {

  constructor() {
    super(UserType.Info, inject(UserType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<UserType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<UserType[]> {
    return super.RetrieveAll();
  }

  override Save(userType: UserType): Observable<UserType> {
    if (!UserType.Validate(userType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(userType);
    }
    return super.Save(userType);
  }

  override SaveAttached(userType: UserType): Observable<UserType> {
    if (!UserType.Validate(userType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(userType);
    }
    return super.SaveAttached(userType);
  }

  override SaveCollection(userTypeList: UserType[]): Observable<Result> {
    return super.SaveCollection(userTypeList);
  }

  override Delete(userType: UserType): Observable<boolean> {
    return super.Delete(userType);
  }

  override Seek(userType: UserType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<UserType[]> {
    return super.Seek(userType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(userType: UserType): Observable<UserType> {
    return super.SeekLast(userType);
  }

  override SeekByValue(value: string = ''): Observable<UserType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
