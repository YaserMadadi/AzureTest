import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { RoleMember, RoleMember_Service } from '..';



@Component({
  selector: 'admin-roleMember-master',
  templateUrl: './roleMember.master.html',
  styleUrls: ['./roleMember.master.scss'],
  providers: [
    RoleMember_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //RoleMemberEditUI,        
    //RoleMemberDeleteUI,
    // No Item...
  ]
})
export class RoleMemberMasterUI extends MasterUI<RoleMember> implements IMasterUI<RoleMember> {

  constructor() {
    super(inject(RoleMember_Service))
  }


}
