

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { Role, Role_Service } from '..';



@Component({
  selector: 'admin-role-edit',
  templateUrl: './role.edit.html',
  styleUrls: ['./role.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class RoleEditUI extends EditUI<Role> {
    
  constructor(public override service: Role_Service = inject(Role_Service )) {
    super(service); 
    
  }

  

  

}
