

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { PetCategory, PetCategory_Service } from '..';


@Component({
  selector: 'base-petCategory-delete',
  templateUrl: './petCategory.delete.html',
  styleUrls: ['./petCategory.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class PetCategoryDeleteUI extends DeleteUI<PetCategory> implements IDeleteUI<PetCategory> {

  constructor() {
    super(inject(PetCategory_Service));
  }

}
