import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Role, Role_Service } from '..';
import { Role_RoleMember_DetailUI } from '../detail/role-roleMember.detail';
import { Role_RolePermission_DetailUI } from '../detail/role-rolePermission.detail';



@Component({
  selector: 'admin-role-master',
  templateUrl: './role.master.html',
  styleUrls: ['./role.master.scss'],
  providers: [
    Role_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //RoleEditUI,        
    //RoleDeleteUI,
    Role_RoleMember_DetailUI,
				Role_RolePermission_DetailUI
  ]
})
export class RoleMasterUI extends MasterUI<Role> implements IMasterUI<Role> {

  constructor() {
    super(inject(Role_Service))
  }


}
