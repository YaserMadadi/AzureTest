

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Entity, Entity_Service } from '..';
import { EntityEditUI } from '../edit/entity.edit'
import { EntityDeleteUI } from '../delete/entity.delete'
import { RolePermission } from '../../../admin/rolePermission';
import { RolePermissionEditUI } from '../../../admin/rolePermission/edit/rolePermission.edit';
import { StaffPermission } from '../../../admin/staffPermission';
import { StaffPermissionEditUI } from '../../../admin/staffPermission/edit/staffPermission.edit';



@Component({
  selector: 'infra-entity-index',
  templateUrl: './entity.hub.html',
  styleUrls: ['./entity.hub.scss'],
  providers: [Entity_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    EntityEditUI,
    EntityDeleteUI,
    RolePermissionEditUI,
		StaffPermissionEditUI,
  ]
})
export class EntityHubUI extends HubUI<Entity> implements IHubUI<Entity> {

  constructor(public override service: Entity_Service = inject(Entity_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Role Permission', () => this.onAddRolePermission()),
			new DropdownMenuItem('Add  Staff Permission', () => this.onAddStaffPermission()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('rolePermissionEditUI')
  public rolePermissionEditUI!: RolePermissionEditUI;

  onAddRolePermission() {
    let rolePermission = new RolePermission();
    rolePermission.entity = this.currentInstance;
    this.rolePermissionEditUI.Show(rolePermission);
  }


	
  @ViewChild('staffPermissionEditUI')
  public staffPermissionEditUI!: StaffPermissionEditUI;

  onAddStaffPermission() {
    let staffPermission = new StaffPermission();
    staffPermission.entity = this.currentInstance;
    this.staffPermissionEditUI.Show(staffPermission);
  }


}
