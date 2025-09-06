

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { RoleMember, RoleMember_Service } from '..';
import { RoleMemberEditUI } from '../edit/roleMember.edit'
import { RoleMemberDeleteUI } from '../delete/roleMember.delete'
import { Role } from '../../role';
import { UserAccount } from '../../../base/userAccount';



@Component({
  selector: 'admin-roleMember-index',
  templateUrl: './roleMember.hub.html',
  styleUrls: ['./roleMember.hub.scss'],
  providers: [RoleMember_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    RoleMemberEditUI,
    RoleMemberDeleteUI,
    LookupComponent,
  ]
})
export class RoleMemberHubUI extends HubUI<RoleMember> implements IHubUI<RoleMember> {

  constructor(public override service: RoleMember_Service = inject(RoleMember_Service)) {
    super(service);
    this.roleLinker = new ForeignkeyLinker<Role>(this.service.roleService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Role', () => this.navigateToUrl('/admin/role')),
			new DropdownMenuItem('Manage  User Account', () => this.navigateToUrl('/base/userAccount')),
		];
  }

  public roleLinker: ForeignkeyLinker<Role>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

  

}
