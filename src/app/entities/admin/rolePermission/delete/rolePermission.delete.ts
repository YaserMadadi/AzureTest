

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { RolePermission, RolePermission_Service } from '..';


@Component({
  selector: 'admin-rolePermission-delete',
  templateUrl: './rolePermission.delete.html',
  styleUrls: ['./rolePermission.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class RolePermissionDeleteUI extends DeleteUI<RolePermission> implements IDeleteUI<RolePermission> {

  constructor() {
    super(inject(RolePermission_Service));
  }

}
