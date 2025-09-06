

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { AcceptedPetCategory, AcceptedPetCategory_Service } from '..';


@Component({
  selector: 'base-acceptedPetCategory-delete',
  templateUrl: './acceptedPetCategory.delete.html',
  styleUrls: ['./acceptedPetCategory.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class AcceptedPetCategoryDeleteUI extends DeleteUI<AcceptedPetCategory> implements IDeleteUI<AcceptedPetCategory> {

  constructor() {
    super(inject(AcceptedPetCategory_Service));
  }

}
