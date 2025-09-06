

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { DurationUnit, DurationUnit_Service } from '..';


@Component({
  selector: 'base-durationUnit-delete',
  templateUrl: './durationUnit.delete.html',
  styleUrls: ['./durationUnit.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class DurationUnitDeleteUI extends DeleteUI<DurationUnit> implements IDeleteUI<DurationUnit> {

  constructor() {
    super(inject(DurationUnit_Service));
  }

}
