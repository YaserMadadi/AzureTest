
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { VerificationStatus, VerificationStatus_ServiceCollection } from '../../verificationStatus';
import { PhoneNumberVerification, PhoneNumberVerification_Builder } from '../../phoneNumberVerification';
import { PhoneNumberVerificationEditUI } from '../../phoneNumberVerification/edit/phoneNumberVerification.edit'
import { PhoneNumberVerificationDeleteUI } from '../../phoneNumberVerification/delete/phoneNumberVerification.delete'
import { Client, Client_Service } from '../../client';



@Component({
  selector: 'base-verificationStatus-phoneNumberVerification-detail',
  templateUrl: './verificationStatus-phoneNumberVerification.detail.html',
  styleUrls: ['./verificationStatus-phoneNumberVerification.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    PhoneNumberVerificationEditUI,        
    PhoneNumberVerificationDeleteUI,
  ]
}) 
export class VerificationStatus_PhoneNumberVerification_DetailUI extends DetailUI<VerificationStatus, PhoneNumberVerification> {

  constructor(private serviceCollection: VerificationStatus_ServiceCollection = inject(VerificationStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfPhoneNumberVerification.bind(serviceCollection), inject(PhoneNumberVerification_Builder));
    this.currentInstance = new PhoneNumberVerification();
  }

  @Input()
  public set verificationStatus(value: VerificationStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.verificationStatus = { ...value };
    this.sourceInstance.verificationStatus = { ...value };
  }

  public clientLinker: ForeignkeyLinker<Client> = new ForeignkeyLinker<Client>(inject(Client_Service), true);

		

}
