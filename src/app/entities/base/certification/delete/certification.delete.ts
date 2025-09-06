

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Certification, Certification_Service } from '..';


@Component({
  selector: 'base-certification-delete',
  templateUrl: './certification.delete.html',
  styleUrls: ['./certification.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class CertificationDeleteUI extends DeleteUI<Certification> implements IDeleteUI<Certification> {

  constructor() {
    super(inject(Certification_Service));
  }

}
