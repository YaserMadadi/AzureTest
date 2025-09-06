

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Gender, Gender_Service } from '..';


@Component({
  selector: 'base-gender-delete',
  templateUrl: './gender.delete.html',
  styleUrls: ['./gender.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class GenderDeleteUI extends DeleteUI<Gender> implements IDeleteUI<Gender> {

  constructor() {
    super(inject(Gender_Service));
  }

}
