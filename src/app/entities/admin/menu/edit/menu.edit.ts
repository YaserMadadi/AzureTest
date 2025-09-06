

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Menu, Menu_Service } from '..';
import { UserType } from '../../userType';



@Component({
  selector: 'admin-menu-edit',
  templateUrl: './menu.edit.html',
  styleUrls: ['./menu.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class MenuEditUI extends EditUI<Menu> {
    
  constructor(public override service: Menu_Service = inject(Menu_Service )) {
    super(service); 
    this.userTypeLinker = new ForeignkeyLinker<UserType>(this.service.userTypeService, true);
  }

  @Input() 
  set userTypeLocked(value: boolean) {
    this.userTypeLinker.locked = value;
  }

  public userTypeLinker: ForeignkeyLinker<UserType>;

}
