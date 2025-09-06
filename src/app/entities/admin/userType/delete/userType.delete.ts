

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { UserType, UserType_Service } from '..';


@Component({
  selector: 'admin-userType-delete',
  templateUrl: './userType.delete.html',
  styleUrls: ['./userType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class UserTypeDeleteUI extends DeleteUI<UserType> implements IDeleteUI<UserType> {

  constructor() {
    super(inject(UserType_Service));
  }

}
