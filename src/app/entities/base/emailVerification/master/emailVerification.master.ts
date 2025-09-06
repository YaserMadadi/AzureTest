import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { EmailVerification, EmailVerification_Service } from '..';



@Component({
  selector: 'base-emailVerification-master',
  templateUrl: './emailVerification.master.html',
  styleUrls: ['./emailVerification.master.scss'],
  providers: [
    EmailVerification_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //EmailVerificationEditUI,        
    //EmailVerificationDeleteUI,
    // No Item...
  ]
})
export class EmailVerificationMasterUI extends MasterUI<EmailVerification> implements IMasterUI<EmailVerification> {

  constructor() {
    super(inject(EmailVerification_Service))
  }


}
