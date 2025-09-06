

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Province, Province_Service } from '..';


@Component({
  selector: 'base-province-delete',
  templateUrl: './province.delete.html',
  styleUrls: ['./province.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProvinceDeleteUI extends DeleteUI<Province> implements IDeleteUI<Province> {

  constructor() {
    super(inject(Province_Service));
  }

}
