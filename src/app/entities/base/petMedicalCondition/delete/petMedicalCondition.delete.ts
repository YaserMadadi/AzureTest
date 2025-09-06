

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { PetMedicalCondition, PetMedicalCondition_Service } from '..';


@Component({
  selector: 'base-petMedicalCondition-delete',
  templateUrl: './petMedicalCondition.delete.html',
  styleUrls: ['./petMedicalCondition.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class PetMedicalConditionDeleteUI extends DeleteUI<PetMedicalCondition> implements IDeleteUI<PetMedicalCondition> {

  constructor() {
    super(inject(PetMedicalCondition_Service));
  }

}
