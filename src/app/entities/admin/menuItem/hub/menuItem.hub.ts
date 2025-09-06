

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { MenuItem, MenuItem_Service } from '..';
import { MenuItemEditUI } from '../edit/menuItem.edit'
import { MenuItemDeleteUI } from '../delete/menuItem.delete'
import { Menu } from '../../menu';



@Component({
  selector: 'admin-menuItem-index',
  templateUrl: './menuItem.hub.html',
  styleUrls: ['./menuItem.hub.scss'],
  providers: [MenuItem_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    MenuItemEditUI,
    MenuItemDeleteUI,
    LookupComponent,
  ]
})
export class MenuItemHubUI extends HubUI<MenuItem> implements IHubUI<MenuItem> {

  constructor(public override service: MenuItem_Service = inject(MenuItem_Service)) {
    super(service);
    this.menuLinker = new ForeignkeyLinker<Menu>(this.service.menuService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Menu', () => this.navigateToUrl('/admin/menu')),
		];
  }

  public menuLinker: ForeignkeyLinker<Menu>;

  

}
