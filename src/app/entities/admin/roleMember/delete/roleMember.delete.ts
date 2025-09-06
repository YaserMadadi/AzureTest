

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { RoleMember, RoleMember_Service } from '..';


@Component({
  selector: 'admin-roleMember-delete',
  templateUrl: './roleMember.delete.html',
  styleUrls: ['./roleMember.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class RoleMemberDeleteUI extends DeleteUI<RoleMember> implements IDeleteUI<RoleMember> {

  constructor() {
    super(inject(RoleMember_Service));
  }

}
