

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Gender } from '.';


@Injectable({ providedIn: 'root' })
export class Gender_Builder extends ServiceBuilder<Gender> implements IServiceBuilder<Gender> {

  constructor() {
        super();
    }

  
  BuildInstance(): Gender;
  BuildInstance(id: number): Gender;
  BuildInstance(id: number, descriptor: string): Gender;
  BuildInstance(id: number = 0, descriptor: string = ''): Gender {
    return new Gender(id, descriptor);
  }

  BuildSeekInstance(): Gender {
    return Gender_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Gender {
    let gender = new Gender();
    
    return gender;
  }
}