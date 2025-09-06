

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Pet, Pet_Service } from '..';


@Component({
  selector: 'base-pet-delete',
  templateUrl: './pet.delete.html',
  styleUrls: ['./pet.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class PetDeleteUI extends DeleteUI<Pet> implements IDeleteUI<Pet> {

  constructor() {
    super(inject(Pet_Service));
  }

}
