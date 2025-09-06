import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Staff, Staff_Service } from '..';
import { Staff_StaffPermission_DetailUI } from '../detail/staff-staffPermission.detail';



@Component({
  selector: 'admin-staff-master',
  templateUrl: './staff.master.html',
  styleUrls: ['./staff.master.scss'],
  providers: [
    Staff_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //StaffEditUI,        
    //StaffDeleteUI,
    Staff_StaffPermission_DetailUI
  ]
})
export class StaffMasterUI extends MasterUI<Staff> implements IMasterUI<Staff> {

  constructor() {
    super(inject(Staff_Service))
  }


}
