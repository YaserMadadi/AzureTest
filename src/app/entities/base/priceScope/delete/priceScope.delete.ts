

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { PriceScope, PriceScope_Service } from '..';


@Component({
  selector: 'base-priceScope-delete',
  templateUrl: './priceScope.delete.html',
  styleUrls: ['./priceScope.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class PriceScopeDeleteUI extends DeleteUI<PriceScope> implements IDeleteUI<PriceScope> {

  constructor() {
    super(inject(PriceScope_Service));
  }

}
