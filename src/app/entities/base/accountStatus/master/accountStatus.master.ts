import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { AccountStatus, AccountStatus_Service } from '..';
import { AccountStatus_UserAccount_DetailUI } from '../detail/accountStatus-userAccount.detail';



@Component({
  selector: 'base-accountStatus-master',
  templateUrl: './accountStatus.master.html',
  styleUrls: ['./accountStatus.master.scss'],
  providers: [
    AccountStatus_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //AccountStatusEditUI,        
    //AccountStatusDeleteUI,
    AccountStatus_UserAccount_DetailUI
  ]
})
export class AccountStatusMasterUI extends MasterUI<AccountStatus> implements IMasterUI<AccountStatus> {

  constructor() {
    super(inject(AccountStatus_Service))
  }


}
