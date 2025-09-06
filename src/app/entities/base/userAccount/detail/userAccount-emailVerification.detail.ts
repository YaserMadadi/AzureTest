
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserAccount, UserAccount_ServiceCollection } from '../../userAccount';
import { EmailVerification, EmailVerification_Builder } from '../../emailVerification';
import { EmailVerificationEditUI } from '../../emailVerification/edit/emailVerification.edit'
import { EmailVerificationDeleteUI } from '../../emailVerification/delete/emailVerification.delete'
import { VerificationStatus, VerificationStatus_Service } from '../../verificationStatus';



@Component({
  selector: 'base-userAccount-emailVerification-detail',
  templateUrl: './userAccount-emailVerification.detail.html',
  styleUrls: ['./userAccount-emailVerification.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    EmailVerificationEditUI,        
    EmailVerificationDeleteUI,
  ]
}) 
export class UserAccount_EmailVerification_DetailUI extends DetailUI<UserAccount, EmailVerification> {

  constructor(private serviceCollection: UserAccount_ServiceCollection = inject(UserAccount_ServiceCollection)) {
    super(serviceCollection.CollectionOfEmailVerification.bind(serviceCollection), inject(EmailVerification_Builder));
    this.currentInstance = new EmailVerification();
  }

  @Input()
  public set userAccount(value: UserAccount) {
    this.masterInstance = { ...value };
    //this.currentInstance.userAccount = { ...value };
    this.sourceInstance.userAccount = { ...value };
  }

  public verificationStatusLinker: ForeignkeyLinker<VerificationStatus> = new ForeignkeyLinker<VerificationStatus>(inject(VerificationStatus_Service), true);

		

}
