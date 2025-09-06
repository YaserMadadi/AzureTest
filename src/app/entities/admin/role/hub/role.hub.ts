

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Role, Role_Service } from '..';
import { RoleEditUI } from '../edit/role.edit'
import { RoleDeleteUI } from '../delete/role.delete'
import { RoleMember } from '../../roleMember';
import { RoleMemberEditUI } from '../../roleMember/edit/roleMember.edit';
import { RolePermission } from '../../rolePermission';
import { RolePermissionEditUI } from '../../rolePermission/edit/rolePermission.edit';



@Component({
  selector: 'admin-role-index',
  templateUrl: './role.hub.html',
  styleUrls: ['./role.hub.scss'],
  providers: [Role_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    RoleEditUI,
    RoleDeleteUI,
    RoleMemberEditUI,
		RolePermissionEditUI,
  ]
})
export class RoleHubUI extends HubUI<Role> implements IHubUI<Role> {

  constructor(public override service: Role_Service = inject(Role_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Role Member', () => this.onAddRoleMember()),
			new DropdownMenuItem('Add  Role Permission', () => this.onAddRolePermission()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('roleMemberEditUI')
  public roleMemberEditUI!: RoleMemberEditUI;

  onAddRoleMember() {
    let roleMember = new RoleMember();
    roleMember.role = this.currentInstance;
    this.roleMemberEditUI.Show(roleMember);
  }


	
  @ViewChild('rolePermissionEditUI')
  public rolePermissionEditUI!: RolePermissionEditUI;

  onAddRolePermission() {
    let rolePermission = new RolePermission();
    rolePermission.role = this.currentInstance;
    this.rolePermissionEditUI.Show(rolePermission);
  }


}
