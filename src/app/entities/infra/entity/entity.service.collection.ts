
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Entity } from '.';
import { RolePermission, RolePermission_Builder } from '../../admin/rolePermission';
import { StaffPermission, StaffPermission_Builder } from '../../admin/staffPermission';


@Injectable({ providedIn: 'root' })
export class Entity_ServiceCollection extends ServiceCollection<Entity> implements IServiceCollection<Entity> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfRolePermission(entity_id: number, rolePermission: RolePermission = RolePermission_Builder.BuildSeekInstance()): Observable<RolePermission[]> {
    return super.CollectionOf<RolePermission>(new Entity(entity_id), rolePermission);
  }

  CollectionOfStaffPermission(entity_id: number, staffPermission: StaffPermission = StaffPermission_Builder.BuildSeekInstance()): Observable<StaffPermission[]> {
    return super.CollectionOf<StaffPermission>(new Entity(entity_id), staffPermission);
  }

	//#endregion
}
