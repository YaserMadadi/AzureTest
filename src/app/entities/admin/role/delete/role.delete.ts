

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Role, Role_Service } from '..';


@Component({
  selector: 'admin-role-delete',
  templateUrl: './role.delete.html',
  styleUrls: ['./role.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class RoleDeleteUI extends DeleteUI<Role> implements IDeleteUI<Role> {

  constructor() {
    super(inject(Role_Service));
  }

}
