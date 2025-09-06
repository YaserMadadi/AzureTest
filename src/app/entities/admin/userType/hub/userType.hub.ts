

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { UserType, UserType_Service } from '..';
import { UserTypeEditUI } from '../edit/userType.edit'
import { UserTypeDeleteUI } from '../delete/userType.delete'
import { Menu } from '../../menu';
import { MenuEditUI } from '../../menu/edit/menu.edit';
import { UserAccount } from '../../../base/userAccount';
import { UserAccountEditUI } from '../../../base/userAccount/edit/userAccount.edit';



@Component({
  selector: 'admin-userType-index',
  templateUrl: './userType.hub.html',
  styleUrls: ['./userType.hub.scss'],
  providers: [UserType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    UserTypeEditUI,
    UserTypeDeleteUI,
    MenuEditUI,
		UserAccountEditUI,
  ]
})
export class UserTypeHubUI extends HubUI<UserType> implements IHubUI<UserType> {

  constructor(public override service: UserType_Service = inject(UserType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Menu', () => this.onAddMenu()),
			new DropdownMenuItem('Add  User Account', () => this.onAddUserAccount()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('menuEditUI')
  public menuEditUI!: MenuEditUI;

  onAddMenu() {
    let menu = new Menu();
    menu.userType = this.currentInstance;
    this.menuEditUI.Show(menu);
  }


	
  @ViewChild('userAccountEditUI')
  public userAccountEditUI!: UserAccountEditUI;

  onAddUserAccount() {
    let userAccount = new UserAccount();
    userAccount.userType = this.currentInstance;
    this.userAccountEditUI.Show(userAccount);
  }


}
