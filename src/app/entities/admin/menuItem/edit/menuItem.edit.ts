

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { MenuItem, MenuItem_Service } from '..';
import { Menu } from '../../menu';



@Component({
  selector: 'admin-menuItem-edit',
  templateUrl: './menuItem.edit.html',
  styleUrls: ['./menuItem.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class MenuItemEditUI extends EditUI<MenuItem> {
    
  constructor(public override service: MenuItem_Service = inject(MenuItem_Service )) {
    super(service); 
    this.menuLinker = new ForeignkeyLinker<Menu>(this.service.menuService, true);
  }

  @Input() 
  set menuLocked(value: boolean) {
    this.menuLinker.locked = value;
  }

  public menuLinker: ForeignkeyLinker<Menu>;

}
