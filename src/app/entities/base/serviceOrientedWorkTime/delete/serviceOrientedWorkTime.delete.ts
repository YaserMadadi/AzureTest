

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Service } from '..';


@Component({
  selector: 'base-serviceOrientedWorkTime-delete',
  templateUrl: './serviceOrientedWorkTime.delete.html',
  styleUrls: ['./serviceOrientedWorkTime.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ServiceOrientedWorkTimeDeleteUI extends DeleteUI<ServiceOrientedWorkTime> implements IDeleteUI<ServiceOrientedWorkTime> {

  constructor() {
    super(inject(ServiceOrientedWorkTime_Service));
  }

}
