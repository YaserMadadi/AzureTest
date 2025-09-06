

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { PetBehavior, PetBehavior_Service } from '..';


@Component({
  selector: 'base-petBehavior-delete',
  templateUrl: './petBehavior.delete.html',
  styleUrls: ['./petBehavior.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class PetBehaviorDeleteUI extends DeleteUI<PetBehavior> implements IDeleteUI<PetBehavior> {

  constructor() {
    super(inject(PetBehavior_Service));
  }

}
