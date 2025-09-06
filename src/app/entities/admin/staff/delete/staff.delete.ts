

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Staff, Staff_Service } from '..';


@Component({
  selector: 'admin-staff-delete',
  templateUrl: './staff.delete.html',
  styleUrls: ['./staff.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class StaffDeleteUI extends DeleteUI<Staff> implements IDeleteUI<Staff> {

  constructor() {
    super(inject(Staff_Service));
  }

}
