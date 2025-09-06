

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { UserAccount, UserAccount_Service } from '..';
import { AccountStatus } from '../../accountStatus';
import { UserType } from '../../../admin/userType';



@Component({
  selector: 'base-userAccount-edit',
  templateUrl: './userAccount.edit.html',
  styleUrls: ['./userAccount.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class UserAccountEditUI extends EditUI<UserAccount> {
    
  constructor(public override service: UserAccount_Service = inject(UserAccount_Service )) {
    super(service); 
    this.accountStatusLinker = new ForeignkeyLinker<AccountStatus>(this.service.accountStatusService, true);
		this.userTypeLinker = new ForeignkeyLinker<UserType>(this.service.userTypeService, true);
  }

  @Input() 
  set accountStatusLocked(value: boolean) {
    this.accountStatusLinker.locked = value;
  }

	@Input() 
  set userTypeLocked(value: boolean) {
    this.userTypeLinker.locked = value;
  }

  public accountStatusLinker: ForeignkeyLinker<AccountStatus>;

	public userTypeLinker: ForeignkeyLinker<UserType>;

}
