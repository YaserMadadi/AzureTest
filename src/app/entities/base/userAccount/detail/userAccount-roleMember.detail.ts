
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserAccount, UserAccount_ServiceCollection } from '../../../base/userAccount';
import { RoleMember, RoleMember_Builder } from '../../../admin/roleMember';
import { RoleMemberEditUI } from '../../../admin/roleMember/edit/roleMember.edit'
import { RoleMemberDeleteUI } from '../../../admin/roleMember/delete/roleMember.delete'
import { Role, Role_Service } from '../../../admin/role';



@Component({
  selector: 'base-userAccount-roleMember-detail',
  templateUrl: './userAccount-roleMember.detail.html',
  styleUrls: ['./userAccount-roleMember.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    RoleMemberEditUI,        
    RoleMemberDeleteUI,
  ]
}) 
export class UserAccount_RoleMember_DetailUI extends DetailUI<UserAccount, RoleMember> {

  constructor(private serviceCollection: UserAccount_ServiceCollection = inject(UserAccount_ServiceCollection)) {
    super(serviceCollection.CollectionOfRoleMember.bind(serviceCollection), inject(RoleMember_Builder));
    this.currentInstance = new RoleMember();
  }

  @Input()
  public set userAccount(value: UserAccount) {
    this.masterInstance = { ...value };
    //this.currentInstance.userAccount = { ...value };
    this.sourceInstance.userAccount = { ...value };
  }

  public roleLinker: ForeignkeyLinker<Role> = new ForeignkeyLinker<Role>(inject(Role_Service), true);

		

}
