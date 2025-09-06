
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Staff, Staff_ServiceCollection } from '../../staff';
import { StaffPermission, StaffPermission_Builder } from '../../staffPermission';
import { StaffPermissionEditUI } from '../../staffPermission/edit/staffPermission.edit'
import { StaffPermissionDeleteUI } from '../../staffPermission/delete/staffPermission.delete'
import { Entity, Entity_Service } from '../../../infra/entity';



@Component({
  selector: 'admin-staff-staffPermission-detail',
  templateUrl: './staff-staffPermission.detail.html',
  styleUrls: ['./staff-staffPermission.detail.scss'],
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
export class Staff_StaffPermission_DetailUI extends DetailUI<Staff, StaffPermission> {

  constructor(private serviceCollection: Staff_ServiceCollection = inject(Staff_ServiceCollection)) {
    super(serviceCollection.CollectionOfStaffPermission.bind(serviceCollection), inject(StaffPermission_Builder));
    this.currentInstance = new StaffPermission();
  }

  @Input()
  public set staff(value: Staff) {
    this.masterInstance = { ...value };
    //this.currentInstance.staff = { ...value };
    this.sourceInstance.staff = { ...value };
  }

  public entityLinker: ForeignkeyLinker<Entity> = new ForeignkeyLinker<Entity>(inject(Entity_Service), true);

		

}
