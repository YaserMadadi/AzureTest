

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { CertificationType, CertificationType_Service } from '..';


@Component({
  selector: 'base-certificationType-delete',
  templateUrl: './certificationType.delete.html',
  styleUrls: ['./certificationType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class CertificationTypeDeleteUI extends DeleteUI<CertificationType> implements IDeleteUI<CertificationType> {

  constructor() {
    super(inject(CertificationType_Service));
  }

}
