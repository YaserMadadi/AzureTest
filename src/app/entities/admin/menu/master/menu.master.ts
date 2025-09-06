import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { Menu, Menu_Service } from '..';
import { Menu_MenuItem_DetailUI } from '../detail/menu-menuItem.detail';



@Component({
  selector: 'admin-menu-master',
  templateUrl: './menu.master.html',
  styleUrls: ['./menu.master.scss'],
  providers: [
    Menu_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //MenuEditUI,        
    //MenuDeleteUI,
    Menu_MenuItem_DetailUI
  ]
})
export class MenuMasterUI extends MasterUI<Menu> implements IMasterUI<Menu> {

  constructor() {
    super(inject(Menu_Service))
  }


}
