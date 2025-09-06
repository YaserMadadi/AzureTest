

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { RolePermission, RolePermission_Builder } from '.';

import { Entity_Service } from '../../infra/entity';
import { Role_Service } from '../role';


@Injectable({ providedIn: 'root' })
export class RolePermission_Service extends Service<RolePermission> implements IService<RolePermission> {

  constructor() {
    super(RolePermission.Info, inject(RolePermission_Builder));
  }

  //#region Related Services
  
  public entityService: Entity_Service = inject(Entity_Service);

	public roleService: Role_Service = inject(Role_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<RolePermission> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<RolePermission[]> {
    return super.RetrieveAll();
  }

  override Save(rolePermission: RolePermission): Observable<RolePermission> {
    if (!RolePermission.Validate(rolePermission)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(rolePermission);
    }
    return super.Save(rolePermission);
  }

  override SaveAttached(rolePermission: RolePermission): Observable<RolePermission> {
    if (!RolePermission.Validate(rolePermission)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(rolePermission);
    }
    return super.SaveAttached(rolePermission);
  }

  override SaveCollection(rolePermissionList: RolePermission[]): Observable<Result> {
    return super.SaveCollection(rolePermissionList);
  }

  override Delete(rolePermission: RolePermission): Observable<boolean> {
    return super.Delete(rolePermission);
  }

  override Seek(rolePermission: RolePermission = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<RolePermission[]> {
    return super.Seek(rolePermission); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(rolePermission: RolePermission): Observable<RolePermission> {
    return super.SeekLast(rolePermission);
  }

  override SeekByValue(value: string = ''): Observable<RolePermission[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
