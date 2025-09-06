import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { UserType, UserType_Service } from '..';
import { UserType_Menu_DetailUI } from '../detail/userType-menu.detail';
import { UserType_UserAccount_DetailUI } from '../detail/userType-userAccount.detail';



@Component({
  selector: 'admin-userType-master',
  templateUrl: './userType.master.html',
  styleUrls: ['./userType.master.scss'],
  providers: [
    UserType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //UserTypeEditUI,        
    //UserTypeDeleteUI,
    UserType_Menu_DetailUI,
				UserType_UserAccount_DetailUI
  ]
})
export class UserTypeMasterUI extends MasterUI<UserType> implements IMasterUI<UserType> {

  constructor() {
    super(inject(UserType_Service))
  }


}
