

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { RolePermission } from '.';


@Injectable({ providedIn: 'root' })
export class RolePermission_Builder extends ServiceBuilder<RolePermission> implements IServiceBuilder<RolePermission> {

  constructor() {
        super();
    }

  
  BuildInstance(): RolePermission;
  BuildInstance(id: number): RolePermission;
  BuildInstance(id: number, descriptor: string): RolePermission;
  BuildInstance(id: number = 0, descriptor: string = ''): RolePermission {
    return new RolePermission(id, descriptor);
  }

  BuildSeekInstance(): RolePermission {
    return RolePermission_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): RolePermission {
    let rolePermission = new RolePermission();
    rolePermission.role = undefined;
		rolePermission.entity = undefined;
		rolePermission.addPermission = undefined;
		rolePermission.editPermission = undefined;
		rolePermission.deletePermission = undefined;
		rolePermission.viewPermission = undefined;
		rolePermission.isActive = undefined;
    return rolePermission;
  }
}