

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { RolePermission, RolePermission_Service } from '..';
import { RolePermissionEditUI } from '../edit/rolePermission.edit'
import { RolePermissionDeleteUI } from '../delete/rolePermission.delete'
import { Entity } from '../../../infra/entity';
import { Role } from '../../role';



@Component({
  selector: 'admin-rolePermission-index',
  templateUrl: './rolePermission.hub.html',
  styleUrls: ['./rolePermission.hub.scss'],
  providers: [RolePermission_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    RolePermissionEditUI,
    RolePermissionDeleteUI,
    LookupComponent,
  ]
})
export class RolePermissionHubUI extends HubUI<RolePermission> implements IHubUI<RolePermission> {

  constructor(public override service: RolePermission_Service = inject(RolePermission_Service)) {
    super(service);
    this.entityLinker = new ForeignkeyLinker<Entity>(this.service.entityService, true);
		this.roleLinker = new ForeignkeyLinker<Role>(this.service.roleService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Entity', () => this.navigateToUrl('/infra/entity')),
			new DropdownMenuItem('Manage  Role', () => this.navigateToUrl('/admin/role')),
		];
  }

  public entityLinker: ForeignkeyLinker<Entity>;

	public roleLinker: ForeignkeyLinker<Role>;

  

}
