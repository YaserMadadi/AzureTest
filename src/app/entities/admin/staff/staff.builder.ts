

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Staff } from '.';


@Injectable({ providedIn: 'root' })
export class Staff_Builder extends ServiceBuilder<Staff> implements IServiceBuilder<Staff> {

  constructor() {
        super();
    }

  
  BuildInstance(): Staff;
  BuildInstance(id: number): Staff;
  BuildInstance(id: number, descriptor: string): Staff;
  BuildInstance(id: number = 0, descriptor: string = ''): Staff {
    return new Staff(id, descriptor);
  }

  BuildSeekInstance(): Staff {
    return Staff_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Staff {
    let staff = new Staff();
    staff.gender = undefined;
		staff.userAccount = undefined;
		staff.isActive = undefined;
    return staff;
  }
}