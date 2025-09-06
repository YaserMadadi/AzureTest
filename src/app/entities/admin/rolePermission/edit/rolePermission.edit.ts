

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { RolePermission, RolePermission_Service } from '..';
import { Entity } from '../../../infra/entity';
import { Role } from '../../role';



@Component({
  selector: 'admin-rolePermission-edit',
  templateUrl: './rolePermission.edit.html',
  styleUrls: ['./rolePermission.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class RolePermissionEditUI extends EditUI<RolePermission> {
    
  constructor(public override service: RolePermission_Service = inject(RolePermission_Service )) {
    super(service); 
    this.entityLinker = new ForeignkeyLinker<Entity>(this.service.entityService, true);
		this.roleLinker = new ForeignkeyLinker<Role>(this.service.roleService, true);
  }

  @Input() 
  set entityLocked(value: boolean) {
    this.entityLinker.locked = value;
  }

	@Input() 
  set roleLocked(value: boolean) {
    this.roleLinker.locked = value;
  }

  public entityLinker: ForeignkeyLinker<Entity>;

	public roleLinker: ForeignkeyLinker<Role>;

}
