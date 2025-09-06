

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Role, Role_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class Role_Service extends Service<Role> implements IService<Role> {

  constructor() {
    super(Role.Info, inject(Role_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Role> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Role[]> {
    return super.RetrieveAll();
  }

  override Save(role: Role): Observable<Role> {
    if (!Role.Validate(role)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(role);
    }
    return super.Save(role);
  }

  override SaveAttached(role: Role): Observable<Role> {
    if (!Role.Validate(role)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(role);
    }
    return super.SaveAttached(role);
  }

  override SaveCollection(roleList: Role[]): Observable<Result> {
    return super.SaveCollection(roleList);
  }

  override Delete(role: Role): Observable<boolean> {
    return super.Delete(role);
  }

  override Seek(role: Role = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Role[]> {
    return super.Seek(role); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(role: Role): Observable<Role> {
    return super.SeekLast(role);
  }

  override SeekByValue(value: string = ''): Observable<Role[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
