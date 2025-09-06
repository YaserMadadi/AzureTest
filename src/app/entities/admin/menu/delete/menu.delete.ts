

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { Menu, Menu_Service } from '..';


@Component({
  selector: 'admin-menu-delete',
  templateUrl: './menu.delete.html',
  styleUrls: ['./menu.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class MenuDeleteUI extends DeleteUI<Menu> implements IDeleteUI<Menu> {

  constructor() {
    super(inject(Menu_Service));
  }

}
