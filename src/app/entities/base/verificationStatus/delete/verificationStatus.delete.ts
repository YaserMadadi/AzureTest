

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { VerificationStatus, VerificationStatus_Service } from '..';


@Component({
  selector: 'base-verificationStatus-delete',
  templateUrl: './verificationStatus.delete.html',
  styleUrls: ['./verificationStatus.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class VerificationStatusDeleteUI extends DeleteUI<VerificationStatus> implements IDeleteUI<VerificationStatus> {

  constructor() {
    super(inject(VerificationStatus_Service));
  }

}
