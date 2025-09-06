
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { UserType, UserType_ServiceCollection } from '../../userType';
import { Menu, Menu_Builder } from '../../menu';
import { MenuEditUI } from '../../menu/edit/menu.edit'
import { MenuDeleteUI } from '../../menu/delete/menu.delete'



@Component({
  selector: 'admin-userType-menu-detail',
  templateUrl: './userType-menu.detail.html',
  styleUrls: ['./userType-menu.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    MenuEditUI,        
    MenuDeleteUI,
  ]
}) 
export class UserType_Menu_DetailUI extends DetailUI<UserType, Menu> {

  constructor(private serviceCollection: UserType_ServiceCollection = inject(UserType_ServiceCollection)) {
    super(serviceCollection.CollectionOfMenu.bind(serviceCollection), inject(Menu_Builder));
    this.currentInstance = new Menu();
  }

  @Input()
  public set userType(value: UserType) {
    this.masterInstance = { ...value };
    //this.currentInstance.userType = { ...value };
    this.sourceInstance.userType = { ...value };
  }

  

}
