import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { UserAccount, UserAccount_Service } from '..';
import { UserAccount_RoleMember_DetailUI } from '../detail/userAccount-roleMember.detail';
import { UserAccount_Staff_DetailUI } from '../detail/userAccount-staff.detail';
import { UserAccount_Client_DetailUI } from '../detail/userAccount-client.detail';
import { UserAccount_EmailVerification_DetailUI } from '../detail/userAccount-emailVerification.detail';
import { UserAccount_Provider_DetailUI } from '../detail/userAccount-provider.detail';



@Component({
  selector: 'base-userAccount-master',
  templateUrl: './userAccount.master.html',
  styleUrls: ['./userAccount.master.scss'],
  providers: [
    UserAccount_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //UserAccountEditUI,        
    //UserAccountDeleteUI,
    UserAccount_RoleMember_DetailUI,
				UserAccount_Staff_DetailUI,
				UserAccount_Client_DetailUI,
				UserAccount_EmailVerification_DetailUI,
				UserAccount_Provider_DetailUI
  ]
})
export class UserAccountMasterUI extends MasterUI<UserAccount> implements IMasterUI<UserAccount> {

  constructor() {
    super(inject(UserAccount_Service))
  }


}
