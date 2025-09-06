

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ServiceType, ServiceType_Service } from '..';


@Component({
  selector: 'base-serviceType-delete',
  templateUrl: './serviceType.delete.html',
  styleUrls: ['./serviceType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ServiceTypeDeleteUI extends DeleteUI<ServiceType> implements IDeleteUI<ServiceType> {

  constructor() {
    super(inject(ServiceType_Service));
  }

}
