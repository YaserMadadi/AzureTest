

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { Menu, Menu_Service } from '..';
import { MenuEditUI } from '../edit/menu.edit'
import { MenuDeleteUI } from '../delete/menu.delete'
import { UserType } from '../../userType';
import { MenuItem } from '../../menuItem';
import { MenuItemEditUI } from '../../menuItem/edit/menuItem.edit';



@Component({
  selector: 'admin-menu-index',
  templateUrl: './menu.hub.html',
  styleUrls: ['./menu.hub.scss'],
  providers: [Menu_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    MenuEditUI,
    MenuDeleteUI,
    LookupComponent,
		MenuItemEditUI,
  ]
})
export class MenuHubUI extends HubUI<Menu> implements IHubUI<Menu> {

  constructor(public override service: Menu_Service = inject(Menu_Service)) {
    super(service);
    this.userTypeLinker = new ForeignkeyLinker<UserType>(this.service.userTypeService, true);

    this.quickAddItems = [
			new DropdownMenuItem('Add  Menu Item', () => this.onAddMenuItem()),];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  User Type', () => this.navigateToUrl('/admin/userType')),
		];
  }

  public userTypeLinker: ForeignkeyLinker<UserType>;

  
  @ViewChild('menuItemEditUI')
  public menuItemEditUI!: MenuItemEditUI;

  onAddMenuItem() {
    let menuItem = new MenuItem();
    menuItem.menu = this.currentInstance;
    this.menuItemEditUI.Show(menuItem);
  }


}
