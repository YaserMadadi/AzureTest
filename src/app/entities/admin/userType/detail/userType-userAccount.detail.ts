
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserType, UserType_ServiceCollection } from '../../../admin/userType';
import { UserAccount, UserAccount_Builder } from '../../../base/userAccount';
import { UserAccountEditUI } from '../../../base/userAccount/edit/userAccount.edit'
import { UserAccountDeleteUI } from '../../../base/userAccount/delete/userAccount.delete'
import { AccountStatus, AccountStatus_Service } from '../../../base/accountStatus';



@Component({
  selector: 'admin-userType-userAccount-detail',
  templateUrl: './userType-userAccount.detail.html',
  styleUrls: ['./userType-userAccount.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    UserAccountEditUI,        
    UserAccountDeleteUI,
  ]
}) 
export class UserType_UserAccount_DetailUI extends DetailUI<UserType, UserAccount> {

  constructor(private serviceCollection: UserType_ServiceCollection = inject(UserType_ServiceCollection)) {
    super(serviceCollection.CollectionOfUserAccount.bind(serviceCollection), inject(UserAccount_Builder));
    this.currentInstance = new UserAccount();
  }

  @Input()
  public set userType(value: UserType) {
    this.masterInstance = { ...value };
    //this.currentInstance.userType = { ...value };
    this.sourceInstance.userType = { ...value };
  }

  public accountStatusLinker: ForeignkeyLinker<AccountStatus> = new ForeignkeyLinker<AccountStatus>(inject(AccountStatus_Service), true);

		

}
