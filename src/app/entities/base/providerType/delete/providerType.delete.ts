

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ProviderType, ProviderType_Service } from '..';


@Component({
  selector: 'base-providerType-delete',
  templateUrl: './providerType.delete.html',
  styleUrls: ['./providerType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProviderTypeDeleteUI extends DeleteUI<ProviderType> implements IDeleteUI<ProviderType> {

  constructor() {
    super(inject(ProviderType_Service));
  }

}
