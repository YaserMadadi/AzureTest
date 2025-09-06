

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { WorkTime, WorkTime_Service } from '..';


@Component({
  selector: 'base-workTime-delete',
  templateUrl: './workTime.delete.html',
  styleUrls: ['./workTime.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class WorkTimeDeleteUI extends DeleteUI<WorkTime> implements IDeleteUI<WorkTime> {

  constructor() {
    super(inject(WorkTime_Service));
  }

}
