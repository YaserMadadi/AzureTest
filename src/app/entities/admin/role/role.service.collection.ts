
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Role } from '.';
import { RoleMember, RoleMember_Builder } from '../roleMember';
import { RolePermission, RolePermission_Builder } from '../rolePermission';


@Injectable({ providedIn: 'root' })
export class Role_ServiceCollection extends ServiceCollection<Role> implements IServiceCollection<Role> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfRoleMember(role_id: number, roleMember: RoleMember = RoleMember_Builder.BuildSeekInstance()): Observable<RoleMember[]> {
    return super.CollectionOf<RoleMember>(new Role(role_id), roleMember);
  }

  CollectionOfRolePermission(role_id: number, rolePermission: RolePermission = RolePermission_Builder.BuildSeekInstance()): Observable<RolePermission[]> {
    return super.CollectionOf<RolePermission>(new Role(role_id), rolePermission);
  }

	//#endregion
}
