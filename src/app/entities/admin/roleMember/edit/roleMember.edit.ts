

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { RoleMember, RoleMember_Service } from '..';
import { Role } from '../../role';
import { UserAccount } from '../../../base/userAccount';



@Component({
  selector: 'admin-roleMember-edit',
  templateUrl: './roleMember.edit.html',
  styleUrls: ['./roleMember.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class RoleMemberEditUI extends EditUI<RoleMember> {
    
  constructor(public override service: RoleMember_Service = inject(RoleMember_Service )) {
    super(service); 
    this.roleLinker = new ForeignkeyLinker<Role>(this.service.roleService, true);
		this.userAccountLinker = new ForeignkeyLinker<UserAccount>(this.service.userAccountService, true);
  }

  @Input() 
  set roleLocked(value: boolean) {
    this.roleLinker.locked = value;
  }

	@Input() 
  set userAccountLocked(value: boolean) {
    this.userAccountLinker.locked = value;
  }

  public roleLinker: ForeignkeyLinker<Role>;

	public userAccountLinker: ForeignkeyLinker<UserAccount>;

}
