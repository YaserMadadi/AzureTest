
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Client, Client_ServiceCollection } from '../../client';
import { PhoneNumberVerification, PhoneNumberVerification_Builder } from '../../phoneNumberVerification';
import { PhoneNumberVerificationEditUI } from '../../phoneNumberVerification/edit/phoneNumberVerification.edit'
import { PhoneNumberVerificationDeleteUI } from '../../phoneNumberVerification/delete/phoneNumberVerification.delete'
import { VerificationStatus, VerificationStatus_Service } from '../../verificationStatus';



@Component({
  selector: 'base-client-phoneNumberVerification-detail',
  templateUrl: './client-phoneNumberVerification.detail.html',
  styleUrls: ['./client-phoneNumberVerification.detail.scss'],
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
export class Client_PhoneNumberVerification_DetailUI extends DetailUI<Client, PhoneNumberVerification> {

  constructor(private serviceCollection: Client_ServiceCollection = inject(Client_ServiceCollection)) {
    super(serviceCollection.CollectionOfPhoneNumberVerification.bind(serviceCollection), inject(PhoneNumberVerification_Builder));
    this.currentInstance = new PhoneNumberVerification();
  }

  @Input()
  public set client(value: Client) {
    this.masterInstance = { ...value };
    //this.currentInstance.client = { ...value };
    this.sourceInstance.client = { ...value };
  }

  public verificationStatusLinker: ForeignkeyLinker<VerificationStatus> = new ForeignkeyLinker<VerificationStatus>(inject(VerificationStatus_Service), true);

		

}
