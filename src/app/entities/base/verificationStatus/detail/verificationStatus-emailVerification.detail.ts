
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { VerificationStatus, VerificationStatus_ServiceCollection } from '../../verificationStatus';
import { EmailVerification, EmailVerification_Builder } from '../../emailVerification';
import { EmailVerificationEditUI } from '../../emailVerification/edit/emailVerification.edit'
import { EmailVerificationDeleteUI } from '../../emailVerification/delete/emailVerification.delete'
import { UserAccount, UserAccount_Service } from '../../userAccount';



@Component({
  selector: 'base-verificationStatus-emailVerification-detail',
  templateUrl: './verificationStatus-emailVerification.detail.html',
  styleUrls: ['./verificationStatus-emailVerification.detail.scss'],
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
export class VerificationStatus_EmailVerification_DetailUI extends DetailUI<VerificationStatus, EmailVerification> {

  constructor(private serviceCollection: VerificationStatus_ServiceCollection = inject(VerificationStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfEmailVerification.bind(serviceCollection), inject(EmailVerification_Builder));
    this.currentInstance = new EmailVerification();
  }

  @Input()
  public set verificationStatus(value: VerificationStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.verificationStatus = { ...value };
    this.sourceInstance.verificationStatus = { ...value };
  }

  public userAccountLinker: ForeignkeyLinker<UserAccount> = new ForeignkeyLinker<UserAccount>(inject(UserAccount_Service), true);

		

}
