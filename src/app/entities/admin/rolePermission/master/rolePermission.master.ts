import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { RolePermission, RolePermission_Service } from '..';



@Component({
  selector: 'admin-rolePermission-master',
  templateUrl: './rolePermission.master.html',
  styleUrls: ['./rolePermission.master.scss'],
  providers: [
    RolePermission_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //RolePermissionEditUI,        
    //RolePermissionDeleteUI,
    // No Item...
  ]
})
export class RolePermissionMasterUI extends MasterUI<RolePermission> implements IMasterUI<RolePermission> {

  constructor() {
    super(inject(RolePermission_Service))
  }


}
