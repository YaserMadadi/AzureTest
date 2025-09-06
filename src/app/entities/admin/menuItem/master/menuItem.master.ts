import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { MenuItem, MenuItem_Service } from '..';



@Component({
  selector: 'admin-menuItem-master',
  templateUrl: './menuItem.master.html',
  styleUrls: ['./menuItem.master.scss'],
  providers: [
    MenuItem_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //MenuItemEditUI,        
    //MenuItemDeleteUI,
    // No Item...
  ]
})
export class MenuItemMasterUI extends MasterUI<MenuItem> implements IMasterUI<MenuItem> {

  constructor() {
    super(inject(MenuItem_Service))
  }


}
