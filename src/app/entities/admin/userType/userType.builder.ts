

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { UserType } from '.';


@Injectable({ providedIn: 'root' })
export class UserType_Builder extends ServiceBuilder<UserType> implements IServiceBuilder<UserType> {

  constructor() {
        super();
    }

  
  BuildInstance(): UserType;
  BuildInstance(id: number): UserType;
  BuildInstance(id: number, descriptor: string): UserType;
  BuildInstance(id: number = 0, descriptor: string = ''): UserType {
    return new UserType(id, descriptor);
  }

  BuildSeekInstance(): UserType {
    return UserType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): UserType {
    let userType = new UserType();
    userType.isActive = undefined;
    return userType;
  }
}