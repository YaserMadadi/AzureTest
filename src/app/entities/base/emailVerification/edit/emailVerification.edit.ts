

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { EmailVerification, EmailVerification_Service } from '..';
import { UserAccount } from '../../userAccount';
import { VerificationStatus } from '../../verificationStatus';



@Component({
  selector: 'base-emailVerification-edit',
  templateUrl: './emailVerification.edit.html',
  styleUrls: ['./emailVerification.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class EmailVerificationEditUI extends EditUI<EmailVerification> {
    
  constructor(public override service: EmailVerification_Service = inject(EmailVerification_Service )) {
    super(service); 
    this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
		this.verificationStatusLinker = new ForeignkeyLinker<VerificationStatus>(this.service.verificationStatusService, true);
  }

  @Input() 
  set userAccountLocked(value: boolean) {
    this.userAccountLinker.locked = value;
  }

	@Input() 
  set verificationStatusLocked(value: boolean) {
    this.verificationStatusLinker.locked = value;
  }

  public userAccountLinker: ForeignkeyLinker<UserAccount>;

	public verificationStatusLinker: ForeignkeyLinker<VerificationStatus>;

}
