

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Provider, Provider_Service } from '..';


@Component({
  selector: 'base-provider-delete',
  templateUrl: './provider.delete.html',
  styleUrls: ['./provider.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProviderDeleteUI extends DeleteUI<Provider> implements IDeleteUI<Provider> {

  constructor() {
    super(inject(Provider_Service));
  }

}
