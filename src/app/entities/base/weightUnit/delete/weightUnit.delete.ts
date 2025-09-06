

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { WeightUnit, WeightUnit_Service } from '..';


@Component({
  selector: 'base-weightUnit-delete',
  templateUrl: './weightUnit.delete.html',
  styleUrls: ['./weightUnit.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class WeightUnitDeleteUI extends DeleteUI<WeightUnit> implements IDeleteUI<WeightUnit> {

  constructor() {
    super(inject(WeightUnit_Service));
  }

}
