

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ProviderCertification, ProviderCertification_Service } from '..';


@Component({
  selector: 'base-providerCertification-delete',
  templateUrl: './providerCertification.delete.html',
  styleUrls: ['./providerCertification.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ProviderCertificationDeleteUI extends DeleteUI<ProviderCertification> implements IDeleteUI<ProviderCertification> {

  constructor() {
    super(inject(ProviderCertification_Service));
  }

}
