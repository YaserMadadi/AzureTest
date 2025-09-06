

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { StaffPermission, StaffPermission_Service } from '..';
import { StaffPermissionEditUI } from '../edit/staffPermission.edit'
import { StaffPermissionDeleteUI } from '../delete/staffPermission.delete'
import { Entity } from '../../../infra/entity';
import { Staff } from '../../staff';



@Component({
  selector: 'admin-staffPermission-index',
  templateUrl: './staffPermission.hub.html',
  styleUrls: ['./staffPermission.hub.scss'],
  providers: [StaffPermission_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    StaffPermissionEditUI,
    StaffPermissionDeleteUI,
    LookupComponent,
  ]
})
export class StaffPermissionHubUI extends HubUI<StaffPermission> implements IHubUI<StaffPermission> {

  constructor(public override service: StaffPermission_Service = inject(StaffPermission_Service)) {
    super(service);
    this.entityLinker = new ForeignkeyLinker<Entity>(this.service.entityService, true);
		this.staffLinker = new ForeignkeyLinker<Staff>(this.service.staffService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Entity', () => this.navigateToUrl('/infra/entity')),
			new DropdownMenuItem('Manage  Staff', () => this.navigateToUrl('/admin/staff')),
		];
  }

  public entityLinker: ForeignkeyLinker<Entity>;

	public staffLinker: ForeignkeyLinker<Staff>;

  

}
