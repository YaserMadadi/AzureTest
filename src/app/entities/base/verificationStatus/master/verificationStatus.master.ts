import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { VerificationStatus, VerificationStatus_Service } from '..';
import { VerificationStatus_Client_DetailUI } from '../detail/verificationStatus-client.detail';
import { VerificationStatus_EmailVerification_DetailUI } from '../detail/verificationStatus-emailVerification.detail';
import { VerificationStatus_PhoneNumberVerification_DetailUI } from '../detail/verificationStatus-phoneNumberVerification.detail';



@Component({
  selector: 'base-verificationStatus-master',
  templateUrl: './verificationStatus.master.html',
  styleUrls: ['./verificationStatus.master.scss'],
  providers: [
    VerificationStatus_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //VerificationStatusEditUI,        
    //VerificationStatusDeleteUI,
    VerificationStatus_Client_DetailUI,
				VerificationStatus_EmailVerification_DetailUI,
				VerificationStatus_PhoneNumberVerification_DetailUI
  ]
})
export class VerificationStatusMasterUI extends MasterUI<VerificationStatus> implements IMasterUI<VerificationStatus> {

  constructor() {
    super(inject(VerificationStatus_Service))
  }


}
