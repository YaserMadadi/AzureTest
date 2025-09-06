

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { CheckConstraint, CheckConstraint_Service } from '..';


@Component({
  selector: 'infra-checkConstraint-delete',
  templateUrl: './checkConstraint.delete.html',
  styleUrls: ['./checkConstraint.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class CheckConstraintDeleteUI extends DeleteUI<CheckConstraint> implements IDeleteUI<CheckConstraint> {

  constructor() {
    super(inject(CheckConstraint_Service));
  }

}
