

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { EmailVerification, EmailVerification_Service } from '..';
import { EmailVerificationEditUI } from '../edit/emailVerification.edit'
import { EmailVerificationDeleteUI } from '../delete/emailVerification.delete'
import { UserAccount } from '../../userAccount';
import { VerificationStatus } from '../../verificationStatus';



@Component({
  selector: 'base-emailVerification-index',
  templateUrl: './emailVerification.hub.html',
  styleUrls: ['./emailVerification.hub.scss'],
  providers: [EmailVerification_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    EmailVerificationEditUI,
    EmailVerificationDeleteUI,
    LookupComponent,
  ]
})
export class EmailVerificationHubUI extends HubUI<EmailVerification> implements IHubUI<EmailVerification> {

  constructor(public override service: EmailVerification_Service = inject(EmailVerification_Service)) {
    super(service);
    this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
		this.verificationStatusLinker = new ForeignkeyLinker<VerificationStatus>(this.service.verificationStatusService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  User Account', () => this.navigateToUrl('/base/userAccount')),
			new DropdownMenuItem('Manage  Verification Status', () => this.navigateToUrl('/base/verificationStatus')),
		];
  }

  public userAccountLinker: ForeignkeyLinker<UserAccount>;

	public verificationStatusLinker: ForeignkeyLinker<VerificationStatus>;

  

}
