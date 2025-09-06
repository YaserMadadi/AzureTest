

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Role } from '.';


@Injectable({ providedIn: 'root' })
export class Role_Builder extends ServiceBuilder<Role> implements IServiceBuilder<Role> {

  constructor() {
        super();
    }

  
  BuildInstance(): Role;
  BuildInstance(id: number): Role;
  BuildInstance(id: number, descriptor: string): Role;
  BuildInstance(id: number = 0, descriptor: string = ''): Role {
    return new Role(id, descriptor);
  }

  BuildSeekInstance(): Role {
    return Role_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Role {
    let role = new Role();
    role.isActive = undefined;
    return role;
  }
}