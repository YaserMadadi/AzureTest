

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { AccountStatus, AccountStatus_Service } from '..';
import { AccountStatusEditUI } from '../edit/accountStatus.edit'
import { AccountStatusDeleteUI } from '../delete/accountStatus.delete'
import { UserAccount } from '../../userAccount';
import { UserAccountEditUI } from '../../userAccount/edit/userAccount.edit';



@Component({
  selector: 'base-accountStatus-index',
  templateUrl: './accountStatus.hub.html',
  styleUrls: ['./accountStatus.hub.scss'],
  providers: [AccountStatus_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    AccountStatusEditUI,
    AccountStatusDeleteUI,
    UserAccountEditUI,
  ]
})
export class AccountStatusHubUI extends HubUI<AccountStatus> implements IHubUI<AccountStatus> {

  constructor(public override service: AccountStatus_Service = inject(AccountStatus_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  User Account', () => this.onAddUserAccount()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('userAccountEditUI')
  public userAccountEditUI!: UserAccountEditUI;

  onAddUserAccount() {
    let userAccount = new UserAccount();
    userAccount.accountStatus = this.currentInstance;
    this.userAccountEditUI.Show(userAccount);
  }


}
