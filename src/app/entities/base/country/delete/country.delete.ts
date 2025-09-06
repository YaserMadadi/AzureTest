

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Country, Country_Service } from '..';


@Component({
  selector: 'base-country-delete',
  templateUrl: './country.delete.html',
  styleUrls: ['./country.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class CountryDeleteUI extends DeleteUI<Country> implements IDeleteUI<Country> {

  constructor() {
    super(inject(Country_Service));
  }

}
