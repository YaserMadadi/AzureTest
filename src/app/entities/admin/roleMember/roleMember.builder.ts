

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { RoleMember } from '.';


@Injectable({ providedIn: 'root' })
export class RoleMember_Builder extends ServiceBuilder<RoleMember> implements IServiceBuilder<RoleMember> {

  constructor() {
        super();
    }

  
  BuildInstance(): RoleMember;
  BuildInstance(id: number): RoleMember;
  BuildInstance(id: number, descriptor: string): RoleMember;
  BuildInstance(id: number = 0, descriptor: string = ''): RoleMember {
    return new RoleMember(id, descriptor);
  }

  BuildSeekInstance(): RoleMember {
    return RoleMember_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): RoleMember {
    let roleMember = new RoleMember();
    roleMember.role = undefined;
		roleMember.userAccount = undefined;
		roleMember.isActive = undefined;
    return roleMember;
  }
}