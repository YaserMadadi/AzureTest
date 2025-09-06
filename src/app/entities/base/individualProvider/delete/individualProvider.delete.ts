

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { IndividualProvider, IndividualProvider_Service } from '..';


@Component({
  selector: 'base-individualProvider-delete',
  templateUrl: './individualProvider.delete.html',
  styleUrls: ['./individualProvider.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class IndividualProviderDeleteUI extends DeleteUI<IndividualProvider> implements IDeleteUI<IndividualProvider> {

  constructor() {
    super(inject(IndividualProvider_Service));
  }

}
