

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { VerificationStatus, VerificationStatus_Service } from '..';
import { VerificationStatusEditUI } from '../edit/verificationStatus.edit'
import { VerificationStatusDeleteUI } from '../delete/verificationStatus.delete'
import { Client } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit';
import { EmailVerification } from '../../emailVerification';
import { EmailVerificationEditUI } from '../../emailVerification/edit/emailVerification.edit';
import { PhoneNumberVerification } from '../../phoneNumberVerification';
import { PhoneNumberVerificationEditUI } from '../../phoneNumberVerification/edit/phoneNumberVerification.edit';



@Component({
  selector: 'base-verificationStatus-index',
  templateUrl: './verificationStatus.hub.html',
  styleUrls: ['./verificationStatus.hub.scss'],
  providers: [VerificationStatus_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    VerificationStatusEditUI,
    VerificationStatusDeleteUI,
    ClientEditUI,
		EmailVerificationEditUI,
		PhoneNumberVerificationEditUI,
  ]
})
export class VerificationStatusHubUI extends HubUI<VerificationStatus> implements IHubUI<VerificationStatus> {

  constructor(public override service: VerificationStatus_Service = inject(VerificationStatus_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Client', () => this.onAddClient()),
			new DropdownMenuItem('Add  Email Verification', () => this.onAddEmailVerification()),
			new DropdownMenuItem('Add  Phone Number Verification', () => this.onAddPhoneNumberVerification()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('clientEditUI')
  public clientEditUI!: ClientEditUI;

  onAddClient() {
    let client = new Client();
    client.phoneVerificationStatus = this.currentInstance;
    this.clientEditUI.Show(client);
  }


	
  @ViewChild('emailVerificationEditUI')
  public emailVerificationEditUI!: EmailVerificationEditUI;

  onAddEmailVerification() {
    let emailVerification = new EmailVerification();
    emailVerification.verificationStatus = this.currentInstance;
    this.emailVerificationEditUI.Show(emailVerification);
  }


	
  @ViewChild('phoneNumberVerificationEditUI')
  public phoneNumberVerificationEditUI!: PhoneNumberVerificationEditUI;

  onAddPhoneNumberVerification() {
    let phoneNumberVerification = new PhoneNumberVerification();
    phoneNumberVerification.verificationStatus = this.currentInstance;
    this.phoneNumberVerificationEditUI.Show(phoneNumberVerification);
  }


}
