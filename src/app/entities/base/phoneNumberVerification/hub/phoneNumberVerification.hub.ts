

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { PhoneNumberVerification, PhoneNumberVerification_Service } from '..';
import { PhoneNumberVerificationEditUI } from '../edit/phoneNumberVerification.edit'
import { PhoneNumberVerificationDeleteUI } from '../delete/phoneNumberVerification.delete'
import { Client } from '../../client';
import { VerificationStatus } from '../../verificationStatus';



@Component({
  selector: 'base-phoneNumberVerification-index',
  templateUrl: './phoneNumberVerification.hub.html',
  styleUrls: ['./phoneNumberVerification.hub.scss'],
  providers: [PhoneNumberVerification_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    PhoneNumberVerificationEditUI,
    PhoneNumberVerificationDeleteUI,
    LookupComponent,
  ]
})
export class PhoneNumberVerificationHubUI extends HubUI<PhoneNumberVerification> implements IHubUI<PhoneNumberVerification> {

  constructor(public override service: PhoneNumberVerification_Service = inject(PhoneNumberVerification_Service)) {
    super(service);
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.verificationStatusLinker = new ForeignkeyLinker<VerificationStatus>(this.service.verificationStatusService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client', () => this.navigateToUrl('/base/client')),
			new DropdownMenuItem('Manage  Verification Status', () => this.navigateToUrl('/base/verificationStatus')),
		];
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public verificationStatusLinker: ForeignkeyLinker<VerificationStatus>;

  

}
