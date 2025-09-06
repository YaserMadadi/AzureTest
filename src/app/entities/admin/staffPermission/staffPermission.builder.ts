

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { StaffPermission } from '.';


@Injectable({ providedIn: 'root' })
export class StaffPermission_Builder extends ServiceBuilder<StaffPermission> implements IServiceBuilder<StaffPermission> {

  constructor() {
        super();
    }

  
  BuildInstance(): StaffPermission;
  BuildInstance(id: number): StaffPermission;
  BuildInstance(id: number, descriptor: string): StaffPermission;
  BuildInstance(id: number = 0, descriptor: string = ''): StaffPermission {
    return new StaffPermission(id, descriptor);
  }

  BuildSeekInstance(): StaffPermission {
    return StaffPermission_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): StaffPermission {
    let staffPermission = new StaffPermission();
    staffPermission.staff = undefined;
		staffPermission.entity = undefined;
		staffPermission.addPermission = undefined;
		staffPermission.editPermission = undefined;
		staffPermission.deletePermission = undefined;
		staffPermission.viewPermission = undefined;
		staffPermission.isActive = undefined;
    return staffPermission;
  }
}