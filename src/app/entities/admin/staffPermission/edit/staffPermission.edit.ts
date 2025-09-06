

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { StaffPermission, StaffPermission_Service } from '..';
import { Entity } from '../../../infra/entity';
import { Staff } from '../../staff';



@Component({
  selector: 'admin-staffPermission-edit',
  templateUrl: './staffPermission.edit.html',
  styleUrls: ['./staffPermission.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class StaffPermissionEditUI extends EditUI<StaffPermission> {
    
  constructor(public override service: StaffPermission_Service = inject(StaffPermission_Service )) {
    super(service); 
    this.entityLinker = new ForeignkeyLinker<Entity>(this.service.entityService, true);
		this.staffLinker = new ForeignkeyLinker<Staff>(this.service.staffService, true);
  }

  @Input() 
  set entityLocked(value: boolean) {
    this.entityLinker.locked = value;
  }

	@Input() 
  set staffLocked(value: boolean) {
    this.staffLinker.locked = value;
  }

  public entityLinker: ForeignkeyLinker<Entity>;

	public staffLinker: ForeignkeyLinker<Staff>;

}
