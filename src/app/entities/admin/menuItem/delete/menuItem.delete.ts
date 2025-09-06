

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { MenuItem, MenuItem_Service } from '..';


@Component({
  selector: 'admin-menuItem-delete',
  templateUrl: './menuItem.delete.html',
  styleUrls: ['./menuItem.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class MenuItemDeleteUI extends DeleteUI<MenuItem> implements IDeleteUI<MenuItem> {

  constructor() {
    super(inject(MenuItem_Service));
  }

}
