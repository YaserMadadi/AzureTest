

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Staff, Staff_Service } from '..';
import { StaffEditUI } from '../edit/staff.edit'
import { StaffDeleteUI } from '../delete/staff.delete'
import { Gender } from '../../../base/gender';
import { UserAccount } from '../../../base/userAccount';
import { StaffPermission } from '../../staffPermission';
import { StaffPermissionEditUI } from '../../staffPermission/edit/staffPermission.edit';



@Component({
  selector: 'admin-staff-index',
  templateUrl: './staff.hub.html',
  styleUrls: ['./staff.hub.scss'],
  providers: [Staff_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    StaffEditUI,
    StaffDeleteUI,
    LookupComponent,
		StaffPermissionEditUI,
  ]
})
export class StaffHubUI extends HubUI<Staff> implements IHubUI<Staff> {

  constructor(public override service: Staff_Service = inject(Staff_Service)) {
    super(service);
    this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Staff Permission', () => this.onAddStaffPermission()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Gender', () => this.navigateToUrl('/base/gender')),
			new DropdownMenuItem('Manage  User Account', () => this.navigateToUrl('/base/userAccount')),
		];
  }

  public genderLinker: ForeignkeyLinker<Gender>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

  
  @ViewChild('staffPermissionEditUI')
  public staffPermissionEditUI!: StaffPermissionEditUI;

  onAddStaffPermission() {
    let staffPermission = new StaffPermission();
    staffPermission.staff = this.currentInstance;
    this.staffPermissionEditUI.Show(staffPermission);
  }


}
