

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { StaffPermission, StaffPermission_Builder } from '.';

import { Entity_Service } from '../../infra/entity';
import { Staff_Service } from '../staff';


@Injectable({ providedIn: 'root' })
export class StaffPermission_Service extends Service<StaffPermission> implements IService<StaffPermission> {

  constructor() {
    super(StaffPermission.Info, inject(StaffPermission_Builder));
  }

  //#region Related Services
  
  public entityService: Entity_Service = inject(Entity_Service);

	public staffService: Staff_Service = inject(Staff_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<StaffPermission> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<StaffPermission[]> {
    return super.RetrieveAll();
  }

  override Save(staffPermission: StaffPermission): Observable<StaffPermission> {
    if (!StaffPermission.Validate(staffPermission)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(staffPermission);
    }
    return super.Save(staffPermission);
  }

  override SaveAttached(staffPermission: StaffPermission): Observable<StaffPermission> {
    if (!StaffPermission.Validate(staffPermission)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(staffPermission);
    }
    return super.SaveAttached(staffPermission);
  }

  override SaveCollection(staffPermissionList: StaffPermission[]): Observable<Result> {
    return super.SaveCollection(staffPermissionList);
  }

  override Delete(staffPermission: StaffPermission): Observable<boolean> {
    return super.Delete(staffPermission);
  }

  override Seek(staffPermission: StaffPermission = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<StaffPermission[]> {
    return super.Seek(staffPermission); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(staffPermission: StaffPermission): Observable<StaffPermission> {
    return super.SeekLast(staffPermission);
  }

  override SeekByValue(value: string = ''): Observable<StaffPermission[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
