import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { PhoneNumberVerification, PhoneNumberVerification_Service } from '..';



@Component({
  selector: 'base-phoneNumberVerification-master',
  templateUrl: './phoneNumberVerification.master.html',
  styleUrls: ['./phoneNumberVerification.master.scss'],
  providers: [
    PhoneNumberVerification_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //PhoneNumberVerificationEditUI,        
    //PhoneNumberVerificationDeleteUI,
    // No Item...
  ]
})
export class PhoneNumberVerificationMasterUI extends MasterUI<PhoneNumberVerification> implements IMasterUI<PhoneNumberVerification> {

  constructor() {
    super(inject(PhoneNumberVerification_Service))
  }


}
