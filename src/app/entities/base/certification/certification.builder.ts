

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Certification } from '.';


@Injectable({ providedIn: 'root' })
export class Certification_Builder extends ServiceBuilder<Certification> implements IServiceBuilder<Certification> {

  constructor() {
        super();
    }

  
  BuildInstance(): Certification;
  BuildInstance(id: number): Certification;
  BuildInstance(id: number, descriptor: string): Certification;
  BuildInstance(id: number = 0, descriptor: string = ''): Certification {
    return new Certification(id, descriptor);
  }

  BuildSeekInstance(): Certification {
    return Certification_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Certification {
    let certification = new Certification();
    certification.certificationType = undefined;
		certification.certIssuingOrganization = undefined;
		certification.isActive = undefined;
    return certification;
  }
}