

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { UserAccount, UserAccount_Service } from '..';
import { UserAccountEditUI } from '../edit/userAccount.edit'
import { UserAccountDeleteUI } from '../delete/userAccount.delete'
import { AccountStatus } from '../../accountStatus';
import { UserType } from '../../../admin/userType';
import { RoleMember } from '../../../admin/roleMember';
import { RoleMemberEditUI } from '../../../admin/roleMember/edit/roleMember.edit';
import { Staff } from '../../../admin/staff';
import { StaffEditUI } from '../../../admin/staff/edit/staff.edit';
import { Client } from '../../client';
import { ClientEditUI } from '../../client/edit/client.edit';
import { EmailVerification } from '../../emailVerification';
import { EmailVerificationEditUI } from '../../emailVerification/edit/emailVerification.edit';
import { Provider } from '../../provider';
import { ProviderEditUI } from '../../provider/edit/provider.edit';



@Component({
  selector: 'base-userAccount-index',
  templateUrl: './userAccount.hub.html',
  styleUrls: ['./userAccount.hub.scss'],
  providers: [UserAccount_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    UserAccountEditUI,
    UserAccountDeleteUI,
    LookupComponent,
		RoleMemberEditUI,
		StaffEditUI,
		ClientEditUI,
		EmailVerificationEditUI,
		ProviderEditUI,
  ]
})
export class UserAccountHubUI extends HubUI<UserAccount> implements IHubUI<UserAccount> {

  constructor(public override service: UserAccount_Service = inject(UserAccount_Service)) {
    super(service);
    this.accountStatusLinker = new ForeignkeyLinker<AccountStatus>(this.service.accountStatusService, true);
		this.userTypeLinker = new ForeignkeyLinker<UserType>(this.service.userTypeService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Role Member', () => this.onAddRoleMember()),
			new DropdownMenuItem('Add  Staff', () => this.onAddStaff()),
			new DropdownMenuItem('Add  Client', () => this.onAddClient()),
			new DropdownMenuItem('Add  Email Verification', () => this.onAddEmailVerification()),
			new DropdownMenuItem('Add  Provider', () => this.onAddProvider()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Account Status', () => this.navigateToUrl('/base/accountStatus')),
			new DropdownMenuItem('Manage  User Type', () => this.navigateToUrl('/admin/userType')),
		];
  }

  public accountStatusLinker: ForeignkeyLinker<AccountStatus>;

	public userTypeLinker: ForeignkeyLinker<UserType>;

  
  @ViewChild('roleMemberEditUI')
  public roleMemberEditUI!: RoleMemberEditUI;

  onAddRoleMember() {
    let roleMember = new RoleMember();
    roleMember.userAccount = this.currentInstance;
    this.roleMemberEditUI.Show(roleMember);
  }


	
  @ViewChild('staffEditUI')
  public staffEditUI!: StaffEditUI;

  onAddStaff() {
    let staff = new Staff();
    staff.userAccount = this.currentInstance;
    this.staffEditUI.Show(staff);
  }


	
  @ViewChild('clientEditUI')
  public clientEditUI!: ClientEditUI;

  onAddClient() {
    let client = new Client();
    client.userAccount = this.currentInstance;
    this.clientEditUI.Show(client);
  }


	
  @ViewChild('emailVerificationEditUI')
  public emailVerificationEditUI!: EmailVerificationEditUI;

  onAddEmailVerification() {
    let emailVerification = new EmailVerification();
    emailVerification.userAccount = this.currentInstance;
    this.emailVerificationEditUI.Show(emailVerification);
  }


	
  @ViewChild('providerEditUI')
  public providerEditUI!: ProviderEditUI;

  onAddProvider() {
    let provider = new Provider();
    provider.userAccount = this.currentInstance;
    this.providerEditUI.Show(provider);
  }


}
