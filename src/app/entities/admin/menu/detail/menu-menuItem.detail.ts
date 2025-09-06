
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Menu, Menu_ServiceCollection } from '../../menu';
import { MenuItem, MenuItem_Builder } from '../../menuItem';
import { MenuItemEditUI } from '../../menuItem/edit/menuItem.edit'
import { MenuItemDeleteUI } from '../../menuItem/delete/menuItem.delete'



@Component({
  selector: 'admin-menu-menuItem-detail',
  templateUrl: './menu-menuItem.detail.html',
  styleUrls: ['./menu-menuItem.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    MenuItemEditUI,        
    MenuItemDeleteUI,
  ]
}) 
export class Menu_MenuItem_DetailUI extends DetailUI<Menu, MenuItem> {

  constructor(private serviceCollection: Menu_ServiceCollection = inject(Menu_ServiceCollection)) {
    super(serviceCollection.CollectionOfMenuItem.bind(serviceCollection), inject(MenuItem_Builder));
    this.currentInstance = new MenuItem();
  }

  @Input()
  public set menu(value: Menu) {
    this.masterInstance = { ...value };
    //this.currentInstance.menu = { ...value };
    this.sourceInstance.menu = { ...value };
  }

  

}
