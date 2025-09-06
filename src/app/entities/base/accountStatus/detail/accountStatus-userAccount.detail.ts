
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { AccountStatus, AccountStatus_ServiceCollection } from '../../accountStatus';
import { UserAccount, UserAccount_Builder } from '../../userAccount';
import { UserAccountEditUI } from '../../userAccount/edit/userAccount.edit'
import { UserAccountDeleteUI } from '../../userAccount/delete/userAccount.delete'
import { UserType, UserType_Service } from '../../../admin/userType';



@Component({
  selector: 'base-accountStatus-userAccount-detail',
  templateUrl: './accountStatus-userAccount.detail.html',
  styleUrls: ['./accountStatus-userAccount.detail.scss'],
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
export class AccountStatus_UserAccount_DetailUI extends DetailUI<AccountStatus, UserAccount> {

  constructor(private serviceCollection: AccountStatus_ServiceCollection = inject(AccountStatus_ServiceCollection)) {
    super(serviceCollection.CollectionOfUserAccount.bind(serviceCollection), inject(UserAccount_Builder));
    this.currentInstance = new UserAccount();
  }

  @Input()
  public set accountStatus(value: AccountStatus) {
    this.masterInstance = { ...value };
    //this.currentInstance.accountStatus = { ...value };
    this.sourceInstance.accountStatus = { ...value };
  }

  public userTypeLinker: ForeignkeyLinker<UserType> = new ForeignkeyLinker<UserType>(inject(UserType_Service), true);

		

}
