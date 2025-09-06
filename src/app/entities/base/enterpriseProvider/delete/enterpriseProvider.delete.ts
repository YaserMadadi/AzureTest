

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { EnterpriseProvider, EnterpriseProvider_Service } from '..';


@Component({
  selector: 'base-enterpriseProvider-delete',
  templateUrl: './enterpriseProvider.delete.html',
  styleUrls: ['./enterpriseProvider.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class EnterpriseProviderDeleteUI extends DeleteUI<EnterpriseProvider> implements IDeleteUI<EnterpriseProvider> {

  constructor() {
    super(inject(EnterpriseProvider_Service));
  }

}
