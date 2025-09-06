

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { CertIssuingOrganization, CertIssuingOrganization_Service } from '..';


@Component({
  selector: 'base-certIssuingOrganization-delete',
  templateUrl: './certIssuingOrganization.delete.html',
  styleUrls: ['./certIssuingOrganization.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class CertIssuingOrganizationDeleteUI extends DeleteUI<CertIssuingOrganization> implements IDeleteUI<CertIssuingOrganization> {

  constructor() {
    super(inject(CertIssuingOrganization_Service));
  }

}
