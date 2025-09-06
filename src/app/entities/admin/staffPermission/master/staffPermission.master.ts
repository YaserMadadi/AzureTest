import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { StaffPermission, StaffPermission_Service } from '..';



@Component({
  selector: 'admin-staffPermission-master',
  templateUrl: './staffPermission.master.html',
  styleUrls: ['./staffPermission.master.scss'],
  providers: [
    StaffPermission_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //StaffPermissionEditUI,        
    //StaffPermissionDeleteUI,
    // No Item...
  ]
})
export class StaffPermissionMasterUI extends MasterUI<StaffPermission> implements IMasterUI<StaffPermission> {

  constructor() {
    super(inject(StaffPermission_Service))
  }


}
