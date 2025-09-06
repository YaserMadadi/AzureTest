
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Entity, Entity_ServiceCollection } from '../../../infra/entity';
import { StaffPermission, StaffPermission_Builder } from '../../../admin/staffPermission';
import { StaffPermissionEditUI } from '../../../admin/staffPermission/edit/staffPermission.edit'
import { StaffPermissionDeleteUI } from '../../../admin/staffPermission/delete/staffPermission.delete'
import { Staff, Staff_Service } from '../../../admin/staff';



@Component({
  selector: 'infra-entity-staffPermission-detail',
  templateUrl: './entity-staffPermission.detail.html',
  styleUrls: ['./entity-staffPermission.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    StaffPermissionEditUI,        
    StaffPermissionDeleteUI,
  ]
}) 
export class Entity_StaffPermission_DetailUI extends DetailUI<Entity, StaffPermission> {

  constructor(private serviceCollection: Entity_ServiceCollection = inject(Entity_ServiceCollection)) {
    super(serviceCollection.CollectionOfStaffPermission.bind(serviceCollection), inject(StaffPermission_Builder));
    this.currentInstance = new StaffPermission();
  }

  @Input()
  public set entity(value: Entity) {
    this.masterInstance = { ...value };
    //this.currentInstance.entity = { ...value };
    this.sourceInstance.entity = { ...value };
  }

  public staffLinker: ForeignkeyLinker<Staff> = new ForeignkeyLinker<Staff>(inject(Staff_Service), true);

		

}
