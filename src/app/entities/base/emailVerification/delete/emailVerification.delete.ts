

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { EmailVerification, EmailVerification_Service } from '..';


@Component({
  selector: 'base-emailVerification-delete',
  templateUrl: './emailVerification.delete.html',
  styleUrls: ['./emailVerification.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class EmailVerificationDeleteUI extends DeleteUI<EmailVerification> implements IDeleteUI<EmailVerification> {

  constructor() {
    super(inject(EmailVerification_Service));
  }

}
