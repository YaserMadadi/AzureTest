
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Role, Role_ServiceCollection } from '../../role';
import { RoleMember, RoleMember_Builder } from '../../roleMember';
import { RoleMemberEditUI } from '../../roleMember/edit/roleMember.edit'
import { RoleMemberDeleteUI } from '../../roleMember/delete/roleMember.delete'
import { UserAccount, UserAccount_Service } from '../../../base/userAccount';



@Component({
  selector: 'admin-role-roleMember-detail',
  templateUrl: './role-roleMember.detail.html',
  styleUrls: ['./role-roleMember.detail.scss'],
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
export class Role_RoleMember_DetailUI extends DetailUI<Role, RoleMember> {

  constructor(private serviceCollection: Role_ServiceCollection = inject(Role_ServiceCollection)) {
    super(serviceCollection.CollectionOfRoleMember.bind(serviceCollection), inject(RoleMember_Builder));
    this.currentInstance = new RoleMember();
  }

  @Input()
  public set role(value: Role) {
    this.masterInstance = { ...value };
    //this.currentInstance.role = { ...value };
    this.sourceInstance.role = { ...value };
  }

  public userAccountLinker: ForeignkeyLinker<UserAccount> = new ForeignkeyLinker<UserAccount>(inject(UserAccount_Service), true);

		

}
