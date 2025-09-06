

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { WeekDay, WeekDay_Service } from '..';


@Component({
  selector: 'base-weekDay-delete',
  templateUrl: './weekDay.delete.html',
  styleUrls: ['./weekDay.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class WeekDayDeleteUI extends DeleteUI<WeekDay> implements IDeleteUI<WeekDay> {

  constructor() {
    super(inject(WeekDay_Service));
  }

}
