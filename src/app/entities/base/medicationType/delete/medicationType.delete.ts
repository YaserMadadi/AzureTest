

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { MedicationType, MedicationType_Service } from '..';


@Component({
  selector: 'base-medicationType-delete',
  templateUrl: './medicationType.delete.html',
  styleUrls: ['./medicationType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class MedicationTypeDeleteUI extends DeleteUI<MedicationType> implements IDeleteUI<MedicationType> {

  constructor() {
    super(inject(MedicationType_Service));
  }

}
