

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Province } from '.';


@Injectable({ providedIn: 'root' })
export class Province_Builder extends ServiceBuilder<Province> implements IServiceBuilder<Province> {

  constructor() {
        super();
    }

  
  BuildInstance(): Province;
  BuildInstance(id: number): Province;
  BuildInstance(id: number, descriptor: string): Province;
  BuildInstance(id: number = 0, descriptor: string = ''): Province {
    return new Province(id, descriptor);
  }

  BuildSeekInstance(): Province {
    return Province_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Province {
    let province = new Province();
    province.country = undefined;
		province.isActive = undefined;
    return province;
  }
}